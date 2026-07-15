"use client";
import { Header } from '../components/Header.js';
import { SmartAddBar } from '../components/SmartAddBar.js';
import { Filter } from '../components/Filter.js';
import { SummaryCard } from '../components/SummaryCard.js';
import { CategoryChart } from '../components/CategoryChart.js';
import { ExpenseLedger } from '../components/ExpenseLedger.js';
import { EmptyState } from '../components/EmptyState.js';
import { createExpense, isValidExpense } from '../utils/expenseShape.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

export default function Home() {
  const [expenses, setExpenses] = useLocalStorage("pisorama-expenses", []);

  const addExpense = (parsed) => {
    const newExpense = createExpense(parsed);   
    if (isValidExpense(newExpense)) {
      setExpenses(prev => [...prev, newExpense]);
    } else {
      console.warn("Invalid expense", newExpense);
    }
  };

  const updateExpense = (updatedExpense) => {
    setExpenses((prev) =>
      prev.map((exp) => (exp.id === updatedExpense.id ? updatedExpense : exp))
    );
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
          <div className="flex gap-5 mt-6 mx-3">
            <CategoryChart expenses={expenses} />
            <ExpenseLedger 
              expenses={expenses} 
              updateExpense={updateExpense}
            />
          </div>
        </div>
      )}
    </>
  );
}
