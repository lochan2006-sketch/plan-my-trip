export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">🧭</span>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              PlanMyTrip
            </h1>

            <p className="text-xs text-gray-500">
              AI Travel Planner
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden gap-8 text-sm font-medium text-gray-600 md:flex">
          <a href="#" className="transition hover:text-indigo-600">
            Features
          </a>

          <a href="#" className="transition hover:text-indigo-600">
            How it Works
          </a>

          <a href="#" className="transition hover:text-indigo-600">
            About
          </a>
        </nav>

        {/* CTA */}
        <button className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700">
          Start Planning
        </button>
      </div>
    </header>
  );
}