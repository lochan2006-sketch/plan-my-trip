import { TripFormData } from "@/types/trip";

const MAX_BUDGET = 500000;
const MAX_TRAVELERS = 20;
const MAX_DAYS = 30;

const MAX_CITY_LENGTH = 80;
const MAX_DESTINATION_LENGTH = 80;
const MAX_INTERESTS_LENGTH = 300;

export function validateTripForm(
  formData: TripFormData,
  tripMode: "known" | "suggest"
): string | null {
  if (!formData || typeof formData !== "object") {
    return "Invalid trip details.";
  }

  if (
    typeof formData.startingCity !== "string" ||
    !formData.startingCity.trim()
  ) {
    return "Please enter your starting city.";
  }

  if (formData.startingCity.trim().length > MAX_CITY_LENGTH) {
    return "Starting city is too long.";
  }

  if (tripMode !== "known" && tripMode !== "suggest") {
    return "Invalid trip mode.";
  }

  if (tripMode === "known") {
    if (
      typeof formData.destination !== "string" ||
      !formData.destination.trim()
    ) {
      return "Please enter your destination.";
    }

    if (
      formData.destination.trim().length >
      MAX_DESTINATION_LENGTH
    ) {
      return "Destination is too long.";
    }
  }

  const budget = Number(formData.budget);

  if (
    !Number.isFinite(budget) ||
    budget <= 0 ||
    budget > MAX_BUDGET
  ) {
    return `Budget must be between ₹1 and ₹${MAX_BUDGET.toLocaleString(
      "en-IN"
    )}.`;
  }

  const travelers = Number(formData.travelers);

  if (
    !Number.isInteger(travelers) ||
    travelers < 1 ||
    travelers > MAX_TRAVELERS
  ) {
    return `Travelers must be between 1 and ${MAX_TRAVELERS}.`;
  }

  const days = Number(formData.days);

  if (
    !Number.isInteger(days) ||
    days < 1 ||
    days > MAX_DAYS
  ) {
    return `Trip duration must be between 1 and ${MAX_DAYS} days.`;
  }

  if (
    typeof formData.interests !== "string"
  ) {
    return "Invalid interests.";
  }

  if (
    formData.interests.trim().length >
    MAX_INTERESTS_LENGTH
  ) {
    return "Interests are too long.";
  }

  return null;
}