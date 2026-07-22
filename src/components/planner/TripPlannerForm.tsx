"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import TripMode from "./TripMode";
import TripDetails from "./TripDetails";
import TripPreferences from "./TripPreferences";
import SubmitButton from "./SubmitButton";
import { useTripStore } from "@/store/tripStore";

import Card from "../ui/Card";
import Alert from "../ui/Alert";

import { validateTripForm } from "@/lib/validation";
import DestinationSuggestions from "./DestinationSuggestions";
import { suggestDestinations } from "@/lib/ai/suggestDestinations";

export default function TripPlannerForm() {
  const router = useRouter();
  const { setTrip } = useTripStore();

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [suggestions, setSuggestions] = useState<
    { name: string }[]
  >([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDestinationSelect = async (
  destination: string
) => {
  setSuggestions([]);

  const updatedForm = {
    ...formData,
    destination,
  };

  setFormData(updatedForm);
  setTripMode("known");

  setIsSubmitting(true);

  try {
    const response = await fetch("/api/generate-trip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formData: updatedForm,
        tripMode: "known",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
      return;
    }

    setTrip(data.result);

    router.push("/trip");
  } catch {
    setError("Something went wrong.");
  } finally {
    setIsSubmitting(false);
  }
};

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");

    const validationError = validateTripForm(formData, tripMode);

    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    if (tripMode === "suggest") {
      const result = suggestDestinations({
        budget: Number(formData.budget),
        days: Number(formData.days),
        interests: formData.interests,
      });

      setSuggestions(result);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/generate-trip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData,
          tripMode,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (!response.ok) {
        setError(data.message || "Failed to generate trip.");
        return;
      }
     
      // Save trip in Zustand
     setTrip(data.result);

     // Navigate to results page
     router.push("/trip");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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

          <SubmitButton isSubmitting={isSubmitting} />
        </form>
        {suggestions.length > 0 && (
          <DestinationSuggestions
            destinations={suggestions}
            onSelect={handleDestinationSelect}
          />
        )}
      </Card>
    </section>
  );
}