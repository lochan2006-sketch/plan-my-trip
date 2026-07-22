import { calculateTotalTripCost } from "@/lib/budget/tripCost";

type TripCostSummaryProps = {
  budget: string;
  travelers: number;
};

export default function TripCostSummary({
  budget,
  travelers,
}: TripCostSummaryProps) {
  const budgetPerPerson = Number(
    budget.replace(/[^\d]/g, "")
  );

  const totalCost = calculateTotalTripCost(
    budgetPerPerson,
    travelers
  );

  return (
    <section className="mt-8 rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-3xl font-bold">
        💸 Trip Cost Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Budget Per Person</span>
          <span className="font-semibold">
            ₹{budgetPerPerson}
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
          <span>Estimated Group Cost</span>

          <span>₹{totalCost}</span>
        </div>
      </div>
    </section>
  );
}