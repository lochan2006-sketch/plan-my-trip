import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const city = request.nextUrl.searchParams.get("city");

    if (!city) {
      return NextResponse.json(
        { message: "City is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { message: "Missing OpenWeather API key" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      return NextResponse.json(
        { message: "Failed to fetch weather" },
        { status: response.status }
      );
    }

    const data = await response.json();

    let recommendation = "Enjoy your trip!";

    if (data.weather[0].main === "Rain") {
      recommendation = "Carry an umbrella ☔";
    } else if (data.main.temp > 30) {
      recommendation = "Carry sunscreen and stay hydrated 🧴";
    } else if (data.main.temp < 15) {
      recommendation = "Carry a warm jacket 🧥";
    }

    return NextResponse.json({
      temperature: `${Math.round(data.main.temp)}°C`,
      condition: data.weather[0].main,
      recommendation,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}