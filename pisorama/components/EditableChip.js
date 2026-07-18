export function EditableChip({ data }) {
  if (!data) return null;

  const chips = [
    { key: "amount", value: data.amount && `₱${data.amount}` },
    { key: "category", value: data.category },
    { key: "date", value: data.date }
  ].filter((chip) => chip.value);

  return (
    <div className="flex min-w-0 gap-2">
      {chips.map(({ key, value }) => (
        <span
          key={key}
          title={value}
          className="inline-block max-w-32 truncate overflow-hidden whitespace-nowrap rounded-full border border-gold/20 bg-gold/10 px-4 py-1 text-sm text-ink"
        >
          {value}
        </span>
      ))}
    </div>
  );
}