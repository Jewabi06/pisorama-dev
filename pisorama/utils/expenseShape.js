export const categories = [
  { value: "food", label: "Food", color: "#22C55E" },
  { value: "transportation", label: "Transportation", color: "#3B82F6" },
  { value: "load", label: "Load", color: "#F59E0B" },
  { value: "school", label: "School", color: "#A855F7" },
  { value: "utility", label: "Utility", color: "#EF4444" },
  { value: "personal", label: "Personal", color: "#EC4899" },
  { value: "others", label: "Others", color: "#6B7280" },
];

export function createExpense({amount, category, date, note=""}) {
  const parsedAmount = parseFloat(amount);
  const normalizedCategory = typeof category === "string" ? category.toLowerCase() : category;
  const normalizedDate = date || new Date().toISOString().split("T")[0];

  return {
    id: crypto.randomUUID(),
    amount: isNaN(parsedAmount) ? 0 : parsedAmount,
    category: normalizedCategory,
    date: normalizedDate,
    note
  };
}

export function isValidExpense(expense) {
  const validAmount = typeof expense.amount === "number" && expense.amount > 0;
  const validCategory = categories.some(c => String(c.value).toLowerCase() === String(expense.category).toLowerCase());
  const validDate = !!expense.date;
  return validAmount && validCategory && validDate;
}