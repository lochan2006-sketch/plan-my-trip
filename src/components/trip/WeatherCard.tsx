import { weatherData } from "@/data/weather";

type WeatherCardProps = {
  destination: string;
};

export default function WeatherCard({
  destination,
}: WeatherCardProps) {
  const weather =
    weatherData[destination] ?? {
      temperature: "--",
      condition: "Unknown",
      recommendation: "Weather information unavailable.",
    };

  return (
    <section className="rounded-3xl bg-gradient-to-r from-sky-500 to-blue-600 p-8 text-white shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-wider">
            Current Weather
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {weather.temperature}
          </h2>

          <p className="mt-2 text-lg">
            {weather.condition}
          </p>
        </div>

        <div className="text-6xl">
          🌤️
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white/15 p-4 backdrop-blur">
        <h3 className="font-semibold">
          Recommendation
        </h3>

        <p className="mt-2">
          {weather.recommendation}
        </p>
      </div>
    </section>
  );
}