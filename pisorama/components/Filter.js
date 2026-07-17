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
    <div className="flex flex-col gap-3 px-3 pt-6 sm:flex-row sm:flex-wrap sm:gap-3">
      {filterConfig.map((filter) => (
        <select
          key={filter.key}
          className="w-full rounded-xl bg-raised px-4 py-2.5 text-sm focus:outline-none sm:w-48 lg:w-52"
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