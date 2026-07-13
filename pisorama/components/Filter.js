"use client"
import React from 'react';
import Select from 'react-select';
import { categories } from '../utils/expenseShape.js';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export function Filter() {
  return (
    <>
      <div className="flex">
        <Select options={categories} />
        <Select options={options} />
      </div>
    </>
  );
}