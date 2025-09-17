"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CardProps {
  id: number;
  title: string;
  body: string;
}

export const Card: React.FC<CardProps> = ({ id, title, body }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 bg-white rounded shadow hover:shadow-lg transition"
    >
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-gray-600 text-sm">{body.slice(0, 80)}...</p>
      <Link href={`/posts/${id}`} className="text-blue-500 text-sm mt-2 inline-block">
        Read more
      </Link>
    </motion.div>
  );
};
