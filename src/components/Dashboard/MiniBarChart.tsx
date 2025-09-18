"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

interface MiniBarChartProps {
  data: { value: number; label?: string }[];
}

export const MiniBarChart: React.FC<MiniBarChartProps> = ({ data }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-yellow-500 w-full overflow-x-auto">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-yellow-400">
        Activity Overview
      </h2>
      <div className="h-40 flex items-end gap-2 sm:gap-3 relative min-w-max">
        {data.map((bar, i) => (
          <div key={i} className="relative flex flex-col items-center">
            {/* Tooltip */}
            {hovered === i && (
              <span className="absolute -top-6 text-xs sm:text-sm bg-yellow-400 text-gray-900 px-2 py-1 rounded-md shadow-lg">
                {bar.label || bar.value}
              </span>
            )}

            {/* Bar */}
            <motion.div
              className="w-4 sm:w-6 bg-yellow-400 rounded cursor-pointer"
              initial={{ height: 0 }}
              animate={{ height: bar.value }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ height: bar.value }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
