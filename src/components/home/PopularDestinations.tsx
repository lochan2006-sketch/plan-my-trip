"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import DestinationCard from "@/components/planner/DestinationCard";
import { destinations } from "@/data/destinations";

export default function PopularDestinations() {
  const router = useRouter();

  const popular = Object.values(destinations).slice(0, 3);

  return (
    <section
      id="destinations"
      className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <p className="font-semibold uppercase tracking-[0.25em] text-indigo-600">
          Explore India
        </p>

        <h2 className="mt-4 text-5xl font-extrabold text-gray-900">
          Popular Destinations
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Discover destinations loved by travellers. Find the
          perfect place based on your budget, interests and
          travel style.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {popular.map((destination, index) => (
          <motion.div
            key={destination.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
          >
            <DestinationCard
              name={destination.name}
              image={destination.image}
              description={`Experience the best of ${destination.name}.`}
              rating={destination.rating}
              budgetRange={destination.budgetRange}
              bestFor={destination.bestFor}
              bestSeason={destination.bestSeason}
              onSelect={() =>
                router.push(
                  `/?destination=${encodeURIComponent(
                    destination.name
                  )}`
                )
              }
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}