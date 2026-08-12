"use client";

import { Menu, X, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToPlanner = () => {
    setMenuOpen(false);

    setTimeout(() => {
      document.getElementById("planner")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-indigo-600">
            <Image
              src="/images/logo/atlas-logo.png"
              alt="ATLAS"
              fill
              sizes="44px"
              className="object-contain p-1"
            />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
              ATLAS
            </h1>

            <p className="hidden text-xs font-medium text-gray-500 sm:block">
              Travel Smarter with AI
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          <a
            href="#destinations"
            className="font-medium text-gray-600 transition hover:text-indigo-600"
          >
            Destinations
          </a>

          <a
            href="#planner"
            className="font-medium text-gray-600 transition hover:text-indigo-600"
          >
            Planner
          </a>

          <a
            href="#features"
            className="font-medium text-gray-600 transition hover:text-indigo-600"
          >
            Features
          </a>

          <a
            href="#testimonials"
            className="font-medium text-gray-600 transition hover:text-indigo-600"
          >
            Reviews
          </a>

          <Link
            href="/saved-trips"
            className="font-medium text-gray-600 transition hover:text-indigo-600"
          >
            Saved Trips
          </Link>
        </nav>

        {/* Desktop CTA */}
        <button
          type="button"
          onClick={scrollToPlanner}
          className="hidden rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700 md:block"
        >
          Start Planning
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative z-[60] rounded-xl p-3 text-gray-800 transition hover:bg-gray-100 md:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white shadow-xl md:hidden">
          <nav className="mx-auto max-w-7xl px-6 py-5">
            <div className="flex flex-col gap-1">

              <a
                href="#destinations"
                onClick={closeMenu}
                className="rounded-xl px-4 py-4 font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              >
                Destinations
              </a>

              <a
                href="#planner"
                onClick={closeMenu}
                className="rounded-xl px-4 py-4 font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              >
                Planner
              </a>

              <a
                href="#features"
                onClick={closeMenu}
                className="rounded-xl px-4 py-4 font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              >
                Features
              </a>

              <a
                href="#testimonials"
                onClick={closeMenu}
                className="rounded-xl px-4 py-4 font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              >
                Reviews
              </a>

              <Link
                href="/saved-trips"
                onClick={closeMenu}
                className="rounded-xl px-4 py-4 font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              >
                Saved Trips
              </Link>

              <button
                type="button"
                onClick={scrollToPlanner}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-4 font-semibold text-white shadow-lg hover:bg-indigo-700"
              >
                <Sparkles className="h-4 w-4" />
                Start Planning
              </button>

            </div>
          </nav>
        </div>
      )}
    </motion.header>
  );
}