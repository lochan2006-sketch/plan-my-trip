"use client";

import {
  ArrowRight,
  Download,
  Bookmark,
} from "lucide-react";
import Link from "next/link";

import { exportTripPDF } from "@/lib/pdf/exportTrip";
import { TripResponse } from "@/types/ai";

type TripCTAProps = {
  trip: TripResponse;
  onSave?: () => void;
  isSaved?: boolean;
};

export default function TripCTA({
  trip,
  onSave,
  isSaved = false,
}: TripCTAProps) {
  return (
    <section className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-8 text-white shadow-xl sm:p-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-100">
          Your journey is ready
        </p>

        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Ready for Your Next Adventure?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-white/90">
          Save your itinerary, download it for offline use,
          or start planning another trip with ATLAS.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {/* Download PDF */}
          <button
            type="button"
            onClick={() => exportTripPDF(trip)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Download className="h-5 w-5" />
            Download PDF
          </button>

          {/* Save Trip */}
          {onSave && (
            <button
              type="button"
              onClick={onSave}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Bookmark
                className={`h-5 w-5 ${
                  isSaved ? "fill-current" : ""
                }`}
              />

              {isSaved
                ? "Trip Saved"
                : "Save Trip"}
            </button>
          )}

          {/* New Trip */}
          <Link
            href="/#planner"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Plan Another Trip
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}