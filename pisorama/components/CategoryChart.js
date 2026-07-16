"use client";
import { categories } from "../utils/expenseShape.js";
import { groupByCategory } from "../utils/calculation.js";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from "recharts";

export function CategoryChart({ expenses }) {
  const colorMap = Object.fromEntries(
    categories.map(({ value, color }) => [value, color])
  );

  const chartData = Object.entries(groupByCategory(expenses)).map(
    ([category, amount]) => ({
      category,
      amount,
      fill: colorMap[category] ?? "#9CA3AF",
    })
  );

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}