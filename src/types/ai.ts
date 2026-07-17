export interface ItineraryDay {
  day: number;
  activities: string[];
}

export interface Hotel {
  name: string;
  price: string;
}

export interface TripResponse {
  destination: string;
  budget: string;
  transport: string;
  hotel: Hotel;
  itinerary: ItineraryDay[];
  packingTips: string[];
}