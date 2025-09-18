
// src/components/PostDetailsCard.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { PostActionButton } from "./PostActionButton";

interface PostDetailsCardProps {
  title: string;
  body: string;
  author?: string;
}

const PostDetailsCard: React.FC<PostDetailsCardProps> = ({ title, body, author }) => {
  const router = useRouter();

  const handleBack = () => {
    // try to go back in history, otherwise go to /posts
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/posts");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-800 text-yellow-400 rounded-xl shadow-lg p-8 w-full max-w-3xl mx-auto hover:shadow-2xl transition-shadow"
    >
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 leading-snug break-words">{title}</h1>

      {/* Author  */}
      {author && (
        <p className="mb-4 text-yellow-300 font-medium italic">✍️ {author}</p>
      )}

      {/* Body */}
      <p className="text-yellow-200 leading-relaxed text-lg whitespace-pre-wrap">{body}</p>

      {/* Actions */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3">
      <PostActionButton
        label="← Back to Posts"
        onClick={handleBack}
        variant="primary"
        fullWidth
      />

      <PostActionButton
        label="Copy Link"
        onClick={() => {
          if (typeof window !== "undefined") {
            navigator.clipboard?.writeText(window.location.href);
          }
        }}
        variant="secondary"
        fullWidth
      />
    </div>

    </motion.div>
  );
};

export default PostDetailsCard;
