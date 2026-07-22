export type BudgetBreakdown = {
  hotel: number;
  transport: number;
  food: number;
  activities: number;
  emergency: number;
};

export function calculateBudget(totalBudget: number): BudgetBreakdown {
  const hotel = Math.round(totalBudget * 0.35);
  const transport = Math.round(totalBudget * 0.25);
  const food = Math.round(totalBudget * 0.20);
  const activities = Math.round(totalBudget * 0.15);

  const emergency =
    totalBudget -
    hotel -
    transport -
    food -
    activities;

  return {
    hotel,
    transport,
    food,
    activities,
    emergency,
  };
}