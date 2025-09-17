"use client";

import React, { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import Link from "next/link";
import { Card } from "@/components/Card";
import { motion } from "framer-motion";

export default function PostsContent() {
  const [simulateError, setSimulateError] = useState(false);
  const { data: posts, loading, error } = useFetch<any[]>(
    simulateError
      ? "https://jsonplaceholder.typicode.com/invalid-posts"
      : "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      <button
        onClick={() => setSimulateError(!simulateError)}
        className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        {simulateError ? "Fetch Normal Posts" : "Simulate Error"}
      </button>

      {loading && <p>Loading posts...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts?.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: post.id * 0.05 }}
          >
            <Link href={`/posts/${post.id}`}>
              <Card title={post.title} description={post.body} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
