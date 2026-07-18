import { create } from "zustand";
import { TripResponse } from "@/types/ai";

type TripStore = {
  trip: TripResponse | null;
  setTrip: (trip: TripResponse) => void;
  clearTrip: () => void;
};

export const useTripStore = create<TripStore>((set) => ({
  trip: null,

  setTrip: (trip) =>
    set({
      trip,
    }),

  clearTrip: () =>
    set({
      trip: null,
    }),
}));