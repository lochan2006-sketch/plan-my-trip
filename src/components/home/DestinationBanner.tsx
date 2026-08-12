"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type DestinationBannerProps = {
  title: string;
  subtitle: string;
  image: string;
  align?: "left" | "right";
  href: string;
};

export default function DestinationBanner({
  title,
  subtitle,
  image,
  align = "left",
  href,
}: DestinationBannerProps) {
  return (
    <Link
      href={href}
      className="block"
      aria-label={`Explore ${title}`}
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.35 }}
        className="group relative h-[420px] cursor-pointer overflow-hidden rounded-[32px]"
      >
        {/* Image */}
        <Image
          src={image}
          alt={`${title} destination`}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 ${
            align === "left"
              ? "bg-gradient-to-r from-black/80 via-black/45 to-transparent"
              : "bg-gradient-to-l from-black/80 via-black/45 to-transparent"
          }`}
        />

        {/* Content */}
        <div
          className={`absolute inset-0 flex items-center ${
            align === "left"
              ? "justify-start"
              : "justify-end"
          }`}
        >
          <div
            className={`max-w-lg p-8 text-white md:p-10 ${
              align === "right"
                ? "text-right"
                : "text-left"
            }`}
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300"
            >
              Explore India
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold md:text-5xl"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-4 text-lg text-white/90 md:text-xl"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white transition group-hover:bg-cyan-400 ${
                align === "right" ? "flex-row-reverse" : ""
              }`}
            >
              Explore
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}