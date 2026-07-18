"use client";

import { useTripStore } from "@/store/tripStore";

import TripHeader from "@/components/trip/TripHeader";
import SummaryCard from "@/components/trip/SummaryCard";
import InfoCard from "@/components/trip/InfoCard";
import DayCard from "@/components/trip/DayCard";
import PackingCard from "@/components/trip/PackingCard";

export default function TripPage() {
  const { trip } = useTripStore();

  if (!trip) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
          <h1 className="mb-4 text-2xl font-bold text-gray-900">
            No Trip Found
          </h1>

          <p className="text-gray-600">
            Generate a trip from the planner to view your itinerary.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <TripHeader />

        <section className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold">
            📍 {trip.destination}
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <SummaryCard
              title="Starting City"
              value={trip.startingCity}
              color="bg-indigo-50"
            />

            <SummaryCard
              title="Budget"
              value={`₹${trip.budget}`}
              color="bg-green-50"
            />

            <SummaryCard
              title="Travelers"
              value={String(trip.travelers)}
              color="bg-yellow-50"
            />

            <SummaryCard
              title="Days"
              value={String(trip.days)}
              color="bg-orange-50"
            />
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <InfoCard
            emoji="🚆"
            title="Recommended Transport"
            description={trip.transport}
          />

          <InfoCard
            emoji="🏨"
            title="Recommended Hotel"
            description={trip.hotel.name}
          />
        </section>

        <section className="mt-8 rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold">
            🗺️ Suggested Itinerary
          </h2>

          <div className="space-y-5">
            {trip.itinerary.map((day) => (
              <DayCard
                key={day.day}
                day={day.day}
                activities={day.activities}
              />
            ))}
          </div>
          <PackingCard items={trip.packingTips} />

        </section>
      </div>
    </main>
  );
}