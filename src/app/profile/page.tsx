"use client";

import { useSession } from "next-auth/react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ProfileCard } from "./components/ProfileCard";


export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  );
}

const ProfileContent = () => {
  const { data: session } = useSession();

  if (!session) return null;

  const user = session.user;

  return (
    <div className="p-6 bg-gray-900 flex justify-center items-center min-h-screen">
      <ProfileCard name={user?.name} email={user?.email} image={user?.image} />
    </div>
  );
};
