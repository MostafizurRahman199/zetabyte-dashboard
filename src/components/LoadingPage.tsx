"use client";

import React from "react";

const LoadingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-t-yellow-400 border-gray-800 rounded-full animate-spin"></div>
      
      {/* Loading Text */}
      <p className="mt-4 text-yellow-400 text-xl font-semibold tracking-wide">
        Loading...
      </p>
    </div>
  );
};

export default LoadingPage;
