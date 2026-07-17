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
    <div className="w-full h-[260px] sm:h-[300px]">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="amount"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={50}
            label
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}