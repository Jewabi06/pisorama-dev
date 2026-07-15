"use client";
import { MdDelete, MdEdit, MdSave, MdCancel } from "react-icons/md";
import { useState } from 'react';

export function ExpenseRow({ expense }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedExpense, setEditedExpense] = useState(expense);
  
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedExpense(expense);
    setIsEditing(false);
  };

  const handleDelete = () => {
    console.log("Deleted ", expense.id);
  };


  return (
    <tr>
      <td className="p-2">
        {isEditing ? (
          null
        ) : (
          expense.date
        )} 
      </td>

      <td className="p-2">
        {isEditing ? (
          null
        ) : (
          expense.amount
        )} 
      </td>

      <td className="p-2">
        {isEditing ? (
          null
        ) : (
          expense.amount
        )} 
      </td>

      <td className="p-2">
        {isEditing ? (
          null
        ) : (
          expense.note
        )} 
      </td>

      <td className="p-2">
        <div className="flex justify-center gap-5">
          <button onClick={isEditing ? handleSave : handleEdit}>
            {isEditing ? <MdSave size={20} /> : <MdEdit size={20} />}
          </button>
          <button onClick={isEditing ? handleCancel : handleDelete}>
            {isEditing ? <MdCancel size={20} /> : <MdDelete size={20} />}
          </button>
        </div>
      </td>
    </tr>
  );
}