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
    <div className={`w-full ${barWidth} flex flex-col gap-3 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,_rgba(35,38,41,0.96),_rgba(27,29,32,0.96))] p-3 shadow-[0_16px_45px_rgba(0,0,0,0.25)] ring-1 ring-black/20 transition-all duration-200 hover:border-gold/30 hover:shadow-[0_18px_50px_rgba(0,0,0,0.3)] sm:p-4 sm:mx-4 lg:mx-0`}>
      <input
        type="text"
        value={text}
        placeholder="e.g. bought an iced coffee for ₱50.00"
        className="w-full rounded-lg border border-white/10 bg-surface/70 p-2.5 text-sm text-ink placeholder:text-muted shadow-inner focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20 sm:text-base"
        onChange={handleChange}
        maxLength={50}
      />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {parsed && <EditableChip data={parsed} />}
        </div>
        <button
          className={`
            flex h-11 w-11 items-center justify-center self-end rounded-full transition-all duration-200 sm:h-10 sm:w-10 sm:self-auto
            ${hasAmount 
              ? "cursor-pointer bg-gold text-ctaink shadow-[0_8px_24px_rgba(212,175,55,0.25)] hover:scale-[1.03] hover:bg-gold/90 active:scale-[0.97]" 
              : "cursor-not-allowed bg-muted/70 text-ink/70 opacity-70"
            }
          `}
          disabled={!hasAmount}
          title={!hasAmount ? "Add an amount to enable" : "Add expense"}
          onClick={addExpense}
        >
          <span className="text-2xl leading-none">+</span>
        </button>
      </div>
    </div>
  );
}