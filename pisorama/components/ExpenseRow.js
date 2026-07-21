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
    <tr className="
      border-b border-white/10 transition-colors duration-200 hover:bg-white/[0.05] 
    ">
      <td className="py-2 w-[120px]">
        {isEditing ? (
          <input
            type="date"
            className="w-[120px]"
            value={editedExpense.date}
            onChange={(e) => setEditedExpense({ ...editedExpense, date: e.target.value })}
          />
        ) : (
          expense.date
        )} 
      </td>

      <td className="w-[120px] px-2">
        {isEditing ? (
          <select
            className="w-[120px]"
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
          <span className="">
            {(expense.category)[0].toUpperCase() + expense.category.slice(1)}
          </span>
        )} 
      </td>

      <td className="w-[120px]">
        {isEditing ? (
          <input
            type="number"
            min={1}
            max={1000000}
            className=""
            value={editedExpense.amount}
            onChange={(e) => setEditedExpense({ 
              ...editedExpense, amount: e.target.valueAsNumber || 0
            })}
          />
        ) : (
          expense.amount
        )} 
      </td>

      <td className="truncate max-w-10">
        {isEditing ? (
          <input 
            type="text"
            className=""
            value={editedExpense.note}
            onChange={(e) => setEditedExpense({ ...editedExpense, note: e.target.value })}
          />
        ) : (
          expense.note
        )} 
      </td>

      <td>
        <div className="flex justify-center gap-3">
          <button 
            className="transition-all duration-200 hover:text-gold" 
            onClick={isEditing ? handleSave : handleEdit}
          >
            {isEditing ? <MdSave size={20} /> : <MdEdit size={20} />}
          </button>
          <button 
            className="transition-all duration-200 hover:text-gold" 
            onClick={isEditing ? handleCancel : () => handleDeleteRequest(expense)}
          >
            {isEditing ? <MdCancel size={20} /> : <MdDelete size={20} />}
          </button>
        </div>
      </td>
    </tr>
  );
}