"use client";

import { categories } from "../utils/expenseShape.js";

const dateOptions = [
  { value: "all", label: "All Time" },
  { value: "today", label: "Today" },
  { value: "last_24_hours", label: "Last 24 Hours" },
  { value: "last_7_days", label: "Last 7 Days" },
  { value: "last_30_days", label: "Last 30 Days" },
  { value: "this_month", label: "This Month" },
  { value: "custom", label: "Custom Date Range" },
];

const amountOptions = [
  { value: "all", label: "Any Amount" },
  { value: "under_500", label: "Under ₱500" },
  { value: "500_1000", label: "₱500 - ₱1,000" },
  { value: "1000_5000", label: "₱1,000 - ₱5,000" },
  { value: "above_5000", label: "Above ₱5,000" },
  { value: "custom", label: "Custom Range" },
];

export function Filter() {
  const filters = [
    {
      name: "Date Range",
      options: dateOptions,
    },
    {
      name: "Category",
      options: categories,
    },
    {
      name: "Amount Range",
      options: amountOptions,
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 pt-6 pl-3">
      {filters.map((filter) => (
        <select
          key={filter.name}
          className="w-50 rounded-xl bg-raised px-4 py-2 focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>{filter.name}</option>

          {filter.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}