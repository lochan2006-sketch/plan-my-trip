type TripHeroProps = {
  destination: string;
  startingCity: string;
  budget: string;
  travelers: number;
  days: number;
};

export default function TripHero({
  destination,
  startingCity,
  budget,
  travelers,
  days,
}: TripHeroProps) {
  return (
    <section className="relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 p-10 text-white shadow-2xl">

      {/* Background Decoration */}
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10">

        <p className="text-sm uppercase tracking-[0.3em] text-indigo-100">
          ✨ AI Generated Journey
        </p>

        <h1 className="mt-4 text-5xl font-extrabold md:text-6xl">
          {destination}
        </h1>

        <div className="mt-4 flex items-center gap-3 text-lg text-indigo-100">
          <span>📍 {startingCity}</span>

          <span className="text-white">→</span>

          <span>{destination}</span>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <span className="rounded-full bg-yellow-400 px-4 py-2 font-semibold text-black">
            ⭐ 4.8
          </span>

          <span className="rounded-full bg-white/20 px-4 py-2">
            🎯 Adventure Friendly
          </span>

          <span className="rounded-full bg-white/20 px-4 py-2">
            🌤 Best Season
          </span>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <p className="text-sm text-indigo-100">
              Budget / Person
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              {budget}
            </h3>
          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <p className="text-sm text-indigo-100">
              Travelers
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              {travelers}
            </h3>
          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <p className="text-sm text-indigo-100">
              Duration
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              {days} Days
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}