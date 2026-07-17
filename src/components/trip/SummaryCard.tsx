type SummaryCardProps = {
  title: string;
  value: string;
  color: string;
};

export default function SummaryCard({
  title,
  value,
  color,
}: SummaryCardProps) {
  return (
    <div className={`rounded-xl p-5 ${color}`}>
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="mt-2 text-xl font-bold">
        {value}
      </p>
    </div>
  );
}