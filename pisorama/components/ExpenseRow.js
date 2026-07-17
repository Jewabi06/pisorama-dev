"use client";
import { MdDelete, MdEdit, MdSave, MdCancel } from "react-icons/md";
import { useState } from 'react';
import { categories } from '../utils/expenseShape.js'

export function ExpenseRow({ expense, updateExpense, handleDeleteRequest }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedExpense, setEditedExpense] = useState(expense);
  
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const amountNum = Number(editedExpense.amount);

    if (isNaN(amountNum) || amountNum <= 0) {
      return;
    }

    updateExpense({ ...editedExpense, amount: amountNum });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedExpense(expense);
    setIsEditing(false);
  };

  return (
    <tr>
      <td className="p-2 align-top">
        {isEditing ? (
          <input
            type="date"
            className="w-full min-w-[110px] rounded-md border border-line bg-surface px-2 py-1.5 text-sm"
            value={editedExpense.date}
            onChange={(e) => setEditedExpense({ ...editedExpense, date: e.target.value })}
          />
        ) : (
          expense.date
        )} 
      </td>

      <td className="p-2 align-top">
        {isEditing ? (
          <select
            className="w-full min-w-[110px] rounded-md border border-line bg-surface px-2 py-1.5 text-sm"
            value={editedExpense.category}
            onChange={(e) => setEditedExpense({ ...editedExpense, category: e.target.value })}
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        ) : (
          (expense.category)[0].toUpperCase() + expense.category.slice(1)
        )} 
      </td>

      <td className="p-2 align-top">
        {isEditing ? (
          <input
            type="number"
            min={1}
            className="w-full min-w-[90px] rounded-md border border-line bg-surface px-2 py-1.5 text-sm"
            value={editedExpense.amount}
            onChange={(e) => setEditedExpense({ ...editedExpense, amount: e.target.valueAsNumber || 0})}
          />
        ) : (
          expense.amount
        )} 
      </td>

      <td className="p-2 align-top">
        {isEditing ? (
          <input 
            type="text"
            className="w-full min-w-[140px] rounded-md border border-line bg-surface px-2 py-1.5 text-sm"
            value={editedExpense.note}
            onChange={(e) => setEditedExpense({ ...editedExpense, note: e.target.value })}
          />
        ) : (
          expense.note
        )} 
      </td>

      <td className="p-2 align-top">
        <div className="flex justify-center gap-3 sm:gap-4">
          <button className="rounded-full p-2 transition-colors hover:bg-raised" onClick={isEditing ? handleSave : handleEdit}>
            {isEditing ? <MdSave size={20} /> : <MdEdit size={20} />}
          </button>
          <button className="rounded-full p-2 transition-colors hover:bg-raised" onClick={isEditing ? handleCancel : () => handleDeleteRequest(expense)}>
            {isEditing ? <MdCancel size={20} /> : <MdDelete size={20} />}
          </button>
        </div>
      </td>
    </tr>
  );
}