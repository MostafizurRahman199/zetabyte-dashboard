"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <motion.aside
      animate={{ width: open ? 200 : 60 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 text-white h-screen p-3 flex flex-col"
    >
      <button
        onClick={() => setOpen(!open)}
        className="mb-6 bg-gray-700 px-2 py-1 rounded"
      >
        {open ? "←" : "→"}
      </button>
      <nav className="flex flex-col space-y-2">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/posts" className="hover:underline">
          Posts
        </Link>
        <Link href="/users" className="hover:underline">
          Users
        </Link>
        <Link href="/profile" className="hover:underline">
          Profile
        </Link>
      
      </nav>
    </motion.aside>
  );
};
