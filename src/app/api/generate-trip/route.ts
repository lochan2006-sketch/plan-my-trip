import { NextResponse } from "next/server";
import OpenAI from "openai";

import { buildTripPrompt } from "@/lib/ai/tripPrompt";
import { validateTripForm } from "@/lib/validation";
import { TripFormData } from "@/types/trip";

const USE_MOCK_DATA = true;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { formData, tripMode } = await request.json();

    const error = validateTripForm(formData, tripMode);

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error,
        },
        {
          status: 400,
        }
      );
    }

    // ---------- MOCK RESPONSE ----------
    if (USE_MOCK_DATA) {
      return NextResponse.json({
        success: true,
        result: {
          startingCity: formData.startingCity,

          destination:
            tripMode === "known"
              ? formData.destination
              : "Manali",

          budget: `₹${formData.budget}`,

          travelers: Number(formData.travelers),

          days: Number(formData.days),

          transport: "Train",

          hotel: {
            name: `Zostel ${
              tripMode === "known"
                ? formData.destination
                : "Manali"
            }`,
            price: "₹1200/night",
          },

          itinerary: [
            {
              day: 1,
              activities: [
                "Check-in at hotel",
                "Visit Mall Road",
                "Enjoy local food",
              ],
            },
            {
              day: 2,
              activities: [
                "Solang Valley",
                "Adventure Sports",
                "Cafe Hopping",
              ],
            },
            {
              day: 3,
              activities: [
                "Shopping",
                "Return Journey",
              ],
            },
          ],

          packingTips: [
            "Power Bank",
            "Water Bottle",
            "Comfortable Shoes",
            "Identity Card",
          ],
        },
      });
    }

    // ---------- OPENAI RESPONSE ----------
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
      result: JSON.parse(response.output_text),
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