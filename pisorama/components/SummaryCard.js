"use client";
import { getTotal, getTopCategory } from '../utils/calculation.js';
import '../app/globals.css'

export function SummaryCard({ expenses = [] }) {
  const topCategory = getTopCategory(expenses);
  const formattedTopCategory =
    topCategory === "No expenses"
      ? "No expenses"
      : topCategory.charAt(0).toUpperCase() + topCategory.slice(1);

  return (
    <div className="flex w-full flex-col gap-3 pt-6 sm:flex-row sm:flex-wrap">
      <div className="card-style">
        <p className="text-sm uppercase tracking-[0.2em] text-dim">Total Spent</p>
        <span className="mt-2 block text-2xl font-semibold text-gold">₱{getTotal(expenses)}</span>
      </div>

      <div className="card-style">
        <p className="text-sm uppercase tracking-[0.2em] text-dim">Top Category</p>
        <span className="mt-2 block text-2xl font-semibold text-gold">{formattedTopCategory}</span>
      </div>

      <div className="card-style">
        <p className="text-sm uppercase tracking-[0.2em] text-dim">Entries</p>
        <span className="mt-2 block text-2xl font-semibold text-gold">{expenses.length}</span>
      </div>
    </div>
  );
}