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
    <div className="h-[260px] w-full rounded-2xl border border-white/10 bg-[linear-gradient(135deg,_rgba(35,38,41,0.95),_rgba(24,25,28,0.95))] p-2 shadow-[0_12px_35px_rgba(0,0,0,0.22)] sm:h-[300px]">
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