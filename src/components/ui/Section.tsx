type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        {(eyebrow || title || description) && (
          <div className="mb-14 text-center">
            {eyebrow && (
              <p className="font-semibold uppercase tracking-[0.25em] text-indigo-600">
                {eyebrow}
              </p>
            )}

            <h2 className="mt-4 text-5xl font-extrabold text-gray-900">
              {title}
            </h2>

            {description && (
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}