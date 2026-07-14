"use client";
import Select from "react-select";
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
  return (
    <div className="flex gap-3 m-7">
      <Select
        options={dateOptions}
        placeholder="Date Range"
        className="w-48"
      />
      <Select
        options={categories}
        placeholder="Category"
        className="w-48"
      />
      <Select
        options={amountOptions}
        placeholder="Amount Range"
        className="w-48"
      />
    </div>
  );
}