


"use client";

import React from "react";

interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string; // optional extra classes
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  className = "",
}) => (
  <div
    className={`p-5 bg-gray-800 text-yellow-400 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col justify-between h-60 ${className}`}
  >
    {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
    {description && <p className="text-gray-200 flex-1">{description}</p>}
    {children}
  </div>
);
