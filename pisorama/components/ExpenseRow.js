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
      <td className="p-2">
        {isEditing ? (
          <input
            type="date"
            value={editedExpense.date}
            onChange={(e) => setEditedExpense({ ...editedExpense, date: e.target.value })}
          />
        ) : (
          expense.date
        )} 
      </td>

      <td className="p-2">
        {isEditing ? (
          <select
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

      <td className="p-2">
        {isEditing ? (
          <input
            type="number"
            min={1}
            value={editedExpense.amount}
            onChange={(e) => setEditedExpense({ ...editedExpense, amount: e.target.valueAsNumber || 0})}
          />
        ) : (
          expense.amount
        )} 
      </td>

      <td className="p-2">
        {isEditing ? (
          <input 
            type="text"
            value={editedExpense.note}
            onChange={(e) => setEditedExpense({ ...editedExpense, note: e.target.value })}
          />
        ) : (
          expense.note
        )} 
      </td>

      <td className="p-2">
        <div className="flex justify-center gap-5">
          <button onClick={isEditing ? handleSave : handleEdit}>
            {isEditing ? <MdSave size={20} /> : <MdEdit size={20} />}
          </button>
          <button onClick={isEditing ? handleCancel : () => handleDeleteRequest(expense)}>
            {isEditing ? <MdCancel size={20} /> : <MdDelete size={20} />}
          </button>
        </div>
      </td>
    </tr>
  );
}