import { ExpenseRow } from './ExpenseRow.js';

export function ExpenseLedger({ expenses }) {
  return (
    <>
      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Note</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <ExpenseRow key={expense.id} expense={expense} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}