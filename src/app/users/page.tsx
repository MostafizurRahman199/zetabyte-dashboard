"use client";

import { ProtectedRoute } from "@/components/ProtectedRoute";
import UsersContent from "./UsersContent";



export default function PostsPage() {
  return (
    <ProtectedRoute>
      <UsersContent/>
    </ProtectedRoute>
  );
}
