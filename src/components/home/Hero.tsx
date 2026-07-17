export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 via-white to-gray-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

        <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
          ✈️ AI-Powered Trip Planning
        </span>

        <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
          Plan Amazing Trips
          <span className="block text-indigo-600">
            Without the Stress
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
          Plan affordable trips with your friends in under
          <strong> 2 minutes.</strong>

          Get AI-generated itineraries, hotel suggestions,
          transport recommendations and budget estimates —
          all in one place.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-indigo-700">
            ✨ Start Planning
          </button>

          <button className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 transition hover:bg-gray-100">
            Learn More
          </button>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-gray-600">

          <div>
            <p className="text-2xl font-bold text-indigo-600">
              2 min
            </p>
            <p>Average Planning Time</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-indigo-600">
              AI
            </p>
            <p>Smart Recommendations</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-indigo-600">
              Budget
            </p>
            <p>Friendly Trips</p>
          </div>

        </div>

      </div>
    </section>
  );
}