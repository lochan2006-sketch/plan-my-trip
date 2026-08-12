"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import DestinationBanner from "./DestinationBanner";

const destinations = [
  {
    title: "Manali",
    subtitle: "Adventure Paradise • Snow • Mountains",
    image: "/images/destinations/manali/hero.jpg",
  },
  {
    title: "Goa",
    subtitle: "Golden Beaches • Nightlife • Water Sports",
    image: "/images/destinations/goa/hero.jpg",
  },
  {
    title: "Jaipur",
    subtitle: "Royal Heritage • Forts • Culture",
    image: "/images/destinations/jaipur/hero.jpg",
  },
  {
    title: "Rishikesh",
    subtitle: "River Adventures • Yoga • Nature",
    image: "/images/destinations/rishikesh/hero.jpg",
  },
  {
    title: "Udaipur",
    subtitle: "Lakes • Palaces • Romantic Getaways",
    image: "/images/destinations/udaipur/hero.jpg",
  },
];

export default function ExploreIndia() {

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Explore India
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Discover Incredible Destinations
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            From snow-covered mountains to sunny beaches, discover
            India's most loved destinations and start planning your
            next unforgettable journey.
          </p>
        </motion.div>

        {/* Destination banners */}
        <div className="space-y-8 md:space-y-10">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
            >
              <DestinationBanner
                title={destination.title}
                subtitle={destination.subtitle}
                image={destination.image}
                align={index % 2 === 0 ? "left" : "right"}
                href={`/destination/${destination.title.toLowerCase()}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("planner")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            Plan My Adventure
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}