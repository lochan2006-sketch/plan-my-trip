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
import AIPlanningLoader from "@/components/loading/AIPlanningLoader";
import { toast } from "sonner";

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
  const [showLoader, setShowLoader] = useState(false);
  type SuggestedDestination = {
    name: string;
    image: string;
    rating: number;
    budgetRange: string;
    bestFor: string;
    bestSeason: string;
  };

  const [suggestions, setSuggestions] = useState<
    SuggestedDestination[]
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

      setShowLoader(true);

      setTimeout(() => {
        router.push("/trip");
      }, 3200);
    } catch {
      setShowLoader(false);
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

      setShowLoader(true);

      // Navigate to results page
      setTimeout(() => {
        router.push("/trip");
      }, 3200);
    } catch {
      setShowLoader(false);
      toast.error("Trip generation failed", {
        description: "Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  if (showLoader) {
    return <AIPlanningLoader />;
  }

  return (
    <section
      id="planner"
      className="mx-auto max-w-5xl scroll-mt-24">

      <div className="mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-600">
          Plan Your Journey
        </p>

        <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          Your next adventure starts here.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          Tell ATLAS a little about your trip and we'll create a
          personalized itinerary around your budget and interests.
        </p>
      </div>
      <Card className="rounded-[2rem] border border-gray-100 shadow-xl shadow-indigo-100/40">
      
        {error && <Alert>{error}</Alert>}

        <form
          onSubmit={handleSubmit}
          className="grid gap-7 md:grid-cols-2"
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