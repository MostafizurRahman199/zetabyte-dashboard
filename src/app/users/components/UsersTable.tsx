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
      className="overflow-x-auto rounded-lg shadow-lg border border-gray-700"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <table className="min-w-full text-left text-sm md:text-base">
        <thead className="bg-gray-800">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Company</th>
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
              className="cursor-pointer hover:bg-gray-700 transition"
              onClick={() => onSelectUser(user)}
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            >
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.company.name}</td>
            </motion.tr>
          ))}
        </motion.tbody>
      </table>
    </motion.div>
  );
};
