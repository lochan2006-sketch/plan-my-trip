"use client";

import Link from "next/link";
import {
  MapPinned,
  RotateCcw,
  ArrowUpRight,
  Download,
  Heart,
  Sparkles,
  Users,
  CalendarDays,
  Wallet,
  Share2,
} from "lucide-react";
import { toast } from "sonner";

import { useTripStore } from "@/store/tripStore";
import { exportTripPDF } from "@/lib/pdf/exportTrip";

type TripHeroProps = {
  destination: string;
  startingCity: string;
  budget: string;
  travelers: number;
  days: number;
};

export default function TripHero({
  destination,
  startingCity,
  budget,
  travelers,
  days,
}: TripHeroProps) {
  const {
    trip,
    saveCurrentTrip,
  } = useTripStore();

  const handleSave = () => {
    saveCurrentTrip();

    toast.success("Trip saved successfully", {
      description: `${destination} has been added to your saved trips.`,
    });
  };

  const handleDownload = () => {
    if (!trip) return;

    exportTripPDF(trip);

    toast.success("Itinerary downloaded", {
      description: "Your ATLAS travel plan is ready.",
    });
  };

  const handleShare = async () => {
    const shareData = {
      title: `ATLAS Trip to ${destination}`,
      text: `Check out my ${days}-day trip to ${destination} planned with ATLAS.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);

        toast.success("Trip link copied!", {
          description: "You can now share your itinerary.",
        });
      }
    } catch (error) {
      // User closing the native share menu is not an error.
      if (
        error instanceof DOMException &&
        error.name === "AbortError"
      ) {
        return;
      }

      toast.error("Unable to share trip", {
        description: "Please try again.",
      });
    }
  };

  return (
    <section className="relative mb-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-700 via-indigo-600 to-cyan-500 p-8 text-white shadow-2xl md:p-10">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10">

        {/* Label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-cyan-200" />

          AI Generated Journey
        </div>

        {/* Destination */}
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
          {destination}
        </h1>

        {/* Route */}
        <div className="mt-4 flex flex-wrap items-center gap-3 text-lg text-indigo-100">
          <MapPinned className="h-5 w-5" />

          <span>{startingCity}</span>

          <ArrowUpRight className="h-5 w-5 text-white" />

          <span>{destination}</span>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-gray-900">
            ⭐ 4.8
          </span>

          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
            Adventure Friendly
          </span>

          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
            Best Season
          </span>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-sm text-indigo-100">
              <Wallet className="h-4 w-4" />
              Budget / Person
            </div>

            <p className="mt-2 text-2xl font-bold">
              {budget}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-sm text-indigo-100">
              <Users className="h-4 w-4" />
              Travelers
            </div>

            <p className="mt-2 text-2xl font-bold">
              {travelers}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-sm text-indigo-100">
              <CalendarDays className="h-4 w-4" />
              Duration
            </div>

            <p className="mt-2 text-2xl font-bold">
              {days} Days
            </p>
          </div>

        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-3">

          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-50"
          >
            <Download className="h-5 w-5" />
            Download PDF
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2 rounded-xl bg-rose-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-rose-600"
          >
            <Heart className="h-5 w-5" />
            Save Trip
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <Share2 className="h-5 w-5" />
            Share Trip
          </button>

          <Link
            href={`/destination/${destination.toLowerCase()}`}
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <MapPinned className="h-5 w-5" />
            Explore
          </Link>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <ArrowUpRight className="h-5 w-5" />
            Maps
          </a>

          <Link
            href="/#planner"
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <RotateCcw className="h-5 w-5" />
            Plan Again
          </Link>

        </div>

      </div>
    </section>
  );
}