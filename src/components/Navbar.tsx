// src/components/Navbar.tsx
"use client";

import { AuthButton } from "./AuthButton";

export const Navbar = () => (
  
   <div className="sticky top-0 md:z-40 bg-gray-900 w-full">
     <nav className="sticky top-0 md:z-50 bg-gray-900 w-full md:w-10/12 mx-auto text-yellow-400 shadow-md px-6 py-4 flex justify-around md:justify-between items-center">
    <h1 className="text-sm md:text-2xl font-bold tracking-wide">Zettabyte</h1>
    <AuthButton />
  </nav>
   </div>

);
