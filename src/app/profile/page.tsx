

"use client";

import { useSession } from "next-auth/react";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  );
}

const ProfileContent = () => {
  const { data: session } = useSession();

  if (!session) return null; // ProtectedRoute ensures session exists

  const user = session.user;

  return (
    <div className="p-6 flex justify-center items-center min-h-[80vh] ">
      <div className="bg-gray-800 text-yellow-400 rounded-xl shadow-xl p-8 w-full max-w-md transition-transform hover:scale-105">
        <div className="flex flex-col items-center">
          {user?.image && (
            <img
              src={user.image}
              alt={user.name || "Profile"}
              className="w-28 h-28 rounded-full border-4 border-yellow-400 mb-4 shadow-md"
            />
          )}
          <h2 className="text-2xl font-bold mb-2">{user?.name}</h2>
          <p className="text-yellow-200 mb-4">{user?.email}</p>

          
        </div>
      </div>
    </div>
  );
};

