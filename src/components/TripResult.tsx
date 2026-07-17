type TripResultProps = {
  destination: string;
  budget: string;
  transport: string;
  hotel: string;
  itinerary: string[];
};

export default function TripResult({
  destination,
  budget,
  transport,
  hotel,
  itinerary,
}: TripResultProps) {
  return (
    <section className="mx-auto mt-16 max-w-4xl rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="mb-8 text-3xl font-bold text-gray-900">
        Your AI Trip Plan ✨
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-semibold text-gray-500">Destination</h3>
          <p className="text-xl font-bold">{destination}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-500">
            Estimated Cost
          </h3>
          <p className="text-xl font-bold">{budget}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-500">
            Recommended Transport
          </h3>
          <p>{transport}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-500">
            Hotel Recommendation
          </h3>
          <p>{hotel}</p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="mb-4 text-2xl font-bold">
          Day-by-Day Itinerary
        </h3>

        <ul className="space-y-3">
          {itinerary.map((item, index) => (
            <li
              key={index}
              className="rounded-lg bg-gray-100 p-4"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}