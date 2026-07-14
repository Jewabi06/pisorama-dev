export function ExpenseLedger({ expenses }) {
  return (
    <>
      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <div className="flex flex-col w-1/2 bg-raised">
          {expenses.map((expense) => (
            <div key={expense.id} >
              <div>
                <p>{expense.category}</p>
                <p>{expense.note}</p>
              </div>

              <div>
                <p>₱{expense.amount}</p>
                <p>{expense.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}