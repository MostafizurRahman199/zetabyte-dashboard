"use client";

import React from "react";

interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, description, children }) => (
  <div className="p-4 bg-white shadow rounded hover:shadow-md transition-shadow duration-300">
    {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
    {description && <p>{description}</p>}
    {children}
  </div>
);
