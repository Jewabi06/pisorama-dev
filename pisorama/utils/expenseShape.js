export const categories = [
  { value: "food", label: "Food" },
  { value: "transportation", label: "Transportation" },
  { value: "load", label: "Load" },
  { value: "school", label: "School" },
  { value: "utility", label: "Utility" },
  { value: "personal", label: "Personal" },
  { value: "others", label: "Others" }
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