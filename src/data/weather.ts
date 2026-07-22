export const weatherData: Record<
  string,
  {
    temperature: string;
    condition: string;
    recommendation: string;
  }
> = {
  Manali: {
    temperature: "18°C",
    condition: "Cloudy",
    recommendation: "Carry a light jacket.",
  },

  Goa: {
    temperature: "30°C",
    condition: "Sunny",
    recommendation: "Carry sunscreen and sunglasses.",
  },

  Jaipur: {
    temperature: "34°C",
    condition: "Sunny",
    recommendation: "Carry a cap and stay hydrated.",
  },

  Rishikesh: {
    temperature: "27°C",
    condition: "Pleasant",
    recommendation: "Perfect weather for outdoor activities.",
  },

  Udaipur: {
    temperature: "29°C",
    condition: "Clear",
    recommendation: "Great time for lake sightseeing.",
  },
};