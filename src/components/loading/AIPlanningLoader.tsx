"use client";

import { useEffect, useState } from "react";
import {
  Brain,
  Map,
  Wallet,
  Route,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: Brain,
    text: "Understanding your travel preferences",
  },
  {
    icon: Map,
    text: "Finding the best attractions",
  },
  {
    icon: Wallet,
    text: "Optimizing your budget",
  },
  {
    icon: Route,
    text: "Building your itinerary",
  },
];

export default function AIPlanningLoader() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCompleted((prev) => {
        if (prev >= steps.length) {
          clearInterval(timer);
          return prev;
        }

        return prev + 1;
      });
    }, 700);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md">
      <div className="w-full max-w-xl rounded-3xl bg-slate-900 p-10 shadow-2xl">

        <div className="mb-10 text-center">

          <div className="mx-auto mb-6 flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-indigo-600">
            <Brain className="h-8 w-8 text-white" />
          </div>

          <h2 className="text-3xl font-bold text-white">
            ATLAS
          </h2>

          <p className="mt-3 text-slate-300">
            Creating a personalized itinerary...
          </p>

        </div>

        <div className="space-y-5">

          {steps.map((step, index) => {
            const Icon = step.icon;

            const done = completed > index;

            return (
              <div
                key={step.text}
                className="flex items-center gap-4 rounded-xl bg-slate-800 p-4"
              >
                {done ? (
                  <CheckCircle2 className="h-6 w-6 text-green-400" />
                ) : (
                  <Icon className="h-6 w-6 text-indigo-400" />
                )}

                <span
                  className={`font-medium ${done
                      ? "text-white"
                      : "text-slate-400"
                    }`}
                >
                  {step.text}
                </span>
              </div>
            );
          })}

        </div>

        <div className="mt-8 h-2 overflow-hidden rounded-full bg-slate-700">

          <div
            className="h-full rounded-full bg-indigo-500 transition-all duration-700"
            style={{
              width: `${(completed / steps.length) * 100}%`,
            }}
          />

        </div>

      </div>
    </div>
  );
}