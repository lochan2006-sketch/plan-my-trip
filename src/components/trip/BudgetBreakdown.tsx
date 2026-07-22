import { calculateBudget } from "@/lib/budget/calculateBudget";

type BudgetBreakdownProps = {
  budget: string;
};

export default function BudgetBreakdown({
  budget,
}: BudgetBreakdownProps) {
  const totalBudget = Number(
    budget.replace(/[^\d]/g, "")
  );

  const breakdown = calculateBudget(totalBudget);

  const rows = [
    { label: "🏨 Hotel", value: breakdown.hotel },
    { label: "🚆 Transport", value: breakdown.transport },
    { label: "🍽 Food", value: breakdown.food },
    { label: "🎯 Activities", value: breakdown.activities },
    { label: "💰 Emergency", value: breakdown.emergency },
  ];

  return (
    <section className="mt-8 rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-3xl font-bold">
        💰 Budget Breakdown
      </h2>

      <div className="space-y-4">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex justify-between border-b pb-3"
          >
            <span>{row.label}</span>

            <span className="font-semibold">
              ₹{row.value}
            </span>
          </div>
        ))}

        <div className="flex justify-between pt-4 text-xl font-bold">
          <span>Total</span>

          <span>₹{totalBudget}</span>
        </div>
      </div>
    </section>
  );
}