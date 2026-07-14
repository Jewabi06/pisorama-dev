export const categories = [
  "Food",
  "Transportation",
  "Load",
  "School",
  "Personal",
  "Others"
];

export function createExpense({amount, category, date, note=""}) {
  const parsedAmount = parseFloat(amount);
  return {
    id: crypto.randomUUID(),
    amount: isNaN(parsedAmount) ? 0 : parsedAmount,
    category,
    date,
    note
  };
}

export function isValidExpense(expense) {
  return (
    typeof expense.amount === "number" &&
    expense.amount > 0 &&
    categories.includes(expense.category) &&
    !!expense.date
  );
}