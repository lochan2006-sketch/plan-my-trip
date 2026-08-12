"use client";

import { useEffect, useState } from "react";

type Weather = {
  temperature: string;
  condition: string;
  recommendation: string;
};

type WeatherCardProps = {
  destination: string;
};

export default function WeatherCard({
  destination,
}: WeatherCardProps) {
  const [weather, setWeather] = useState<Weather>({
    temperature: "--",
    condition: "Loading...",
    recommendation: "Fetching weather...",
  });

  useEffect(() => {
    async function loadWeather() {
      try {
        const response = await fetch(
          `/api/weather?city=${encodeURIComponent(destination)}`
        );

        const data = await response.json();

        if (response.ok) {
          setWeather(data);
        } else {
          throw new Error();
        }
      } catch {
        setWeather({
          temperature: "--",
          condition: "Unavailable",
          recommendation:
            "Weather information is currently unavailable.",
        });
      }
    }

    loadWeather();
  }, [destination]);

  const icons: Record<string, string> = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Snow: "❄️",
    Thunderstorm: "⛈️",
    Mist: "🌫️",
  };

  const icon = icons[weather.condition] ?? "🌤️";

  return (
    <section className="rounded-3xl bg-gradient-to-r from-sky-500 to-blue-600 p-8 text-white shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-wider">
            Live Weather
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {weather.temperature}
          </h2>

          <p className="mt-2 text-lg">
            {weather.condition}
          </p>
        </div>

        <div className="text-6xl">{icon}</div>
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