import { TripFormData } from "@/types/trip";

export function buildTripPrompt(
  formData: TripFormData,
  tripMode: "known" | "suggest"
): string {
  return `
You are an expert travel planner.

Generate a trip plan in valid JSON only.

User Details:

Starting City: ${formData.startingCity}
Destination: ${
  tripMode === "known"
    ? formData.destination
    : "Suggest the best destination"
}
Budget Per Person: ₹${formData.budget}
Travelers: ${formData.travelers}
Days: ${formData.days}
Interests: ${formData.interests}

Return JSON in exactly this format:

{
  "destination": "",
  "budget": "",
  "transport": "",
  "hotel": {
    "name": "",
    "price": ""
  },
  "itinerary": [
    {
      "day": 1,
      "activities": []
    }
  ],
  "packingTips": []
}

Do not return markdown.

Do not explain anything.

Return JSON only.
`;
}