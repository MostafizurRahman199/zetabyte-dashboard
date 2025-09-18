"use client";

import React, { useState } from "react";
import { useFetch } from "@/hooks/useFetch";

import { User } from "@/types/user";
import LoadingPage from "@/components/LoadingPage";
import { ErrorMessage } from "@/components/ErrorMessage";
import { motion, AnimatePresence } from "framer-motion";
import { UsersTable } from "./components/UsersTable";
import { UserModal } from "./components/UserModal";


export default function UsersContent() {
  const { data: users, loading, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading)
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <LoadingPage />
      </motion.div>
    );

  if (error)
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <ErrorMessage
          message="Failed to load users. Please check your connection."
          onRetry={() => window.location.reload()}
        />
      </motion.div>
    );

  return (
    <motion.div
      className="p-6 w-10/12 mx-auto min-h-screen bg-gray-900 text-yellow-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Users</h1>

      {/* Users Table */}
      {users && <UsersTable users={users} onSelectUser={setSelectedUser} />}

      {/* Animate User Modal */}
      <AnimatePresence>
        {selectedUser && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
