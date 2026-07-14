"use client"
import { useState } from "react";
import { EditableChip } from "./EditableChip.js";
import { parseExpenseInput } from "../utils/parseExpenseInput.js";

export function SmartAddBar() {
  const [text, setText] = useState("");
  const [parsed, setParsed] = useState(null);
  
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    if (value.trim()) {
      setParsed(parseExpenseInput(value));
    } else {
      setParsed(null);
    }
  };

  return (
    <div className="bg-raised rounded-xl">
      <input type="text" value={text} placeholder="e.g. bought a coffee for $5" className="rounded-lg p-2 m-2 w-100 bg-surface" onChange={handleChange} />
      
      {parsed && <EditableChip data={parsed} />}
    </div>
  );
}