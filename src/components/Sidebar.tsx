// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { useState } from "react";

// export const Sidebar: React.FC = () => {
//   const [open, setOpen] = useState(true);

//   return (
//     <motion.aside
//       animate={{ width: open ? 200 : 60 }}
//       transition={{ duration: 0.3 }}
//       className="bg-gray-800 text-white h-screen p-3 flex flex-col"
//     >
//       <button
//         onClick={() => setOpen(!open)}
//         className="mb-6 bg-gray-700 px-2 py-1 rounded"
//       >
//         {open ? "←" : "→"}
//       </button>
//       <nav className="flex flex-col space-y-2">
//         <Link href="/" className="hover:underline">
//           Home
//         </Link>
//         <Link href="/posts" className="hover:underline">
//           Posts
//         </Link>
//         <Link href="/users" className="hover:underline">
//           Users
//         </Link>
//         <Link href="/profile" className="hover:underline">
//           Profile
//         </Link>
      
//       </nav>
//     </motion.aside>
//   );
// };



"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);

  const navItems: NavItem[] = [
    {
      name: "Home",
      href: "/",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10h16V10" />
        </svg>
      ),
    },
    {
      name: "Posts",
      href: "/posts",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      name: "Users",
      href: "/users",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
      ),
    },
    {
      name: "Profile",
      href: "/profile",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A12.083 12.083 0 0112 15c2.485 0 4.8.744 6.879 2.072M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <motion.aside
      animate={{ width: open ? 220 : 60 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-900 text-yellow-400 min-h-screen flex flex-col p-3 shadow-lg"
    >
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center mb-6 p-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition"
      >
        {/* Hamburger Icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Navigation */}
      <nav className="flex flex-col gap-3 mt-2">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-2 rounded hover:bg-yellow-400 hover:text-gray-900 cursor-pointer transition"
            >
              {item.icon}
              {open && <span className="font-medium">{item.name}</span>}
            </motion.div>
          </Link>
        ))}
      </nav>

      {/* Optional Footer */}
      <div className="mt-auto p-2 text-sm text-yellow-300">{open && "© 2025 Zettabyte"}</div>
    </motion.aside>
  );
};
