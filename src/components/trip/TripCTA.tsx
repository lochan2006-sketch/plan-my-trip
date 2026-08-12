import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TripCTA() {
  return (
    <section className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-10 text-center text-white shadow-xl">
      <h2 className="text-4xl font-bold">
        Ready for Your Next Adventure?
      </h2>

      <p className="mt-4 text-lg text-white/90">
        Create another AI-powered itinerary in just a few seconds.
      </p>

      <Link
        href="/#planner"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:scale-105"
      >
        Plan Another Trip
        <ArrowRight className="h-5 w-5" />
      </Link>
    </section>
  );
}