import DestinationCard from "./DestinationCard";

type Destination = {
  name: string;
  image: string;
  rating: number;
  budgetRange: string;
  bestFor: string;
  bestSeason: string;
};

type Props = {
  destinations: Destination[];
  onSelect: (destination: string) => void;
};

export default function DestinationSuggestions({
  destinations,
  onSelect,
}: Props) {
  return (
    <section className="mt-8">
      <h2 className="mb-2 text-3xl font-bold text-gray-900">
        ✨ Suggested Destinations
      </h2>

      <p className="mb-8 text-gray-600">
        We found these destinations based on your budget, trip duration and interests.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.name}
            name={destination.name}
            image={destination.image}
            description={`Perfect for your ${destination.name} getaway.`}
            rating={destination.rating}
            budgetRange={destination.budgetRange}
            bestFor={destination.bestFor}
            bestSeason={destination.bestSeason}
            onSelect={() => onSelect(destination.name)}
          />
        ))}
      </div>
    </section>
  );
}