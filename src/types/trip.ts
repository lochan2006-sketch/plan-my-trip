export interface TripFormData {
  startingCity: string;
  destination: string;
  budget: string;
  travelers: string;
  days: string;
  interests: string;
}

export interface TripPlan {
  destination: string;
  budget: string;
  transport: string;
  hotel: string;
  itinerary: string[];
}