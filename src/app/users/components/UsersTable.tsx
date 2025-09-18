"use client";

import React from "react";
import { motion } from "framer-motion";
import { User } from "@/types/user";

interface UsersTableProps {
  users: User[];
  onSelectUser: (user: User) => void;
}

export const UsersTable: React.FC<UsersTableProps> = ({ users, onSelectUser }) => {
  return (
    <motion.div
      className="overflow-x-auto rounded-xl shadow-2xl border border-yellow-400/20 bg-gray-800/50 backdrop-blur-sm"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <table className="min-w-full text-left text-sm md:text-base">
        <thead className="bg-yellow-400/10">
          <tr>
            <th className="p-3 md:p-4 text-yellow-300 font-semibold text-sm md:text-base">Name</th>
            <th className="p-3 md:p-4 text-yellow-300 font-semibold text-sm md:text-base hidden sm:table-cell">Email</th>
            <th className="p-3 md:p-4 text-yellow-300 font-semibold text-sm md:text-base hidden md:table-cell">Company</th>
          </tr>
        </thead>
        <motion.tbody
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {users.map((user) => (
            <motion.tr
              key={user.id}
              className="cursor-pointer hover:bg-yellow-400/10 transition-all duration-300 border-b border-yellow-400/10 last:border-b-0"
              onClick={() => onSelectUser(user)}
              variants={{ 
                hidden: { opacity: 0, y: 15 }, 
                visible: { opacity: 1, y: 0 } 
              }}
              whileHover={{ scale: 1.01 }}
            >
              <td className="p-3 md:p-4 text-yellow-200">
                <div className="flex flex-col">
                  <span className="font-medium text-yellow-300">{user.name}</span>
                  <span className="text-xs text-yellow-400/80 sm:hidden mt-1">{user.email}</span>
                  <span className="text-xs text-yellow-400/60 md:hidden mt-1">{user.company.name}</span>
                </div>
              </td>
              <td className="p-3 md:p-4 text-yellow-200/90 hidden sm:table-cell">{user.email}</td>
              <td className="p-3 md:p-4 text-yellow-200/80 hidden md:table-cell">{user.company.name}</td>
            </motion.tr>
          ))}
        </motion.tbody>
      </table>
    </motion.div>
  );
};