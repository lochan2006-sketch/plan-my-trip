import { destinations } from "@/data/destinations";
import { Activity, TripResponse } from "@/types/ai";
import { TripFormData } from "@/types/trip";

export function generateMockTrip(
  formData: TripFormData,
  tripMode: "known" | "suggest"
): TripResponse {
  const destinationKey =
    tripMode === "known"
      ? formData.destination.trim().toLowerCase()
      : "manali";

  const curatedDestination =
    destinations[destinationKey];

  const destinationName =
    curatedDestination?.name ||
    formData.destination.trim() ||
    "Manali";

  const days = Math.max(
    Number(formData.days) || 1,
    1
  );

  const budget =
    Number(formData.budget) || 0;

  const travelers =
    Math.max(Number(formData.travelers) || 1, 1);

  // --------------------------------------------------
  // Hotel
  // --------------------------------------------------

  let hotel = curatedDestination?.hotel;

  if (!hotel) {
    if (budget < 5000) {
      hotel = {
        name: `${destinationName} Budget Stay`,
        price: "₹800/night",
      };
    } else if (budget >= 15000) {
      hotel = {
        name: `${destinationName} Premium Hotel`,
        price: "₹3500/night",
      };
    } else {
      hotel = {
        name: `${destinationName} Comfort Hotel`,
        price: "₹1800/night",
      };
    }
  } else {
    if (budget < 5000) {
      hotel = {
        name: `Budget Hostel - ${destinationName}`,
        price: "₹700/night",
      };
    } else if (budget >= 15000) {
      hotel = {
        name: `${destinationName} Grand Resort`,
        price: "₹3500/night",
      };
    }
  }

  // --------------------------------------------------
  // Interests
  // --------------------------------------------------

  const interests = formData.interests
    .toLowerCase()
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  // --------------------------------------------------
  // Activities
  // --------------------------------------------------

  let activityNames: string[] = [];

  if (curatedDestination) {
    activityNames = [
      ...curatedDestination.attractions,
    ];

    if (
      interests.some((interest) =>
        interest.includes("adventure")
      )
    ) {
      activityNames.push(
        ...curatedDestination.adventure
      );
    }

    if (
      interests.some((interest) =>
        interest.includes("food")
      )
    ) {
      activityNames.push(
        ...curatedDestination.food
      );
    }
  } else {
    // Generic fallback for ANY destination
    activityNames = [
      `Explore ${destinationName} city centre`,
      `Visit popular attractions in ${destinationName}`,
      `Discover local markets`,
      `Try local food`,
      `Explore nearby scenic spots`,
      `Enjoy a relaxed evening`,
    ];
  }

  activityNames = [
    ...new Set(activityNames),
  ];

  // --------------------------------------------------
  // Convert activity names into rich activities
  // --------------------------------------------------

  const activityTemplates: Activity[] =
    activityNames.map((activity, index) => ({
      title: activity,
      time:
        index % 3 === 0
          ? "09:00 AM"
          : index % 3 === 1
            ? "01:00 PM"
            : "05:00 PM",
      location: destinationName,
      duration:
        index % 3 === 0
          ? "1–2 hours"
          : "2 hours",
      cost:
        index % 4 === 0
          ? "₹0–₹300"
          : index % 4 === 1
            ? "₹300–₹700"
            : "₹200–₹500",
    }));

  // --------------------------------------------------
  // Day-wise itinerary
  // --------------------------------------------------

  const dayPlans = [
    {
      times: ["08:00 AM", "10:30 AM", "01:00 PM"],
      focus: "local exploration",
    },
    {
      times: ["08:30 AM", "11:00 AM", "04:00 PM"],
      focus: "nature and adventure",
    },
    {
      times: ["09:00 AM", "12:30 PM", "06:00 PM"],
      focus: "culture and local experiences",
    },
    {
      times: ["08:30 AM", "02:00 PM", "05:30 PM"],
      focus: "scenic exploration and relaxation",
    },
    {
      times: ["09:30 AM", "12:00 PM", "04:30 PM"],
      focus: "food, shopping and leisure",
    },
  ];

  const durations = [
    "1 hour",
    "1.5 hours",
    "2 hours",
    "2–3 hours",
  ];

  const costs = [
    "₹0",
    "₹100–₹300",
    "₹200–₹500",
    "₹300–₹700",
  ];

  const itinerary = [];

  for (let day = 1; day <= days; day++) {
    const plan =
      dayPlans[(day - 1) % dayPlans.length];

    const dayActivities: Activity[] = [];

    // Select a different part of the activity list
    // for each day.
    const availableActivities =
      activityTemplates.filter(
        (_, index) =>
          index % days === (day - 1) % days
      );

    // If there are not enough activities,
    // use activities from another section.
    const selectedActivities =
      availableActivities.length >= 3
        ? availableActivities.slice(0, 3)
        : activityTemplates
          .slice(
            ((day - 1) * 3) %
            Math.max(activityTemplates.length, 1),
            ((day - 1) * 3) %
            Math.max(activityTemplates.length, 1) + 3
          );

    selectedActivities.forEach(
      (activity, index) => {
        dayActivities.push({
          title: activity.title,
          time: plan.times[index],
          location:
            activity.location ||
            destinationName,
          duration:
            durations[
            (day + index) %
            durations.length
            ],
          cost:
            costs[
            (day + index) %
            costs.length
            ],
        });
      }
    );

    // Make sure every day has useful content
    // even when the destination has few activities.
    if (dayActivities.length === 0) {
      dayActivities.push(
        {
          title: `Explore ${destinationName}`,
          time: plan.times[0],
          location: destinationName,
          duration: "2 hours",
          cost: "₹0–₹500",
        },
        {
          title: `Enjoy ${plan.focus}`,
          time: plan.times[1],
          location: destinationName,
          duration: "2 hours",
          cost: "₹200–₹600",
        },
        {
          title: "Try local cuisine",
          time: plan.times[2],
          location: destinationName,
          duration: "1 hour",
          cost: "₹300–₹600",
        }
      );
    }

    // Day 1
    if (day === 1) {
      dayActivities.unshift({
        title: "Check-in at hotel",
        time: "02:00 PM",
        location: destinationName,
        duration: "30 minutes",
        cost: "Included in stay",
      });
    }

    // Final day
    if (day === days) {
      dayActivities.push({
        title: "Prepare for return journey",
        time: "06:00 PM",
        location: destinationName,
        duration: "1 hour",
        cost: "Depends on transport",
      });
    }

    itinerary.push({
      day,
      activities: dayActivities,
    });
  }

  // --------------------------------------------------
  // Packing
  // --------------------------------------------------

  let packingTips = curatedDestination
    ? [...curatedDestination.packing]
    : [
      "Comfortable walking shoes",
      "Weather-appropriate clothing",
      "Power bank",
      "Reusable water bottle",
      "Travel documents",
    ];

  if (
    interests.some((interest) =>
      interest.includes("adventure")
    )
  ) {
    packingTips.push(
      "Sports shoes",
      "Light backpack"
    );
  }

  if (
    interests.some((interest) =>
      interest.includes("beach")
    )
  ) {
    packingTips.push(
      "Sunscreen",
      "Sunglasses",
      "Swimwear"
    );
  }

  if (budget >= 15000) {
    packingTips.push("Camera");
  }

  // --------------------------------------------------
  // Transport
  // --------------------------------------------------

  const transport =
    curatedDestination?.transport ||
    `Recommended transport from ${formData.startingCity} to ${destinationName}, followed by local taxis or public transport.`;

  // --------------------------------------------------
  // Final response
  // --------------------------------------------------

  return {
    startingCity: formData.startingCity,
    destination: destinationName,
    budget: `₹${budget.toLocaleString("en-IN")}`,
    travelers,
    days,
    transport,
    hotel,
    itinerary,
    packingTips: [
      ...new Set(packingTips),
    ],
  };
}