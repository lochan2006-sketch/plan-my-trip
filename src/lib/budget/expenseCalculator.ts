export function calculateExpensePerPerson(
  totalBudget: number,
  travelers: number
) {
  if (travelers <= 0) {
    return 0;
  }

  return Math.round(totalBudget / travelers);
}