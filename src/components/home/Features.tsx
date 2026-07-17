const features = [
  {
    title: "AI Itinerary",
    description:
      "Get a personalized day-by-day travel plan in seconds.",
    icon: "🗺️",
  },
  {
    title: "Budget Planning",
    description:
      "Estimate the total trip cost before you travel.",
    icon: "💰",
  },
  {
    title: "Hotel Suggestions",
    description:
      "Find accommodation that matches your budget.",
    icon: "🏨",
  },
  {
    title: "Travel Together",
    description:
      "Designed for college students and friend groups.",
    icon: "👥",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Why Choose PlanMyTrip?
        </h2>

        <p className="mt-4 text-gray-600">
          Everything you need to plan an affordable trip in one place.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="mb-4 text-4xl">{feature.icon}</div>

            <h3 className="mb-2 text-xl font-semibold">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}