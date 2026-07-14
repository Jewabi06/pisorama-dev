"use client";
import Image from "next/image";
import { useState } from "react";
import { Header } from '../components/Header.js';
import { SmartAddBar } from '../components/SmartAddBar.js';
import { Filter } from '../components/Filter.js';
import { SummaryCard } from '../components/SummaryCard.js';
import { CategoryChart } from '../components/CategoryChart.js';
import { ExpenseLedger } from '../components/ExpenseLedger.js';
import { EmptyState } from '../components/EmptyState.js';
import { createExpense, isValidExpense } from '../utils/expenseShape.js';

export default function Home() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (parsed) => {
    const newExpense = createExpense(parsed);   
    if (isValidExpense(newExpense)) {
      setExpenses(prev => [...prev, newExpense]);
    } else {
      console.warn("Invalid expense", newExpense);
    }
  };

  return (
    <>
      {expenses.length === 0 ? (
        <EmptyState onAdd={addExpense} />
      ) : (
        <div className="bg-surface min-h-screen">
          <Header />
          <SmartAddBar onAdd={addExpense} />
          <Filter />
          <SummaryCard expenses={expenses} />
          <CategoryChart expenses={expenses} />
          <ExpenseLedger expenses={expenses} />
        </div>
      )}
    </>
  );
}
