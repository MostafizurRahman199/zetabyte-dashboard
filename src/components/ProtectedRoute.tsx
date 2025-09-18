"use client";

import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import LoadingPage from "./LoadingPage";
import { LoginMessage } from "./LoginMessage";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { data: session, status } = useSession();

  if (status === "loading") return <LoadingPage />;
  if (!session) return <LoginMessage />;

  return <>{children}</>;
};
