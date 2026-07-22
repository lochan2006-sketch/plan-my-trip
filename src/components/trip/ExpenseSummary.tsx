import { calculateExpensePerPerson } from "@/lib/budget/expenseCalculator";

type ExpenseSummaryProps = {
  budget: string;
  travelers: number;
};

export default function ExpenseSummary({
  budget,
  travelers,
}: ExpenseSummaryProps) {
  const totalBudget = Number(
    budget.replace(/[^\d]/g, "")
  );

  const perPerson = calculateExpensePerPerson(
    totalBudget,
    travelers
  );

  return (
    <section className="mt-8 rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-3xl font-bold">
        💸 Expense Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Total Budget</span>
          <span className="font-semibold">
            ₹{totalBudget}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Travelers</span>
          <span className="font-semibold">
            {travelers}
          </span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold text-indigo-600">
          <span>Cost Per Person</span>

          <span>
            ₹{perPerson}
          </span>
        </div>
      </div>
    </section>
  );
}