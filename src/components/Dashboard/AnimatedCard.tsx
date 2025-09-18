"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence, useAnimation } from "framer-motion";

interface AnimatedCardProps {
  title?: string;
  value?: string | number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title = "Card Title",
  value = "0",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 206, 84, 0.4)" }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gray-800 border border-yellow-500 rounded-xl shadow-md flex flex-col justify-between"
    >
      {/* Title */}
      <h3 className="text-yellow-400 font-bold text-lg mb-2">{title}</h3>

      {/* Value */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-white"
      >
        {value}
      </motion.p>

      {/* Optional description or icon */}
      <p className="text-gray-400 text-sm mt-2">
        {/* You can pass description as prop if needed */}
        Last updated just now
      </p>
    </motion.div>
  );
};
