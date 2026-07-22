type SummaryCardProps = {
  title: string;
  value: string;
  color: string;
};

const icons: Record<string, string> = {
  "Starting City": "📍",
  Budget: "💰",
  Travelers: "👥",
  Days: "📅",
};

export default function SummaryCard({
  title,
  value,
  color,
}: SummaryCardProps) {
  const icon = icons[title] ?? "📌";

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl ${color} p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
    >
      {/* Top Gradient Line */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-indigo-500 to-cyan-500" />

      {/* Icon */}
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-3xl shadow">
        {icon}
      </div>

      {/* Title */}
      <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
        {title}
      </p>

      {/* Value */}
      <h3 className="mt-2 text-2xl font-bold text-gray-900">
        {value}
      </h3>
    </div>
  );
}