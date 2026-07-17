export default function Footer() {
  return (
    <footer className="border-t bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 text-center text-gray-600">
        <p className="font-semibold">PlanMyTrip</p>

        <p className="mt-2 text-sm">
          AI-powered trip planning for students and friend groups.
        </p>

        <p className="mt-6 text-sm">
          © {new Date().getFullYear()} PlanMyTrip. All rights reserved.
        </p>
      </div>
    </footer>
  );
}