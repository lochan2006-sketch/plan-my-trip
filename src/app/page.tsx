export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-6 text-5xl font-bold text-gray-900">
          PlanMyTrip
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-gray-600">
          Plan affordable trips with your friends in under 2 minutes using AI.
        </p>

        <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
          Start Planning
        </button>
      </section>
    </main>
  );
}