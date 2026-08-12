"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type FeatureRowProps = {
  title: string;
  description: string;
  image: string;
  points: string[];
  reverse?: boolean;
};

export default function FeatureRow({
  title,
  description,
  image,
  points,
  reverse = false,
}: FeatureRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid items-center gap-16 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Illustration */}
      <div className="relative h-[380px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div>
        <p className="font-semibold uppercase tracking-[0.25em] text-indigo-600">
          Why ATLAS
        </p>

        <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
          {title}
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          {description}
        </p>

        <div className="mt-8 space-y-4">
          {points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3"
            >
              <CheckCircle2
                className="text-emerald-500"
                size={22}
              />

              <span className="text-gray-700">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}