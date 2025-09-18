"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, LogOut, User } from "lucide-react";
import { signOut } from "next-auth/react";

interface ProfileCardProps {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ name, email, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/80 text-yellow-300 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto border border-yellow-400/20 backdrop-blur-sm overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Glow border effect */}
      <div
        className={`absolute inset-0 rounded-xl sm:rounded-2xl border border-yellow-400/0 transition-all duration-500 ${
          isHovered ? "border-yellow-400/30 shadow-[0_0_20px_rgba(234,179,8,0.15)]" : ""
        }`}
      />

      {/* Profile image */}
      <div className="flex flex-col items-center relative z-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="relative mb-3 sm:mb-4 md:mb-6"
        >
          {image ? (
            <img
              src={image}
              alt={name || "Profile"}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border-3 sm:border-4 border-yellow-400/60 shadow-lg sm:shadow-2xl shadow-yellow-400/20 object-cover"
            />
          ) : (
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full border-3 sm:border-4 border-yellow-400/60 bg-gradient-to-br from-gray-700 to-gray-800 shadow-lg sm:shadow-2xl shadow-yellow-400/20">
              <User className="text-yellow-400/80 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </div>
          )}

          {/* Profile status indicator */}
          <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-green-500 rounded-full border-2 border-gray-900" />
        </motion.div>

        {/* Name */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-center drop-shadow-sm px-2"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {name || "Guest User"}
        </motion.h2>

        {/* Email */}
        {email && (
          <motion.div
            className="flex items-center gap-2 mt-1 sm:mt-2 md:mt-3 text-yellow-200/90 bg-yellow-400/10 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border border-yellow-400/20 text-xs sm:text-sm md:text-base w-full max-w-[280px] justify-center"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Mail className="text-yellow-400 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
            <span className="truncate text-ellipsis overflow-hidden">{email}</span>
          </motion.div>
        )}
      </div>

      {/* Divider */}
      <motion.div
        className="border-t border-yellow-400/20 my-4 sm:my-5 md:my-6 lg:my-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      />

      {/* Action buttons */}
      <motion.div
        className="flex justify-center relative z-10"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          onClick={() => signOut()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 group text-xs sm:text-sm md:text-base w-full max-w-[200px] justify-center"
        >
          <LogOut className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
          <span>Sign Out</span>
        </motion.button>
      </motion.div>

      {/* Corner accents */}
      <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 bg-yellow-400/40 rounded-full" />
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 w-1 sm:w-1.5 md:w-2 h-1 sm:h-1.5 md:h-2 bg-yellow-400/30 rounded-full" />
    </motion.div>
  );
};