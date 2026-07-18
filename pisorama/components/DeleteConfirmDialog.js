export function DeleteConfirmDialog({ isOpen, onClose, onConfirm, expense }) {
  if (!isOpen || !expense) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-[90%] max-w-sm rounded-2xl border border-white/10 bg-[linear-gradient(135deg,_rgba(35,38,41,0.97),_rgba(24,25,28,0.97))] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <h3 className="text-lg font-semibold text-ink">Delete expense?</h3>
        <p className="mt-2 text-sm text-dim">
          This will remove this row from your ledger.
        </p>

        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded-lg border border-white/10 bg-surface/70 px-3 py-2 text-sm text-ink transition-colors hover:border-gold/25 hover:bg-gold/10"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}