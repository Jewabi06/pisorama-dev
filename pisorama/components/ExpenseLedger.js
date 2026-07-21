"use client";
import { useState } from 'react';
import { ExpenseRow } from './ExpenseRow.js';
import { DeleteConfirmDialog } from './DeleteConfirmDialog.js';

export function ExpenseLedger({ expenses, updateExpense, deleteExpense }) {
  const [pendingDeleteExpense, setPendingDeleteExpense] = useState(null);

  const handleDeleteRequest = (expense) => {
    setPendingDeleteExpense(expense);
  };

  const handleConfirmDelete = () => {
    if (pendingDeleteExpense) {
      deleteExpense(pendingDeleteExpense.id);
    }
    setPendingDeleteExpense(null);
  };

  const handleCancelDelete = () => {
    setPendingDeleteExpense(null);
  };

  return (
    <>
      <div className="w-full overflow-x-auto h-[275px] card-style">
        {expenses.length === 0 ? (
          <p className="px-2 py-4 text-sm text-dim">No expenses yet.</p>
        ) : (
          <table className="min-w-[560px] w-full table-auto text-sm sm:text-base">
            <thead>
              <tr className="border-b border-white/10 text-dim">
                <th className="p-2 text-left font-medium">Date</th>
                <th className="p-2 text-left font-medium">Category</th>
                <th className="p-2 text-left font-medium">Amount</th>
                <th className="p-2 text-left font-medium">Note</th>
                <th className="p-2 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <ExpenseRow 
                  key={expense.id} 
                  expense={expense} 
                  updateExpense={updateExpense} 
                  handleDeleteRequest={handleDeleteRequest}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>

      <DeleteConfirmDialog
        isOpen={Boolean(pendingDeleteExpense)}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        expense={pendingDeleteExpense}
      />
    </>
  );
}