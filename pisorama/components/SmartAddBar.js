"use client";
import { useState, useMemo } from "react";
import { EditableChip } from "./EditableChip.js";
import { parseExpenseInput } from "../utils/parseExpenseInput.js";
import { useDebounce } from "../hooks/useDebounce.js"

export function SmartAddBar({ onAdd, barWidth = ""}) {
  const [text, setText] = useState("");

  const debouncedText = useDebounce(text, 500);

  const parsed = useMemo(() => {
    return debouncedText.trim() ? parseExpenseInput(debouncedText) : null;
  }, [debouncedText]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const hasAmount =
    parsed &&
    parsed.amount &&
    !isNaN(parseFloat(parsed.amount)) &&
    parseFloat(parsed.amount) > 0;

  const addExpense = () => {
    if (hasAmount && onAdd) {
      onAdd(parsed);
      setText("");
    }
  };

  return (
    <div className={`w-100% ${barWidth} bg-raised rounded-xl p-3 mx-3 flex flex-col`}>
      <input
        type="text"
        value={text}
        placeholder="e.g. bought an iced coffee for ₱50.00"
        className="rounded-lg p-2 w-full focus:outline-none"
        onChange={handleChange}
        maxLength={50}
      />
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-wrap items-center">
          {parsed && <EditableChip data={parsed} />}
        </div>
        <button
          className={`
            w-10 h-10 rounded-full flex items-center justify-center transition-colors
            ${hasAmount 
              ? "bg-gold hover:bg-gold/80 active:bg-gold/60 cursor-pointer" 
              : "bg-muted opacity-50 cursor-not-allowed"
            }
          `}
          disabled={!hasAmount}
          title={!hasAmount ? "Add an amount to enable" : "Add expense"}
          onClick={addExpense}
        >
          <span className="text-2xl">+</span>
        </button>
      </div>
    </div>
  );
}