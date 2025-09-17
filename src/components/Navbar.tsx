// src/components/Navbar.tsx
"use client";

import { AuthButton } from "./AuthButton";

export const Navbar = () => (
  <nav className="bg-gray-900 text-yellow-400 shadow-md px-6 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold tracking-wide">Zettabyte Dashboard</h1>
    <AuthButton />
  </nav>
);
