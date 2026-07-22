import {
  generalTravelTips,
  destinationTravelTips,
} from "@/data/travelTips";

type TravelTipsProps = {
  destination: string;
};

export default function TravelTips({
  destination,
}: TravelTipsProps) {
  const tips = [
    ...generalTravelTips,
    ...(destinationTravelTips[destination] ?? []),
  ];

  return (
    <section className="mt-8 rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-3xl font-bold">
        💡 Travel Tips
      </h2>

      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-lg bg-gray-50 p-4"
          >
            <span className="text-green-600 text-xl">
              ✓
            </span>

            <p className="text-gray-700">
              {tip}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}