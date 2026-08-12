"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Wallet,
  CalendarDays,
  Compass,
  ArrowRight,
} from "lucide-react";

type DestinationCardProps = {
  name: string;
  image: string;
  description: string;
  rating: number;
  budgetRange: string;
  bestFor: string;
  bestSeason: string;
  onSelect: () => void;
};

export default function DestinationCard({
  name,
  image,
  description,
  rating,
  budgetRange,
  bestFor,
  bestSeason,
  onSelect,
}: DestinationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-5 left-5 text-white">
          <h3 className="text-3xl font-bold">
            {name}
          </h3>

          <div className="mt-2 flex items-center gap-2">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-medium">
              {rating}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <p className="text-gray-600">
          {description}
        </p>

        <div className="space-y-3 text-sm text-gray-700">

          <div className="flex items-center gap-3">
            <Wallet
              size={18}
              className="text-indigo-600"
            />
            <span>{budgetRange}</span>
          </div>

          <div className="flex items-center gap-3">
            <Compass
              size={18}
              className="text-indigo-600"
            />
            <span>{bestFor}</span>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays
              size={18}
              className="text-indigo-600"
            />
            <span>{bestSeason}</span>
          </div>

        </div>

        <button
          onClick={onSelect}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Explore Destination

          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}