import {
  MapPin,
  ExternalLink,
  Clock,
} from "lucide-react";

type Activity = {
  title: string;
  time?: string;
  description?: string;
};

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
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-sm font-bold text-indigo-700">
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
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            activity.title
          )}`;

          return (
            <div
              key={`${activity.title}-${index}`}
              className="relative rounded-2xl border border-gray-100 bg-slate-50 p-4 transition hover:border-indigo-100 hover:bg-indigo-50/40"
            >
              <div className="flex items-start gap-4">
                {/* Timeline Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                </div>

                {/* Activity Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="font-semibold text-gray-900">
                      {activity.title}
                    </h4>

                    {activity.time && (
                      <span className="flex items-center gap-1 text-sm font-medium text-gray-500">
                        <Clock className="h-4 w-4" />
                        {activity.time}
                      </span>
                    )}
                  </div>

                  {activity.description && (
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {activity.description}
                    </p>
                  )}

                  {/* Map */}
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
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