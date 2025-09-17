


"use client";

import React, { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { UserModal } from "./UserModal";
import { User } from "@/types/user";

export default function UsersContent() {
  const { data: users, loading, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) return <p className="p-4 text-yellow-400">Loading users...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 w-10/12 mx-auto min-h-screen bg-gray-900 text-yellow-400 ">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Users</h1>

      {/* ✅ Responsive Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-700">
        <table className="min-w-full text-left text-sm md:text-base">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3 hidden sm:table-cell">Email</th>
              <th className="p-3 hidden md:table-cell">Company</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr
                key={user.id}
                className="cursor-pointer hover:bg-gray-700 transition"
                onClick={() => setSelectedUser(user)}
              >
                <td className="p-3">{user.name}</td>
                <td className="p-3 hidden sm:table-cell">{user.email}</td>
                <td className="p-3 hidden md:table-cell">
                  {user.company.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ User Modal */}
      <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
    </div>
  );
}
