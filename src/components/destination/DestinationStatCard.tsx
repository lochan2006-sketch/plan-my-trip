import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  value: string | number;
};

export default function DestinationStatCard({
  icon,
  title,
  value,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 text-indigo-600">
        {icon}
      </div>

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-gray-900">
        {value}
      </h3>
    </div>
  );
}