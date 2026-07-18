export interface ItineraryDay {
  day: number;
  activities: string[];
}

export interface Hotel {
  name: string;
  price: string;
}

export interface TripResponse {
  startingCity: string;
  destination: string;
  budget: string;
  travelers: number;
  days: number;
  transport: string;
  hotel: Hotel;
  itinerary: ItineraryDay[];
  packingTips: string[];
}