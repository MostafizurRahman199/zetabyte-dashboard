"use client";

import { useFetch } from "@/hooks/useFetch";
import { useParams } from "next/navigation";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostDetailPage() {
  const params = useParams();
  const { data: post, loading, error } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  return (
    <div>
      {loading && <p>Loading post...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {post && (
        <div className="p-6 bg-white rounded shadow">
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700">{post.body}</p>
        </div>
      )}
    </div>
  );
}
