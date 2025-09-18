"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

interface CityPieChartProps {
  users: User[];
}

const COLORS = [
  "#FACC15", // yellow-400
  "#FBBF24",
  "#F59E0B",
  "#D97706",
  "#B45309",
  "#92400E",
  "#78350F",
];

export const CityPieChart: React.FC<CityPieChartProps> = ({ users }) => {
  // Count users by city
  const cityCount: { [key: string]: number } = {};
  users.forEach((user) => {
    const city = user.address.city;
    cityCount[city] = (cityCount[city] || 0) + 1;
  });

  // Convert to array for PieChart
  const data = Object.keys(cityCount).map((city) => ({
    name: city,
    value: cityCount[city],
  }));

  return (
    <div className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-yellow-500 w-full h-64 sm:h-80">
      <h2 className="text-yellow-400 text-lg sm:text-xl font-semibold mb-4">
        Users by City
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#FACC15"
            label={(entry) => entry.name}
            paddingAngle={2}
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: "#1F2937", borderRadius: "8px", border: "none" }}
            itemStyle={{ color: "#FACC15" }}
          />
          {/* <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ color: "#FACC15", fontSize: "0.8rem" }}
          /> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
