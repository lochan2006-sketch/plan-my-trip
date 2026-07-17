import { NextResponse } from "next/server";
import OpenAI from "openai";

import { buildTripPrompt } from "@/lib/ai/tripPrompt";
import { validateTripForm } from "@/lib/validation";
import { TripFormData } from "@/types/trip";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { formData, tripMode } = await request.json();

    const error = validateTripForm(formData, tripMode);

    if (error) {
      return NextResponse.json(
        { success: false, message: error },
        { status: 400 }
      );
    }

    const prompt = buildTripPrompt(
      formData as TripFormData,
      tripMode
    );

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
    });

    return NextResponse.json({
      success: true,
      result: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to generate trip.",
      },
      {
        status: 500,
      }
    );
  }
}