import { getTotal, getTopCategory } from '../utils/calculation.js';

export function SummaryCard({ expenses }) {
  return (
    <div className="flex gap-5 w-full px-3 pt-6">
      <div className="flex-1 bg-raised rounded-xl p-4">
        <p>Total Spent</p>
        <span>₱{getTotal(expenses)}</span>
      </div>

      <div className="flex-1 bg-raised rounded-xl p-4">
        <p>Top Category</p> 
        <span>{getTopCategory(expenses).toUpperCase()[0] + getTopCategory(expenses).slice(1)}</span>
      </div>

      <div className="flex-1 bg-raised rounded-xl p-4">
        <p>Entries</p>
        <span>{expenses.length}</span>
      </div>
    </div>
  );
}