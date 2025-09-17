"use client";

import { ProtectedRoute } from "@/components/ProtectedRoute";
import PostsContent from "./PostsContent";


export default function PostsPage() {
  return (
    <ProtectedRoute>
      <PostsContent />
    </ProtectedRoute>
  );
}
