import Link from "next/link";
import {
  Compass,
  Heart,
  Sparkles,
} from "lucide-react";

const destinations = [
  {
    name: "Manali",
    slug: "manali",
  },
  {
    name: "Goa",
    slug: "goa",
  },
  {
    name: "Jaipur",
    slug: "jaipur",
  },
  {
    name: "Rishikesh",
    slug: "rishikesh",
  },
  {
    name: "Udaipur",
    slug: "udaipur",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600">
                <Compass className="h-6 w-6 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  ATLAS
                </h2>

                <p className="text-xs text-gray-400">
                  Travel Smarter with AI
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
              AI-powered trip planning for students, friends,
              backpackers and curious travellers. Plan smarter,
              travel better and spend less time figuring out
              the details.
            </p>

            <Link
              href="/#planner"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-500"
            >
              <Sparkles className="h-4 w-4" />
              Start Planning
            </Link>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-bold">
              Explore
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/#destinations"
                  className="transition hover:text-white"
                >
                  Destinations
                </Link>
              </li>

              <li>
                <Link
                  href="/#features"
                  className="transition hover:text-white"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  href="/#testimonials"
                  className="transition hover:text-white"
                >
                  Reviews
                </Link>
              </li>

              <li>
                <Link
                  href="/saved-trips"
                  className="transition hover:text-white"
                >
                  Saved Trips
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-bold">
              Popular Destinations
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {destinations.map((destination) => (
                <li key={destination.slug}>
                  <Link
                    href={`/destination/${destination.slug}`}
                    className="transition hover:text-white"
                  >
                    {destination.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} ATLAS. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            Built for better journeys
            <Heart className="h-4 w-4 fill-current text-rose-500" />
          </div>

        </div>

      </div>
    </footer>
  );
}