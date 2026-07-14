export function EditableChip({ data }) {
  if (!data) return null;

  const chips = [
    { key: "amount", value: data.amount && `₱${data.amount}` },
    { key: "category", value: data.category },
    { key: "date", value: data.date },
    { key: "note", value: data.note },
  ].filter((chip) => chip.value);

  return (
    <div className="flex gap-2">
      {chips.map(({ key, value }) => (
        <span
          key={key}
          className="px-4 py-1 rounded-full bg-canvas"
        >
          {value}
        </span>
      ))}
    </div>
  );
}