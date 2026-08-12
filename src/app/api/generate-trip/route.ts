import { NextResponse } from "next/server";
import OpenAI from "openai";

import { buildTripPrompt } from "@/lib/ai/tripPrompt";
import { validateTripForm } from "@/lib/validation";
import { TripFormData } from "@/types/trip";
import { generateMockTrip } from "@/lib/ai/mockTrip";

const RATE_LIMIT = 10;
const RATE_WINDOW = 60 * 60 * 1000;

const requests = new Map<
  string,
  { count: number; resetAt: number }
>();

function getClientIdentifier(request: Request) {
  return (
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    "unknown"
  )
    .split(",")[0]
    .trim();
}

function isRateLimited(identifier: string) {
  const now = Date.now();
  const record = requests.get(identifier);

  if (!record || now > record.resetAt) {
    requests.set(identifier, {
      count: 1,
      resetAt: now + RATE_WINDOW,
    });

    return false;
  }

  if (record.count >= RATE_LIMIT) {
    return true;
  }

  record.count += 1;

  return false;
}
const USE_MOCK_DATA =
  process.env.USE_MOCK_DATA === "true";

export async function POST(request: Request) {
  try {
    const identifier = getClientIdentifier(request);

    if (isRateLimited(identifier)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many trip requests. Please try again later.",
        },
        {
          status: 429,
        }
      );
    }
    const body = await request.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request.",
        },
        { status: 400 }
      );
    }

    const { formData, tripMode } = body;

    const validationError = validateTripForm(
      formData,
      tripMode
    );

    if (validationError) {
      return NextResponse.json(
        {
          success: false,
          message: validationError,
        },
        { status: 400 }
      );
    }

    // Development / testing mode
    if (USE_MOCK_DATA) {
      return NextResponse.json({
        success: true,
        result: generateMockTrip(
          formData,
          tripMode
        ),
      });
    }

    // Production AI mode
    if (!process.env.OPENAI_API_KEY) {
      console.error(
        "OPENAI_API_KEY is not configured."
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "AI service is not configured.",
        },
        { status: 500 }
      );
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = buildTripPrompt(
      formData as TripFormData,
      tripMode
    );

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
    });

    if (!response.output_text) {
      throw new Error(
        "AI returned an empty response."
      );
    }

    let result;

    try {
      result = JSON.parse(
        response.output_text
      );
    } catch {
      console.error(
        "Invalid JSON returned by AI:",
        response.output_text
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "The AI returned an invalid trip. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(
      "Generate trip error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to generate trip. Please try again.",
      },
      { status: 500 }
    );
  }
}