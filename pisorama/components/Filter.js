"use client";
import {categoryOptions, amountOptions, dateOptions} from "../utils/filterOptions.js";

const filterConfig = [
  {
    key: "dateRange",
    name: "Date Range",
    options: dateOptions,
  },
  {
    key: "category",
    name: "Category",
    options: categoryOptions,
  },
  {
    key: "amountRange",
    name: "Amount Range",
    options: amountOptions,
  },
];

export function Filter({ filters, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-3 pt-6 pl-3">
      {filterConfig.map((filter) => (
        <select
          key={filter.key}
          className="w-50 rounded-xl bg-raised px-4 py-2 focus:outline-none"
          value={filters?.[filter.key] ?? "all"}
          onChange={(event) => onFilterChange(filter.key, event.target.value)}
        >
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