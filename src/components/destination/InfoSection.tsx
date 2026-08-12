"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  MapPin,
  Utensils,
  Backpack,
  Mountain,
} from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
  emoji: string;
  items: string[];
};

function getIcon(title: string) {
  const normalized = title.toLowerCase();

  if (normalized.includes("attraction")) {
    return MapPin;
  }

  if (normalized.includes("adventure")) {
    return Mountain;
  }

  if (normalized.includes("food")) {
    return Utensils;
  }

  if (normalized.includes("packing")) {
    return Backpack;
  }

  return Check;
}

export default function InfoSection({
  title,
  subtitle,
  items,
}: Props) {
  const Icon = getIcon(title);

  return (
    <section className="mx-auto mt-20 max-w-7xl px-6 md:mt-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-indigo-600">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
            <Icon className="h-5 w-5" />
          </span>

          {title}
        </div>

        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          {title}
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          {subtitle}
        </p>
      </motion.div>

      {/* Items */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-50px",
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.07,
            }}
            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-xl"
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-indigo-50 blur-2xl transition group-hover:bg-indigo-100" />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <ArrowUpRight className="h-4 w-4 text-gray-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-500" />
              </div>

              <p className="font-semibold leading-6 text-gray-800">
                {item}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}