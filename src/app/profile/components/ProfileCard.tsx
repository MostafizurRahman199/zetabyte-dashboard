"use client";

import { motion } from "framer-motion";
import { Mail, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

interface ProfileCardProps {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ name, email, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 text-yellow-400 rounded-xl shadow-xl p-8 w-full max-w-md hover:shadow-2xl transition-shadow"
    >
      {/* Profile image */}
      <div className="flex flex-col items-center">
        {image ? (
          <img
            src={image}
            alt={name || "Profile"}
            className="w-28 h-28 rounded-full border-4 border-yellow-400 mb-4 shadow-md"
          />
        ) : (
          <div className="w-28 h-28 flex items-center justify-center rounded-full border-4 border-yellow-400 mb-4 shadow-md bg-gray-700 text-3xl font-bold">
            {name?.charAt(0)}
          </div>
        )}

        {/* Name */}
        <h2 className="text-2xl font-bold">{name}</h2>

        {/* Email */}
        {email && (
          <div className="flex items-center gap-2 mt-2 text-yellow-200">
            <Mail size={18} />
            <span>{email}</span>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Action buttons */}
      <div className="flex justify-center">
        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 px-5 py-2 bg-yellow-400 text-gray-900 font-medium rounded-lg shadow hover:bg-yellow-500 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </motion.div>
  );
};
