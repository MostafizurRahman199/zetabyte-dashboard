// src/components/LoginMessage.tsx
"use client";

import React from "react";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface LoginMessageProps {
  message?: string;
}

export const LoginMessage: React.FC<LoginMessageProps> = ({
  message = "Please login to access this page.",
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <motion.div
        className="max-w-md w-full bg-gray-800 border-t-4 border-yellow-400 rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <AlertCircle className="w-12 h-12 text-yellow-400 mb-4" />
        <p className="text-yellow-400 text-lg md:text-xl font-semibold">{message}</p>
      </motion.div>
    </div>
  );
};
