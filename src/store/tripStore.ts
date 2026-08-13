import { create } from "zustand";
import { TripResponse } from "@/types/ai";

type TripStore = {
  trip: TripResponse | null;
  savedTrips: TripResponse[];

  setTrip: (trip: TripResponse) => void;
  clearTrip: () => void;

  loadTrip: () => void;
  loadSavedTrips: () => void;

  saveCurrentTrip: () => void;
  removeSavedTrip: (destination: string) => void;
};

export const useTripStore = create<TripStore>((set, get) => ({
  trip: null,
  savedTrips: [],

  setTrip: (trip) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "atlas-current-trip",
        JSON.stringify(trip)
      );
    }

    set({ trip });
  },

  clearTrip: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("atlas-current-trip");
    }

    set({ trip: null });
  },

  loadTrip: () => {
    if (typeof window === "undefined") return;

    const storedTrip =
      localStorage.getItem("atlas-current-trip");

    if (!storedTrip) return;

    try {
      const trip = JSON.parse(storedTrip) as TripResponse;

      set({ trip });
    } catch {
      localStorage.removeItem("atlas-current-trip");
    }
  },

  loadSavedTrips: () => {
    if (typeof window === "undefined") return;

    const storedTrips =
      localStorage.getItem("atlas-saved-trips");

    if (!storedTrips) return;

    try {
      const trips = JSON.parse(
        storedTrips
      ) as TripResponse[];

      set({
        savedTrips: trips,
      });
    } catch {
      localStorage.removeItem("atlas-saved-trips");
    }
  },

  saveCurrentTrip: () => {
    if (typeof window === "undefined") return;

    const current = get().trip;

    if (!current) return;

    const saved = get().savedTrips;

    const exists = saved.some(
      (trip) =>
        trip.destination === current.destination &&
        trip.startingCity === current.startingCity
    );

    if (exists) return;

    const updated = [...saved, current];

    localStorage.setItem(
      "atlas-saved-trips",
      JSON.stringify(updated)
    );

    set({
      savedTrips: updated,
    });
  },

  removeSavedTrip: (destination) => {
    const updated = get().savedTrips.filter(
      (trip) => trip.destination !== destination
    );

    localStorage.setItem(
      "atlas-saved-trips",
      JSON.stringify(updated)
    );

    set({
      savedTrips: updated,
    });
  },
}));