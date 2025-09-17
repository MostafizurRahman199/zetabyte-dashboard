"use client";

import { useSession } from "next-auth/react";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { data: session, status } = useSession();

  if (status === "loading") return <p className="text-center mt-10">Loading...</p>;
  if (!session) return <p className="text-center mt-10 text-red-500">Please login to access this page.</p>;

  return <>{children}</>;
};
