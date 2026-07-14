export function SummaryCard({ expenses }) {
  if (expenses.length === 0) {
    return <p>No expenses yet.</p>;
  }

  const totalSpent = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const categoryTotals = expenses.reduce((totals, expense) => {
    totals[expense.category] = (totals[expense.category] || 0) + expense.amount;

    return totals;
  }, {});

  const [topCategory, topAmount] = Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1])[0];

  const formattedCategory = topCategory.charAt(0).toUpperCase() + topCategory.slice(1);

  return (
    <div className="flex gap-5 w-full px-3 pt-6">
      <div className="flex-1 bg-raised rounded-xl p-4">
        <p>Total Spent</p>
        <span>₱{totalSpent.toLocaleString()}</span>
      </div>

      <div className="flex-1 bg-raised rounded-xl p-4">
        <p>Top Category</p>
        <span>{formattedCategory}</span>
      </div>

      <div className="flex-1 bg-raised rounded-xl p-4">
        <p>Entries</p>
        <span>{expenses.length}</span>
      </div>
    </div>
  );
}