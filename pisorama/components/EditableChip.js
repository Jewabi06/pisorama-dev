export function EditableChip({ data }) {
  if (!data) return null;

  return (
    <div className="flex gap-2 m-2">
      {data.amount && (
        <span className="px-3 py-1 rounded-full bg-canvas">
          ₱{data.amount}
        </span>
      )}

      <span className="px-3 py-1 rounded-full bg-canvas">
        {data.category}
      </span>

      <span className="px-3 py-1 rounded-full bg-canvas">
        {data.date}
      </span>

      {data.note && (
        <span className="px-3 py-1 rounded-full bg-canvas">
          {data.note}
        </span>
      )}
    </div>
  );
}