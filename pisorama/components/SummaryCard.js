import { getTotal, getTopCategory } from '../utils/calculation.js';

export function SummaryCard({ expenses = [] }) {
  const topCategory = getTopCategory(expenses);
  const formattedTopCategory =
    topCategory === "No expenses"
      ? "No expenses"
      : topCategory.charAt(0).toUpperCase() + topCategory.slice(1);

  return (
    <div className="flex gap-5 w-full px-3 pt-6">
      <div className="flex-1 bg-raised rounded-xl p-4">
        <p>Total Spent</p>
        <span>₱{getTotal(expenses)}</span>
      </div>

      <div className="flex-1 bg-raised rounded-xl p-4">
        <p>Top Category</p>
        <span>{formattedTopCategory}</span>
      </div>

      <div className="flex-1 bg-raised rounded-xl p-4">
        <p>Entries</p>
        <span>{expenses.length}</span>
      </div>
    </div>
  );
}