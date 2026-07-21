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
    <div className="h-[275px] w-full card-style">
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
            stroke="none"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#232629",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
              color: "#EDEEEF",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}