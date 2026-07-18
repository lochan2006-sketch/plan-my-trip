type DayCardProps = {
  day: number;
  activities: string[];
};

export default function DayCard({
  day,
  activities,
}: DayCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-indigo-600">
        📅 Day {day}
      </h3>

      <ul className="space-y-3">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="flex items-start gap-3"
          >
            <span className="text-green-600">✅</span>

            <span className="text-gray-700">
              {activity}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}