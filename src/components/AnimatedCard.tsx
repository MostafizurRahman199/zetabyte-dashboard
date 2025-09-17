"use client";

import { motion } from "framer-motion";

export const AnimatedCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white rounded-xl shadow"
    >
      <h2 className="font-bold text-lg">Hello Animation</h2>
      <p className="text-gray-600 text-sm">This card slides in smoothly 🚀</p>
    </motion.div>
  );
};
