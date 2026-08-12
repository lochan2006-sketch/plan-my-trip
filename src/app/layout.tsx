import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ATLAS — Travel Smarter with AI",
    template: "%s | ATLAS",
  },

  description:
    "ATLAS is an AI-powered travel planner that helps you create personalized itineraries, manage your budget, discover destinations, find stays, and plan better trips.",

  applicationName: "ATLAS",

  keywords: [
    "AI travel planner",
    "trip planner",
    "travel itinerary",
    "India travel",
    "budget travel",
    "student travel",
    "travel planning",
    "ATLAS travel",
  ],

  authors: [
    {
      name: "ATLAS",
    },
  ],

  creator: "ATLAS",

  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000"
  ),

  openGraph: {
    title: "ATLAS — Travel Smarter with AI",
    description:
      "Plan smarter trips with AI-powered itineraries, budgets, destinations, stays, and travel tips.",
    siteName: "ATLAS",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ATLAS — Travel Smarter with AI",
    description:
      "Your AI-powered travel companion for smarter and more affordable trips.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <Toaster
          position="top-right"
          richColors
          expand
          closeButton
        />
      </body>
    </html>
  );
}
