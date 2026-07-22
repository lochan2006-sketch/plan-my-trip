import Image from "next/image";

type DestinationCardProps = {
  name: string;
  image: string;
  description: string;
  rating: number;
  budgetRange: string;
  bestFor: string;
  bestSeason: string;
  onSelect: () => void;
};

export default function DestinationCard({
  name,
  image,
  description,
  rating,
  budgetRange,
  bestFor,
  bestSeason,
  onSelect,
}: DestinationCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {name}
        </h3>

        <p className="mt-2 font-semibold text-yellow-500">
          ⭐ {rating}
        </p>

        <p className="mt-3 text-gray-600">
          {description}
        </p>

        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <p>💰 {budgetRange}</p>

          <p>🎯 Best For: {bestFor}</p>

          <p>🌤 Best Season: {bestSeason}</p>
        </div>

        <button
          onClick={onSelect}
          className="mt-6 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Choose Destination
        </button>
      </div>
    </div>
  );
}