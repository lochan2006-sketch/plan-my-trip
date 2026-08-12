import { notFound } from "next/navigation";
import Image from "next/image";

import { destinations } from "@/data/destinations";

import DestinationGallery from "@/components/destination/DestinationGallery";
import InfoSection from "@/components/destination/InfoSection";
import DestinationStatCard from "@/components/destination/DestinationStatCard";

import {
  Star,
  Wallet,
  CalendarDays,
  Compass,
} from "lucide-react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DestinationPage({
  params,
}: Props) {
  const { slug } = await params;

  const destination = destinations[slug.toLowerCase()];

  if (!destination) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="relative h-[70vh]">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 text-white">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Explore India
            </p>

            <h1 className="text-5xl font-extrabold md:text-7xl">
              {destination.name}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Discover the best experiences, attractions,
              food and adventures in {destination.name}.
            </p>

          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="relative z-20 mx-auto -mt-16 max-w-7xl px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          <DestinationStatCard
            icon={<Star />}
            title="Rating"
            value={destination.rating}
          />

          <DestinationStatCard
            icon={<Wallet />}
            title="Budget"
            value={destination.budgetRange}
          />

          <DestinationStatCard
            icon={<CalendarDays />}
            title="Best Season"
            value={destination.bestSeason}
          />

          <DestinationStatCard
            icon={<Compass />}
            title="Best For"
            value={destination.bestFor}
          />

        </div>
      </section>

      {/* Gallery */}
      <DestinationGallery
        images={[
          destination.image,
        ]}
      />

      {/* Attractions */}
      <InfoSection
        emoji="📍"
        title="Top Attractions"
        subtitle={`Places you shouldn't miss in ${destination.name}.`}
        items={destination.attractions}
      />

      {/* Adventure */}
      <InfoSection
        emoji="🎯"
        title="Adventure Activities"
        subtitle="Experience thrilling adventures."
        items={destination.adventure}
      />

      {/* Food */}
      <InfoSection
        emoji="🍜"
        title="Local Food"
        subtitle="Taste the authentic flavours."
        items={destination.food}
      />

      {/* Packing */}
      <InfoSection
        emoji="🎒"
        title="Packing Checklist"
        subtitle="Things to carry before your trip."
        items={destination.packing}
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-700 via-indigo-600 to-cyan-500 px-8 py-14 text-center text-white shadow-2xl md:px-16">

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
              Your Journey Starts Here
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
              Ready to explore {destination.name}?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-indigo-100">
              Let ATLAS create a personalized itinerary based on
              your budget, travel style and interests.
            </p>

            <a
              href="/#planner"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 font-bold text-indigo-700 shadow-lg transition hover:-translate-y-1 hover:bg-gray-50"
            >
              Plan My Trip
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}