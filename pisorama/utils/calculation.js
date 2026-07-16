export function getTotal(expenses = []) {
  return (expenses || []).reduce((total, expense) => {
    return total + Number(expense?.amount || 0);
  }, 0);
}

export function groupByCategory(expenses = []) {
  return (expenses || []).reduce((total, expense) => {
    const key = expense.category || "uncategorized";

    if (!total[key]) {
      total[key] = 0;
    }

    total[key] += Number(expense?.amount || 0);

    return total;
  }, {});
}

export function getTopCategory(expenses = []) {
  const groupedCategory = groupByCategory(expenses);
  const entries = Object.entries(groupedCategory);

  if (entries.length === 0) {
    return "No expenses";
  }

  return entries.reduce((max, current) => (
    current[1] > max[1] ? current : max
  ))[0];
}

export function getPercentChange(current, previous) {
  if (previous === 0) {
    return current === 0 ? 0 : 100;
  }
  return Math.round(((current - previous) / previous) * 100);
}

