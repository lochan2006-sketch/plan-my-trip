type PackingCardProps = {
  items: string[];
};

export default function PackingCard({
  items,
}: PackingCardProps) {
  return (
    <section className="mt-8 rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-3xl font-bold">
        🎒 Packing Checklist
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-lg bg-gray-50 p-4"
          >
            <span className="text-green-600 text-xl">✅</span>

            <span className="text-gray-700 font-medium">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}