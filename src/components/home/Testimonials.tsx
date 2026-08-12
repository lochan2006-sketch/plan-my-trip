"use client";

import { motion } from "framer-motion";
import {
  Quote,
  Star,
  Sparkles,
} from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "College Student",
    review:
      "Planning our Manali trip took less than 2 minutes. The itinerary was surprisingly useful.",
  },
  {
    name: "Priya Mehta",
    role: "Solo Traveller",
    review:
      "The weather and budget suggestions helped me avoid overplanning. Very clean experience.",
  },
  {
    name: "Rohan Verma",
    role: "Backpacker",
    review:
      "Google Maps integration is my favourite feature. I could open every attraction instantly.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-6 py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-indigo-600">
            <Sparkles className="h-4 w-4" />
            Early Feedback
          </div>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Loved by Early Users
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            See what early travellers think about planning
            their journeys with ATLAS.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{
                opacity: 0,
                y: 30,
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
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Quote icon */}
              <div className="absolute right-6 top-6">
                <Quote className="h-10 w-10 text-indigo-50 transition group-hover:text-indigo-100" />
              </div>

              {/* Rating */}
              <div className="relative mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <blockquote className="relative text-lg font-medium leading-8 text-gray-700">
                “{item.review}”
              </blockquote>

              {/* User */}
              <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Small trust message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center text-sm text-gray-500"
        >
          Built with feedback from early ATLAS travellers.
        </motion.p>
      </div>
    </section>
  );
}