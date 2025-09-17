"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export const AuthButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center space-x-2">
        <p>{session.user?.name}</p>
        <button
          onClick={() => signOut()}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Login with Google
    </button>
  );
};
