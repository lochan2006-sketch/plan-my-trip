"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

type Props = {
  images: string[];
};

export default function DestinationGallery({
  images,
}: Props) {
  if (!images.length) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-indigo-600">
          <Camera className="h-4 w-4" />
          Destination Gallery
        </div>

        <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          Discover the Destination
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          A glimpse of the experiences waiting for you.
        </p>
      </motion.div>

      {/* Gallery */}
      <div
        className={`grid gap-5 ${
          images.length > 1
            ? "md:grid-cols-2"
            : "grid-cols-1"
        }`}
      >
        {images.map((image, index) => (
          <motion.div
            key={`${image}-${index}`}
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
              duration: 0.6,
              delay: index * 0.08,
            }}
            className={`group relative overflow-hidden rounded-[2rem] bg-gray-100 ${
              index === 0 && images.length > 1
                ? "md:col-span-2 h-[500px]"
                : "h-[320px]"
            }`}
          >
            <Image
              src={image}
              alt={`View of destination ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="absolute bottom-5 left-5 rounded-full bg-black/40 px-4 py-2 text-sm font-medium text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
              {index + 1} / {images.length}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}