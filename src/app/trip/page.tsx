"use client";

import { useSearchParams } from "next/navigation";

export default function TripPage() {
  const searchParams = useSearchParams();

  const destination =
    searchParams.get("destination") || "Jaipur";

  const budget =
    searchParams.get("budget") || "5000";

  const travelers =
    searchParams.get("travelers") || "4";

  const days =
    searchParams.get("days") || "3";

  const startingCity =
    searchParams.get("startingCity") || "Delhi";

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-3 text-5xl font-bold text-gray-900">
          ✨ Your Trip is Ready
        </h1>

        <p className="mb-10 text-lg text-gray-600">
          Here's your AI-generated travel plan.
        </p>

        {/* Summary */}

        <div className="mb-8 rounded-2xl bg-white p-8 shadow">

          <h2 className="mb-6 text-3xl font-bold">
            📍 {destination}
          </h2>

          <div className="grid gap-6 md:grid-cols-4">

            <div className="rounded-xl bg-indigo-50 p-5">
              <p className="text-sm text-gray-500">
                Starting City
              </p>

              <p className="mt-2 text-xl font-bold">
                {startingCity}
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-5">
              <p className="text-sm text-gray-500">
                Budget
              </p>

              <p className="mt-2 text-xl font-bold">
                ₹{budget}
              </p>
            </div>

            <div className="rounded-xl bg-yellow-50 p-5">
              <p className="text-sm text-gray-500">
                Travelers
              </p>

              <p className="mt-2 text-xl font-bold">
                {travelers}
              </p>
            </div>

            <div className="rounded-xl bg-orange-50 p-5">
              <p className="text-sm text-gray-500">
                Days
              </p>

              <p className="mt-2 text-xl font-bold">
                {days}
              </p>
            </div>

          </div>
        </div>

        {/* Recommendations */}

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-4 text-2xl font-bold">
              🚆 Transport
            </h2>

            <p className="text-gray-700">
              Train (Recommended)
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-4 text-2xl font-bold">
              🏨 Hotel
            </h2>

            <p className="text-gray-700">
              Zostel {destination}
            </p>
          </div>

        </div>

        {/* Itinerary */}

        <div className="mt-8 rounded-2xl bg-white p-8 shadow">

          <h2 className="mb-6 text-3xl font-bold">
            🗺️ Suggested Itinerary
          </h2>

          <div className="space-y-5">

            <div className="rounded-xl bg-gray-100 p-5">
              <h3 className="font-bold">
                Day 1
              </h3>

              <p className="mt-2">
                Explore famous attractions in {destination}.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5">
              <h3 className="font-bold">
                Day 2
              </h3>

              <p className="mt-2">
                Local sightseeing and food tour.
              </p>
            </div>

            <div className="rounded-xl bg-gray-100 p-5">
              <h3 className="font-bold">
                Day 3
              </h3>

              <p className="mt-2">
                Shopping and return journey.
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}