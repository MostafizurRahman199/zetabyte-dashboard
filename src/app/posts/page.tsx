"use client";

import { Card } from "@/components/Card";
import { useFetch } from "@/hooks/useFetch";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostsPage() {
  const { data: posts, loading, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Posts</h1>

      {loading && <p>Loading posts...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts &&
          posts.map((post) => (
            <Card key={post.id} id={post.id} title={post.title} body={post.body} />
          ))}
      </div>
    </div>
  );
}
