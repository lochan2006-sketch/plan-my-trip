type InfoCardProps = {
  emoji: string;
  title: string;
  description: string;
  subtitle?: string;
  rating?: number;
  features?: string[];
  buttonText?: string;
};

export default function InfoCard({
  emoji,
  title,
  description,
  subtitle,
  rating,
  features = [],
  buttonText,
}: InfoCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-5 flex items-center gap-3">
        <span className="text-4xl">{emoji}</span>

        <h2 className="text-2xl font-bold text-gray-900">
          {title}
        </h2>
      </div>

      <h3 className="text-xl font-semibold text-indigo-600">
        {description}
      </h3>

      {subtitle && (
        <p className="mt-2 text-gray-500">
          {subtitle}
        </p>
      )}

      {rating && (
        <div className="mt-4">
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
            ⭐ {rating}/5
          </span>
        </div>
      )}

      {features.length > 0 && (
        <div className="mt-6">
          <h4 className="mb-3 font-semibold text-gray-700">
            Highlights
          </h4>

          <ul className="space-y-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-gray-600"
              >
                <span className="text-green-600">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {buttonText && (
        <button className="mt-6 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700">
          {buttonText}
        </button>
      )}
    </div>
  );
}