"use client";

import FeatureRow from "./FeatureRow";

const features = [
  {
    title: "AI Trip Planning",
    description:
      "Create personalized itineraries in minutes based on your budget, interests, and travel style.",
    image: "/images/illustrations/planning.svg",
    points: [
      "Personalized day-wise itinerary",
      "Smart destination recommendations",
      "Plan in under 2 minutes",
    ],
  },
  {
    title: "Budget Optimization",
    description:
      "Estimate trip expenses before you travel and make better decisions without overspending.",
    image: "/images/illustrations/budget.svg",
    reverse: true,
    points: [
      "Transparent budget estimates",
      "Cost-friendly suggestions",
      "Travel smarter",
    ],
  },
  {
    title: "Stay & Transport",
    description:
      "Discover suitable hotels and transport recommendations that match your preferences.",
    image: "/images/illustrations/hotel.svg",
    points: [
      "Hotel recommendations",
      "Transport suggestions",
      "Convenient planning",
    ],
  },
  {
    title: "Travel Together",
    description:
      "Designed for friends, couples, families and solo travellers with flexible planning options.",
    image: "/images/illustrations/friends.svg",
    reverse: true,
    points: [
      "Group friendly",
      "Solo travel support",
      "Flexible trip planning",
    ],
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-gradient-to-b from-slate-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl space-y-28 px-6">
        {features.map((feature) => (
          <FeatureRow
            key={feature.title}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            reverse={feature.reverse}
            points={feature.points}
          />
        ))}
      </div>
    </section>
  );
}