"use client";
import { useState } from "react";
import { Header } from "../components/Header.js";
import { SmartAddBar } from "../components/SmartAddBar.js";
import { Filter } from "../components/Filter.js";
import { SummaryCard } from "../components/SummaryCard.js";
import { CategoryChart } from "../components/CategoryChart.js";
import { ExpenseLedger } from "../components/ExpenseLedger.js";
import { EmptyState } from "../components/EmptyState.js";
import { createExpense, isValidExpense } from "../utils/expenseShape.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { filterExpenses } from "../utils/filterOptions.js";

export default function Home() {
  const [expenses, setExpenses] = useLocalStorage("pisorama-expenses", []);
  const [filters, setFilters] = useState({
    dateRange: "all",
    category: "all",
    amountRange: "all",
  });

  const visibleExpenses = filterExpenses(expenses, filters);

  const addExpense = (parsed) => {
    const newExpense = createExpense(parsed);
    if (isValidExpense(newExpense)) {
      setExpenses((prev) => [...prev, newExpense]);
    } else {
      console.warn("Invalid expense", newExpense);
    }
  };

  const updateExpense = (updatedExpense) => {
    setExpenses((prev) =>
      prev.map((exp) => (exp.id === updatedExpense.id ? updatedExpense : exp))
    );
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      {expenses.length === 0 ? (
        <EmptyState onAdd={addExpense} />
      ) : (
        <div className="bg-surface min-h-screen pb-8">
          <Header />
          <div className="mx-3 mt-4 sm:mx-4 lg:mx-6 lg:max-w-7xl lg:mx-auto">
            <SmartAddBar onAdd={addExpense} />
            <Filter filters={filters} onFilterChange={handleFilterChange} />
            <SummaryCard expenses={visibleExpenses} />
            <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-start">
              <div className="w-full lg:w-[45%]">
                <CategoryChart expenses={visibleExpenses} />
              </div>
              <div className="w-full lg:w-[55%]">
                <ExpenseLedger
                  expenses={visibleExpenses}
                  updateExpense={updateExpense}
                  deleteExpense={deleteExpense}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}