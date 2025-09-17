// import type { Metadata } from "next";
// import "./globals.css";
// import { Sidebar } from "@/components/Sidebar";
// import { Navbar } from "@/components/Navbar";


// export const metadata: Metadata = {
//   title: "Zettabyte Dashboard",
//   description: "Frontend Developer Test",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="flex min-h-screen bg-gray-100">
//         <Sidebar />
//         <div className="flex flex-col flex-1">
//           <Navbar />
//           <main className="p-6">{children}</main>
//         </div>
//       </body>
//     </html>
//   );
// }



// src/app/layout.tsx
"use client"
import { SessionProvider } from "next-auth/react";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        {/* Wrap only content that needs session in client provider */}
        <SessionProvider>
          <div className="flex flex-col min-h-screen">
            {/* Navbar on top */}
            <Navbar />

            <div className="flex flex-1">
              {/* Sidebar on left */}
              <Sidebar />

              {/* Main content */}
              <main className="flex-1 p-6">{children}</main>
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
