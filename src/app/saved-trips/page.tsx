"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Trash2,
  Search,
  CalendarDays,
  Users,
  Wallet,
  Star,
  ArrowRight,
} from "lucide-react";

import { useTripStore } from "@/store/tripStore";
import { destinations } from "@/data/destinations";

export default function SavedTripsPage() {
  const {
    savedTrips,
    loadSavedTrips,
    removeSavedTrip,
    setTrip,
  } = useTripStore();

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadSavedTrips();
  }, [loadSavedTrips]);

  const filteredTrips = useMemo(() => {
    return savedTrips.filter((trip) =>
      trip.destination
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [savedTrips, search]);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-rose-100 p-3">
                <Heart className="h-7 w-7 fill-rose-500 text-rose-500" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
                  Your Journeys
                </p>

                <h1 className="text-4xl font-extrabold text-gray-900">
                  Saved Trips
                </h1>
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-gray-600">
              Keep your favorite ATLAS journeys ready for your next adventure.
            </p>
          </div>

          <Link
            href="/#planner"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            Plan New Trip
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Search */}
        {savedTrips.length > 0 && (
          <div className="mb-8 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search saved destinations..."
                className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-gray-900 shadow-sm outline-none transition placeholder:text-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>
        )}

        {/* Empty state */}
        {savedTrips.length === 0 && (
          <div className="rounded-3xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-50">
              <Heart className="h-10 w-10 text-rose-400" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              No saved trips yet
            </h2>

            <p className="mx-auto mt-3 max-w-md text-gray-600">
              Start planning your next adventure and save your favorite
              itineraries here.
            </p>

            <Link
              href="/#planner"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Start Planning
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        {/* No search results */}
        {savedTrips.length > 0 && filteredTrips.length === 0 && (
          <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
            <Search className="mx-auto h-10 w-10 text-gray-400" />

            <h2 className="mt-4 text-xl font-bold text-gray-900">
              No destinations found
            </h2>

            <p className="mt-2 text-gray-600">
              Try searching for another destination.
            </p>
          </div>
        )}

        {/* Cards */}
        {filteredTrips.length > 0 && (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTrips.map((trip) => {
              const destinationKey = trip.destination.toLowerCase();
              const destinationData =
                destinations[destinationKey];

              return (
                <article
                  key={`${trip.destination}-${trip.startingCity}`}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    {destinationData ? (
                      <Image
                        src={destinationData.image}
                        alt={trip.destination}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-500 to-cyan-500 text-5xl">
                        🌍
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-5 right-5">
                      <h2 className="text-2xl font-bold text-white">
                        {trip.destination}
                      </h2>

                      {destinationData && (
                        <p className="mt-1 text-sm text-white/90">
                          {destinationData.bestFor}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">

                    {destinationData && (
                      <div className="mb-5 flex items-center justify-between">
                        <span className="flex items-center gap-1 text-sm font-semibold text-yellow-500">
                          <Star className="h-4 w-4 fill-yellow-400" />
                          {destinationData.rating}
                        </span>

                        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          {destinationData.bestSeason}
                        </span>
                      </div>
                    )}

                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-xl bg-slate-50 p-3">
                        <CalendarDays className="h-4 w-4 text-indigo-600" />

                        <p className="mt-2 text-xs text-gray-500">
                          Duration
                        </p>

                        <p className="font-semibold text-gray-900">
                          {trip.days} days
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3">
                        <Users className="h-4 w-4 text-indigo-600" />

                        <p className="mt-2 text-xs text-gray-500">
                          Travelers
                        </p>

                        <p className="font-semibold text-gray-900">
                          {trip.travelers}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3">
                        <Wallet className="h-4 w-4 text-indigo-600" />

                        <p className="mt-2 text-xs text-gray-500">
                          Budget
                        </p>

                        <p className="font-semibold text-gray-900">
                          {trip.budget}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex gap-3">
                      <Link
                        href="/trip"
                        onClick={() => setTrip(trip)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
                      >
                        Open Trip
                        <ArrowRight className="h-4 w-4" />
                      </Link>

                      <button
                        type="button"
                        onClick={() =>
                          removeSavedTrip(trip.destination)
                        }
                        aria-label={`Delete saved ${trip.destination} trip`}
                        className="rounded-xl border border-gray-200 px-4 text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}