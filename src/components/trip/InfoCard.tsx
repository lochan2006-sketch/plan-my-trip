type InfoCardProps = {
  emoji: string;
  title: string;
  description: string;
};

export default function InfoCard({
  emoji,
  title,
  description,
}: InfoCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">
        {emoji} {title}
      </h2>

      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
}