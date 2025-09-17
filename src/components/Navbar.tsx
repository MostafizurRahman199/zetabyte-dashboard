// src/components/Navbar.tsx

import { AuthButton } from "./AuthButton";

export const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">Zettabyte Dashboard</h1>
    <AuthButton />
  </nav>
);
