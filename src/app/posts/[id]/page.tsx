"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import PostDetailsCard from "../components/PostDetailsCard";
import LoadingPage from "@/components/LoadingPage";


interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function SinglePostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!res.ok) throw new Error("Failed to fetch post");
        const data = await res.json();
        setPost(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <LoadingPage/>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-yellow-400 flex justify-center items-start">
      {post && (
        <PostDetailsCard
          title={post.title}
          body={post.body}
          author={`User #${post.userId}`} // placeholder since JSONPlaceholder doesn’t return username directly
        />
      )}
    </div>
  );
}
