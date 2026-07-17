"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TripMode from "./TripMode";
import TripDetails from "./TripDetails";
import TripPreferences from "./TripPreferences";
import SubmitButton from "./SubmitButton";
import Card from "../ui/Card";
import Alert from "../ui/Alert";

export default function TripPlannerForm() {
  const router = useRouter();

  const [tripMode, setTripMode] = useState<"known" | "suggest">("known");

  const [formData, setFormData] = useState({
    startingCity: "",
    destination: "",
    budget: "",
    travelers: "",
    days: "",
    interests: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!formData.startingCity.trim()) {
      setError("Please enter your starting city.");
      return;
    }

    if (tripMode === "known" && !formData.destination.trim()) {
      setError("Please enter your destination.");
      return;
    }

    if (!formData.budget || Number(formData.budget) <= 0) {
      setError("Please enter a valid budget.");
      return;
    }

    if (!formData.travelers || Number(formData.travelers) < 1) {
      setError("There must be at least one traveler.");
      return;
    }

    if (!formData.days || Number(formData.days) < 1) {
      setError("Trip must be at least one day.");
      return;
    }

    const params = new URLSearchParams({
      destination:
        tripMode === "known"
          ? formData.destination
          : "AI Suggested Destination",
      budget: formData.budget,
      travelers: formData.travelers,
      days: formData.days,
      startingCity: formData.startingCity,
    });

    router.push(`/trip?${params.toString()}`);
  };

  return (
    <section className="mx-auto max-w-4xl">
      <Card>
      <h2 className="mb-2 text-3xl font-bold text-gray-900">
        Plan Your Trip
      </h2>

      <p className="mb-8 text-gray-600">
        Fill in a few details and let AI create your perfect trip.
      </p>
      {error && <Alert>{error}</Alert>}

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 md:grid-cols-2"
      >
        <TripMode
          tripMode={tripMode}
          setTripMode={setTripMode}
        />
        <TripDetails
          tripMode={tripMode}
          formData={formData}
          handleChange={handleChange}
        />
        <TripPreferences
          formData={formData}
          handleChange={handleChange}
        />

        {/* Submit Button */}

        <SubmitButton />
      </form>
      </Card>
    </section>
  );
}