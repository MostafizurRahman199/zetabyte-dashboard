"use client";

import { motion } from "framer-motion";
import React from "react";

interface DashboardStatCardProps {
  title: string;
  value: string | number;
  description?: string;
}

export const DashboardStatCard: React.FC<DashboardStatCardProps> = ({
  title,
  value,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 10px 20px rgba(255, 206, 84, 0.3)",
      }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-6 bg-gray-800 border border-yellow-500 rounded-xl shadow-md flex flex-col justify-between w-full"
    >
      <h3 className="text-yellow-400 font-bold text-base sm:text-lg mb-1 sm:mb-2 truncate">
        {title}
      </h3>
      <motion.p
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
      >
        {value}
      </motion.p>
      {description && (
        <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2 truncate">
          {description}
        </p>
      )}
    </motion.div>
  );
};
