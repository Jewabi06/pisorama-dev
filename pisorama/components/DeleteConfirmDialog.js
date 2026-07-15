export function DeleteConfirmDialog({ isOpen, onClose, onConfirm, expense }) {
  if (!isOpen || !expense) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[90%] max-w-sm rounded-lg bg-white p-4 shadow-lg">
        <h3 className="text-lg font-semibold">Delete expense?</h3>
        <p className="mt-2 text-sm text-gray-600">
          This will remove this row from your ledger.
        </p>

        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded border border-gray-300 px-3 py-2 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="rounded bg-red-600 px-3 py-2 text-sm text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}