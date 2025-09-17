

// src/components/AuthButton.tsx
"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export const AuthButton = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (session) {
    return (
      <div className="relative" ref={ref}>
        {/* Profile Image */}
        <img
          src={session.user?.image || "/default-avatar.png"}
          alt="Profile"
          className="w-10 h-10 rounded-full cursor-pointer border-2 border-yellow-400"
          onClick={() => setOpen(!open)}
        />

        {/* Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-6 w-40 bg-gray-900 text-yellow-400 rounded-lg shadow-lg overflow-hidden z-50"
            >
              <Link
                href="/profile"
                className="block px-4 py-2 hover:bg-yellow-400 hover:text-gray-900 transition"
                onClick={() => setOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={() => signOut()}
                className="w-full text-left px-4 py-2 hover:bg-yellow-400 hover:text-gray-900 transition"
              >
                Logout
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
     <button
      onClick={() => signIn("google")}
      className="
        flex items-center justify-center gap-2
        px-5 py-3
        bg-yellow-400 text-gray-900 font-semibold
        rounded-xl shadow-lg
        hover:bg-yellow-500
        active:scale-95
        transition transform duration-150 ease-in-out
      "
    >
      <FcGoogle size={24} />
      Google Login
    </button>
  );
};
