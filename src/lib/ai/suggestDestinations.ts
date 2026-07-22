import { destinations } from "@/data/destinations";

type SuggestionInput = {
  budget: number;
  days: number;
  interests: string;
};

export function suggestDestinations({
  budget,
  days,
  interests,
}: SuggestionInput) {
  const interest = interests.toLowerCase();

  const suggestions = Object.values(destinations)
    .map((destination) => {
      let score = 0;

      // Interest matching
      if (
        interest.includes("adventure") &&
        destination.adventure.length > 0
      ) {
        score += 3;
      }

      if (
        interest.includes("food") &&
        destination.food.length > 0
      ) {
        score += 2;
      }

      // Budget preference
      if (budget < 5000) {
        score += destination.hotel.price.includes("₹1100")
          ? 2
          : 1;
      } else if (budget < 15000) {
        score += 2;
      } else {
        score += 3;
      }

      // Trip duration
      if (days <= 3) {
        score += 2;
      } else {
        score += 1;
      }

      return {
        ...destination,
        score,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return suggestions;
}