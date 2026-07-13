export const categories = [
  { label: "Food", value: "food" },
  { label: "Transportation", value: "transportation" },
  { label: "Load", value: "load" },
  { label: "School", value: "school" },
  { label: "Personal", value: "personal" },
  { label: "Others", value: "others" }
];

export function createExpense({amount, category, date, note=""}) {
  return {
    id: crypto.randomUUID(),
    amount,
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