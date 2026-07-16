import { categories } from "./expenseShape.js";

export const dateOptions = [
  { value: "all", label: "All Time" },
  { value: "today", label: "Today" },
  { value: "last_24_hours", label: "Last 24 Hours" },
  { value: "last_7_days", label: "Last 7 Days" },
  { value: "last_30_days", label: "Last 30 Days" },
  { value: "this_month", label: "This Month" },
  { value: "custom", label: "Custom Date Range" },
];

export const amountOptions = [
  { value: "all", label: "Any Amount" },
  { value: "under_500", label: "Under ₱500" },
  { value: "500_1000", label: "₱500 - ₱1,000" },
  { value: "1000_5000", label: "₱1,000 - ₱5,000" },
  { value: "above_5000", label: "Above ₱5,000" },
  { value: "custom", label: "Custom Range" },
];

export const categoryOptions = [
  { value: "all", label: "All Category" },
  ...categories,
];

function parseDateInput(value) {
  if (!value) return null;

  if (typeof value === "string") {
    const trimmed = value.trim();

    if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
      const [year, month, day] = trimmed.split("-").map(Number);
      return new Date(year, month - 1, day);
    }

    const parsed = new Date(trimmed);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  return value instanceof Date ? value : null;
}

function matchesDateRange(expenseDate, range) {
  const parsedDate = parseDateInput(expenseDate);
  if (!parsedDate) return false;

  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  switch (range) {
    case "today":
      return parsedDate >= startOfToday;
    case "last_24_hours":
      return parsedDate >= new Date(now.getTime() - 24 * 60 * 60 * 1000);
    case "last_7_days":
      return parsedDate >= new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    case "last_30_days":
      return parsedDate >= new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    case "this_month":
      return (
        parsedDate.getFullYear() === now.getFullYear() &&
        parsedDate.getMonth() === now.getMonth()
      );
    case "custom":
    case "all":
    default:
      return true;
  }
}

function matchesAmountRange(amount, range) {
  const parsedAmount = Number(amount) || 0;

  switch (range) {
    case "under_500":
      return parsedAmount < 500;
    case "500_1000":
      return parsedAmount >= 500 && parsedAmount <= 1000;
    case "1000_5000":
      return parsedAmount > 1000 && parsedAmount <= 5000;
    case "above_5000":
      return parsedAmount > 5000;
    case "custom":
    case "all":
    default:
      return true;
  }
}

export function filterExpenses(expenses = [], filters = {}) {
  const { dateRange = "all", category = "all", amountRange = "all" } = filters;

  return expenses.filter((expense) => {
    const matchesDate = matchesDateRange(expense.date, dateRange);
    const matchesCategory =
      category === "all" ||
      String(expense.category).toLowerCase() === String(category).toLowerCase();
    const matchesAmount = matchesAmountRange(expense.amount, amountRange);

    return matchesDate && matchesCategory && matchesAmount;
  });
}