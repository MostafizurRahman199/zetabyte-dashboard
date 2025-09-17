"use client";

import { useSession } from "next-auth/react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Card } from "@/components/Card";

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  );
}

const ProfileContent = () => {
  const { data: session } = useSession();

  if (!session) return null; // Shouldn't happen due to ProtectedRoute

  const user = session.user;

  return (
    <div className="p-6 max-w-md mx-auto">
      <Card title="My Profile">
        <div className="flex flex-col items-center">
          {user?.image && (
            <img
              src={user.image}
              alt={user.name || "Profile"}
              className="w-24 h-24 rounded-full mb-4"
            />
          )}
          <p className="text-lg font-semibold">{user?.name}</p>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </Card>
    </div>
  );
};
