"use client";

import { useEffect, useState } from "react";
import {
  Brain,
  Map,
  Wallet,
  Route,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    icon: Brain,
    text: "Understanding your travel preferences",
  },
  {
    icon: Map,
    text: "Exploring the best places to visit",
  },
  {
    icon: Wallet,
    text: "Optimizing your travel budget",
  },
  {
    icon: Route,
    text: "Building your personalized itinerary",
  },
];

export default function AIPlanningLoader() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length - 1) {
          return prev;
        }

        return prev + 1;
      });
    }, 1400);

    return () => clearInterval(timer);
  }, []);

  const progress =
    ((activeStep + 1) / steps.length) * 100;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 px-6 backdrop-blur-md">
      <div className="w-full max-w-xl rounded-3xl bg-slate-900 p-7 shadow-2xl sm:p-10">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 shadow-lg shadow-indigo-500/30">
            <Brain className="h-8 w-8 animate-pulse text-white" />

            <div className="absolute inset-0 rounded-full border border-indigo-400/40 animate-ping" />
          </div>

          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-cyan-400" />

            <h2 className="text-3xl font-extrabold text-white">
              ATLAS
            </h2>

            <Sparkles className="h-4 w-4 text-cyan-400" />
          </div>

          <p className="mt-3 text-slate-300">
            Creating your personalized journey...
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            const completed = index < activeStep;
            const active = index === activeStep;

            return (
              <div
                key={step.text}
                className={`flex items-center gap-4 rounded-xl p-4 transition-all duration-500 ${
                  active
                    ? "bg-indigo-500/20 ring-1 ring-indigo-400/30"
                    : completed
                    ? "bg-slate-800"
                    : "bg-slate-800/60"
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-700">
                  {completed ? (
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                  ) : (
                    <Icon
                      className={`h-5 w-5 ${
                        active
                          ? "text-indigo-400"
                          : "text-slate-500"
                      }`}
                    />
                  )}
                </div>

                <span
                  className={`font-medium transition-colors ${
                    active || completed
                      ? "text-white"
                      : "text-slate-500"
                  }`}
                >
                  {step.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Progress */}
        <div className="mt-8">
          <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
            <span>
              AI planning in progress
            </span>

            <span>
              {Math.round(progress)}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-700">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-1000"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          This may take a few seconds while ATLAS prepares your trip.
        </p>
      </div>
    </div>
  );
}