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
      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Note</th>
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

      <DeleteConfirmDialog
        isOpen={Boolean(pendingDeleteExpense)}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        expense={pendingDeleteExpense}
      />
    </>
  );
}