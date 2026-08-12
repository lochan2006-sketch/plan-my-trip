import { TripFormData } from "@/types/trip";

export function buildTripPrompt(
  formData: TripFormData,
  tripMode: "known" | "suggest"
): string {
  return `
You are ATLAS, an expert AI travel planner.

Create a practical, affordable travel plan based on the user's information.

USER DETAILS

Starting City: ${formData.startingCity}

Destination:
${
  tripMode === "known"
    ? formData.destination
    : "Choose the best destination based on the user's budget, interests, travel duration, and starting city."
}

Budget Per Person: ₹${formData.budget}

Travelers: ${formData.travelers}

Days: ${formData.days}

Interests: ${formData.interests || "General travel"}


IMPORTANT REQUIREMENTS

1. Stay within the user's approximate budget.
2. Create exactly ${formData.days} itinerary days.
3. Make the itinerary practical and realistic.
4. Consider the starting city when suggesting transport.
5. Recommend affordable accommodation.
6. Include activities relevant to the user's interests.
7. Keep activities suitable for the destination and trip duration.
8. Provide useful packing suggestions.
9. Do not invent impossible travel times or combinations.
10. Return valid JSON only.


RETURN EXACTLY THIS JSON STRUCTURE

{
  "startingCity": "${formData.startingCity}",
  "destination": "",
  "budget": "",
  "travelers": ${Number(formData.travelers)},
  "days": ${Number(formData.days)},
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


ITINERARY REQUIREMENTS

The itinerary array must contain exactly ${formData.days} objects.

Each object must contain:

- day: the day number
- activities: an array of useful places or activities for that day

Do not include markdown.
Do not include explanations.
Do not include comments.
Do not wrap the JSON in code fences.

Return JSON only.
`;
}