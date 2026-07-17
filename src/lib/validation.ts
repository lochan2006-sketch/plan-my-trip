import { TripFormData } from "@/types/trip";

export function validateTripForm(
  formData: TripFormData,
  tripMode: "known" | "suggest"
): string | null {
  if (!formData.startingCity.trim()) {
    return "Please enter your starting city.";
  }

  if (tripMode === "known" && !formData.destination.trim()) {
    return "Please enter your destination.";
  }

  if (!formData.budget || Number(formData.budget) <= 0) {
    return "Please enter a valid budget.";
  }

  if (!formData.travelers || Number(formData.travelers) < 1) {
    return "There must be at least one traveler.";
  }

  if (!formData.days || Number(formData.days) < 1) {
    return "Trip must be at least one day.";
  }

  return null;
}