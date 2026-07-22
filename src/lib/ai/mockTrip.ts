import { destinations } from "@/data/destinations";
import { TripResponse } from "@/types/ai";
import { TripFormData } from "@/types/trip";

export function generateMockTrip(
  formData: TripFormData,
  tripMode: "known" | "suggest"
): TripResponse {
  const destinationKey =
    tripMode === "known"
      ? formData.destination.toLowerCase()
      : "manali";

  const destination =
    destinations[destinationKey] ??
    destinations.manali;

  const days = Math.max(Number(formData.days), 1);

  const budget = Number(formData.budget);

  // -------- Hotel Recommendation --------

  let hotel = destination.hotel;

  if (budget < 5000) {
    hotel = {
      name: `Budget Hostel - ${destination.name}`,
      price: "₹700/night",
    };
  } else if (budget >= 15000) {
    hotel = {
      name: `${destination.name} Grand Resort`,
      price: "₹3500/night",
    };
  }

  // -------- Interests --------

  const interests = formData.interests
    .toLowerCase()
    .split(",")
    .map((item) => item.trim());

  let activities = [...destination.attractions];

  if (interests.some((i) => i.includes("adventure"))) {
    activities.push(...destination.adventure);
  }

  if (interests.some((i) => i.includes("food"))) {
    activities.push(...destination.food);
  }

  // Remove duplicates

  activities = [...new Set(activities)];

  // -------- Day-wise Itinerary --------

  const itinerary = [];

  for (let day = 1; day <= days; day++) {
    const start = (day - 1) * 2;

    const dayActivities = [];

    if (day === 1) {
      dayActivities.push("Check-in at hotel");
    }

    dayActivities.push(...activities.slice(start, start + 2));

    dayActivities.push("Enjoy local cuisine");

    if (day === days) {
      dayActivities.push("Return Journey");
    }

    itinerary.push({
      day,
      activities: dayActivities,
    });
  }

  // -------- Packing --------

  const packingTips = [...destination.packing];

  if (interests.some((i) => i.includes("adventure"))) {
    packingTips.push("Sports Shoes");
  }

  if (budget >= 15000) {
    packingTips.push("Camera");
  }

  return {
    startingCity: formData.startingCity,
    destination: destination.name,
    budget: `₹${budget}`,
    travelers: Number(formData.travelers),
    days,
    transport: destination.transport,
    hotel,
    itinerary,
    packingTips: [...new Set(packingTips)],
  };
}