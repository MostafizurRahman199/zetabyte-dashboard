"use client"

// src/app/layout.tsx
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { ClientProvider } from "@/components/ClientProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex">
        {/* Wrap entire content in SessionProvider so Navbar and AuthButton work */}
        <ClientProvider>
          {/* Sidebar on the left */}
          <Sidebar />

          {/* Main layout */}
          <div className="flex-1 flex flex-col">
            <Navbar />

            <main className="flex-1 p-6">{children}</main>
          </div>
        </ClientProvider>
      </body>
    </html>
  );
}
