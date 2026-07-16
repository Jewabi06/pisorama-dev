export function getTotal(expenses) {
  return expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);
}

export function groupByCategory(expenses) {
  return expenses.reduce((total, expense) => {
    const key = expense.category;

    if(!total[key]) {
      total[key] = 0;
    }

    total[key] += expense.amount;

    return total;
  }, {});
}

export function getTopCategory(expenses) {
  const groupedCategory = groupByCategory(expenses);

  return Object.entries(groupedCategory).reduce(
    (max, current) => (current[1] > max[1] ? current : max)
  )[0];
}

export function getPercentChange(current, previous) {
  if (previous === 0) {
    return current === 0 ? 0 : 100;
  }
  return Math.round(((current - previous) / previous) * 100);
}

