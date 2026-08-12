export type WeatherInfo = {
  temperature: string;
  condition: string;
  recommendation: string;
};

export async function getWeather(
  city: string
): Promise<WeatherInfo> {
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    throw new Error("Missing OpenWeather API Key");
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=metric`;

  const response = await fetch(url, {
    next: { revalidate: 1800 }, // Cache for 30 minutes
  });

  if (!response.ok) {
    throw new Error("Failed to fetch weather");
  }

  const data = await response.json();

  const temperature = `${Math.round(data.main.temp)}°C`;
  const condition = data.weather[0].main;

  let recommendation = "Enjoy your trip!";

  if (condition.toLowerCase().includes("rain")) {
    recommendation = "Carry an umbrella ☔";
  } else if (data.main.temp > 30) {
    recommendation = "Carry sunscreen and stay hydrated 🧴";
  } else if (data.main.temp < 15) {
    recommendation = "Carry a warm jacket 🧥";
  }

  return {
    temperature,
    condition,
    recommendation,
  };
}