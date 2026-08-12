"use client";

import { motion } from "framer-motion";
import {
  Compass,
  MapPinned,
  Sparkles,
  ArrowDown,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-3xl rounded-3xl bg-black/20 p-8 backdrop-blur-sm">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur-md"
          >
            <Sparkles size={16} />
            ATLAS
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl"
          >
            Your Next Adventure
            <span className="block text-cyan-300">
              Starts Here
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-white/90"
          >
            Plan unforgettable trips in under{" "}
            <strong>2 minutes.</strong>

            Discover destinations, estimate budgets,
            generate itineraries, hotels and transport
            recommendations — all powered by AI.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <button
              onClick={() =>
                document
                  .getElementById("planner")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="rounded-2xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-indigo-700"
            >
              Start Planning
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("destinations")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Explore Destinations
            </button>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4 text-white/90"
          >
            <span className="text-yellow-400 text-lg">
              ⭐⭐⭐⭐⭐
            </span>

            <span className="text-sm">
              Smart travel planning • Budget friendly • Instant itinerary
            </span>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-14 grid gap-5 md:grid-cols-3"
          >
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md transition hover:bg-white/15">
              <Compass className="mb-3 text-cyan-300" />

              <h3 className="font-semibold text-white">
                AI Recommendations
              </h3>

              <p className="mt-2 text-sm text-gray-200">
                Personalized destinations based on
                your interests.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md transition hover:bg-white/15">
              <MapPinned className="mb-3 text-cyan-300" />

              <h3 className="font-semibold text-white">
                Smart Itineraries
              </h3>

              <p className="mt-2 text-sm text-gray-200">
                Day-wise travel plans with hotels,
                transport and attractions.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md transition hover:bg-white/15">
              <Sparkles className="mb-3 text-cyan-300" />

              <h3 className="font-semibold text-white">
                Travel Faster
              </h3>

              <p className="mt-2 text-sm text-gray-200">
                Plan your trip in minutes instead of
                hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/80 animate-bounce">
          <p className="mb-2 text-sm">
            Scroll to Explore
          </p>

          <ArrowDown size={22} />
        </div>
      </motion.div>
    </section>
  );
}