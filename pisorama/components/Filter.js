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
    <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:flex-wrap sm:gap-3">
      {filterConfig.map((filter) => (
        <select
          key={filter.key}
          className="w-full rounded-xl border border-white/10 bg-surface/80 px-4 py-2.5 text-sm text-ink shadow-sm transition-all duration-200 hover:border-gold/30 focus:border-gold/50 focus:outline-none sm:w-48 lg:w-52"
          value={filters?.[filter.key] ?? "all"}
          onChange={(event) => onFilterChange(filter.key, event.target.value)}
        >
          {filter.options.map((option) => (
            <option
              key={option.value} 
              value={option.value}
              className="bg-surface"
            >
              {option.label}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}