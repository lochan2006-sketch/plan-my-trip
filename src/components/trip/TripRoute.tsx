import {
  MapPin,
  Navigation,
  ArrowRight,
} from "lucide-react";

type Props = {
  startingCity: string;
  destination: string;
  attractions: string[];
};

export default function TripRoute({
  startingCity,
  destination,
  attractions,
}: Props) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    destination
  )}`;

  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">
      <div className="flex items-center gap-3">
        <Navigation className="h-8 w-8 text-indigo-600" />

        <div>
          <p className="text-sm uppercase tracking-widest text-indigo-500">
            Journey
          </p>

          <h2 className="text-3xl font-bold">
            Trip Route
          </h2>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center">

        <div className="flex items-center gap-3">
          <MapPin className="text-green-600" />
          <span className="font-semibold">
            {startingCity}
          </span>
        </div>

        <ArrowRight className="my-4 h-6 w-6 text-indigo-500 rotate-90" />

        <div className="flex items-center gap-3">
          <MapPin className="text-red-600" />
          <span className="font-semibold">
            {destination}
          </span>
        </div>

      </div>

      <div className="mt-10 rounded-2xl bg-slate-50 p-6">

        <h3 className="mb-5 text-xl font-bold">
          Must Visit Places
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          {attractions.map((place) => (
            <div
              key={place}
              className="flex items-center gap-3 rounded-xl bg-white p-4"
            >
              <MapPin className="h-5 w-5 text-indigo-600" />

              <span>{place}</span>
            </div>
          ))}
        </div>

      </div>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
      >
        Open Destination in Google Maps
      </a>
    </section>
  );
}