"use client";

import { useEffect } from "react";

import { useTripStore } from "@/store/tripStore";

import TripHero from "@/components/trip/TripHero";
import SummaryCard from "@/components/trip/SummaryCard";
import InfoCard from "@/components/trip/InfoCard";
import DayCard from "@/components/trip/DayCard";
import PackingCard from "@/components/trip/PackingCard";
import BudgetBreakdown from "@/components/trip/BudgetBreakdown";
import TripCostSummary from "@/components/trip/TripCostSummary";
import TravelTips from "@/components/trip/TravelTips";
import WeatherCard from "@/components/trip/WeatherCard";


export default function TripPage() {
  const {
    trip,
    loadTrip,
  } = useTripStore();

  useEffect(() => {
    loadTrip();
  }, [loadTrip]);

  if (!trip) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 text-3xl">
            🧭
          </div>

          <h1 className="mt-6 text-2xl font-bold text-gray-900">
            No Trip Found
          </h1>

          <p className="mt-3 text-gray-600">
            Generate a trip from the ATLAS planner to view your
            personalized itinerary.
          </p>

          <a
            href="/#planner"
            className="mt-6 inline-flex rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Start Planning
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:py-10">
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            HERO
        ====================================================== */}

        <TripHero
          destination={trip.destination}
          startingCity={trip.startingCity}
          budget={trip.budget}
          travelers={trip.travelers}
          days={trip.days}
        />

        {/* =====================================================
            WEATHER
        ====================================================== */}

        <section className="mt-8">
          <WeatherCard destination={trip.destination} />
        </section>

        {/* =====================================================
            TRIP OVERVIEW
        ====================================================== */}

        <section className="mt-8 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
          <div className="border-b border-gray-100 bg-gradient-to-r from-indigo-50 via-white to-cyan-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Trip Overview
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              📍 {trip.destination}
            </h2>

            <p className="mt-2 text-gray-600">
              Everything you need to know about your journey at a glance.
            </p>
          </div>

          <div className="p-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <SummaryCard
                title="Starting City"
                value={trip.startingCity}
                color="bg-indigo-50"
              />

              <SummaryCard
                title="Budget Per Person"
                value={trip.budget}
                color="bg-green-50"
              />

              <SummaryCard
                title="Travelers"
                value={String(trip.travelers)}
                color="bg-yellow-50"
              />

              <SummaryCard
                title="Duration"
                value={`${trip.days} Days`}
                color="bg-orange-50"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            ITINERARY — MAIN FEATURE
        ====================================================== */}

        <section className="mt-8 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
          <div className="border-b border-gray-100 bg-gradient-to-r from-indigo-50 via-white to-cyan-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Your Journey
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              🗺️ Suggested Itinerary
            </h2>

            <p className="mt-2 max-w-2xl text-gray-600">
              Your personalized day-by-day travel plan, created by ATLAS.
            </p>
          </div>

          <div className="p-5 sm:p-8">
            <div className="space-y-6">
              {trip.itinerary.map((day) => (
                <DayCard
                  key={day.day}
                  day={day.day}
                  activities={day.activities}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            BUDGET
        ====================================================== */}

        <section className="mt-8">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Trip Finances
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900">
              💰 Budget & Cost
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <BudgetBreakdown budget={trip.budget} />

            <TripCostSummary
              budget={trip.budget}
              travelers={trip.travelers}
            />
          </div>
        </section>

        {/* =====================================================
            HOTEL & TRANSPORT
        ====================================================== */}

        <section className="mt-8">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Travel Essentials
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900">
              🏨 Stay & Transport
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <InfoCard
              emoji="🚆"
              title="Recommended Transport"
              description={trip.transport}
              subtitle="Budget-friendly and convenient"
              rating={4.7}
              features={[
                "Comfortable journey",
                "Budget friendly",
                "Easy booking",
              ]}
              buttonText="View Route"
            />

            <InfoCard
              emoji="🏨"
              title="Recommended Stay"
              description={trip.hotel.name}
              subtitle={trip.hotel.price}
              rating={4.6}
              features={[
                "Free WiFi",
                "Near city centre",
                "Highly rated by travellers",
              ]}
              buttonText="View Details"
            />
          </div>
        </section>

        {/* =====================================================
            PACKING & TRAVEL TIPS
        ====================================================== */}

        <section className="mt-8">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Before You Go
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900">
              🎒 Travel Essentials
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <PackingCard items={trip.packingTips} />

            <TravelTips destination={trip.destination} />
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}



      </div>
    </main>
  );
}