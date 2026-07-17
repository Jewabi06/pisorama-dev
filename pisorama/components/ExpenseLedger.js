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
      <div className="w-full overflow-x-auto rounded-xl bg-raised/40 p-2 sm:p-3">
        {expenses.length === 0 ? (
          <p className="px-2 py-4 text-sm text-dim">No expenses yet.</p>
        ) : (
          <table className="min-w-[560px] w-full table-auto text-sm sm:text-base">
            <thead>
              <tr>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">Amount</th>
                <th className="p-2 text-left">Note</th>
                <th className="p-2 text-left">Actions</th>
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