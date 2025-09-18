"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: "Home", href: "/", icon: <HomeIcon /> },
    { name: "Posts", href: "/posts", icon: <PostsIcon /> },
    { name: "Users", href: "/users", icon: <UsersIcon /> },
    { name: "Profile", href: "/profile", icon: <ProfileIcon /> },
  ];

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 bg-yellow-400 text-gray-900 rounded-lg shadow hover:bg-yellow-500 transition"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: -220 }}
              animate={{ x: 0 }}
              exit={{ x: -220 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="fixed top-0 left-0 z-50 h-full w-56 bg-gray-900 text-yellow-400 shadow-lg p-4 flex flex-col"
            >
              <button
                onClick={() => setOpen(false)}
                className="self-end p-2 mb-6 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition"
              >
                Close
              </button>

              <nav className="flex flex-col gap-3 mt-2">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-2 rounded hover:bg-yellow-400 hover:text-gray-900 cursor-pointer transition"
                      onClick={() => setOpen(false)} // close sidebar on click
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </motion.div>
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Example icons
const HomeIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10h16V10" /></svg>;
const PostsIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" /></svg>;
const UsersIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z" /></svg>;
const ProfileIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A12.083 12.083 0 0112 15c2.485 0 4.8.744 6.879 2.072M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
