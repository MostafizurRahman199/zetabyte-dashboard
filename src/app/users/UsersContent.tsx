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
      <motion.div 
        className="min-h-screen flex items-center justify-center bg-gray-900"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
      >
        <LoadingPage />
      </motion.div>
    );

  if (error)
    return (
      <motion.div
        className="flex items-center justify-center min-h-screen p-4 bg-gray-900"
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
      className="p-3 sm:p-4 md:p-6 w-full max-w-7xl mx-auto min-h-screen bg-gray-900 text-yellow-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="text-center md:text-left mb-6 md:mb-8">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Users Directory
        </motion.h1>
        <motion.p
          className="text-yellow-400/70 text-sm sm:text-base mt-2"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Browse through our user database
        </motion.p>
      </div>

      {/* Users Table Container */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {users && (
          <div className="w-full">
            <UsersTable users={users} onSelectUser={setSelectedUser} />
          </div>
        )}
      </motion.div>

      {/* Loading state for empty users */}
      {!users && !loading && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-yellow-400/70">No users found.</p>
        </motion.div>
      )}

      {/* Animate User Modal */}
      <AnimatePresence>
        {selectedUser && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
          >
            <UserModal
              user={selectedUser}
              onClose={() => setSelectedUser(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile bottom padding */}
      <div className="h-8 md:h-12"></div>
    </motion.div>
  );
}