import {
  MapPin,
  ExternalLink,
  Clock,
  Timer,
  Wallet,
} from "lucide-react";

import { Activity } from "@/types/ai";

type DayCardProps = {
  day: number;
  activities: Activity[];
};

export default function DayCard({
  day,
  activities,
}: DayCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6">
      {/* Day Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-sm font-bold text-indigo-700">
          {day}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
            Journey
          </p>

          <h3 className="text-xl font-bold text-gray-900">
            Day {day}
          </h3>
        </div>
      </div>

      {/* Activities */}
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const searchQuery =
            activity.location || activity.title;

          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            searchQuery
          )}`;

          return (
            <div
              key={`${activity.title}-${index}`}
              className="rounded-2xl border border-gray-100 bg-slate-50 p-4 transition hover:border-indigo-100 hover:bg-indigo-50/40 sm:p-5"
            >
              <div className="flex items-start gap-4">
                {/* Activity Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                </div>

                {/* Activity Content */}
                <div className="min-w-0 flex-1">
                  {/* Title + Time */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h4 className="text-base font-bold text-gray-900 sm:text-lg">
                      {activity.title}
                    </h4>

                    {activity.time && (
                      <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-indigo-600">
                        <Clock className="h-4 w-4" />
                        {activity.time}
                      </span>
                    )}
                  </div>

                  {/* Location */}
                  {activity.location && (
                    <div className="mt-3 flex items-start gap-2 text-sm text-gray-600">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />

                      <span>
                        {activity.location}
                      </span>
                    </div>
                  )}

                  {/* Activity Details */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activity.duration && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm">
                        <Timer className="h-3.5 w-3.5" />
                        {activity.duration}
                      </span>
                    )}

                    {activity.cost && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm">
                        <Wallet className="h-3.5 w-3.5" />
                        {activity.cost}
                      </span>
                    )}
                  </div>

                  {/* Map Button */}
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                  >
                    Open in Maps
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}