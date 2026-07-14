export function EditableChip({ data }) {
  if (!data) return null;

  const chips = [
    { key: "amount", value: data.amount && `₱${data.amount}` },
    { key: "category", value: data.category },
    { key: "date", value: data.date }
  ].filter((chip) => chip.value);

  return (
    <div className="flex gap-2 min-w-0">
      {chips.map(({ key, value }) => (
        <span
          key={key}
          title={value}
          className="px-4 py-1 rounded-full bg-canvas truncate max-w-32 overflow-hidden whitespace-nowrap inline-block"
        >
          {value}
        </span>
      ))}
    </div>
  );
}