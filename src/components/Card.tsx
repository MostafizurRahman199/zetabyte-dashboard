"use client";

import React, { useState } from "react";

interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  children,
  className = "",
  hoverEffect = true,
  glowEffect = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative p-6 rounded-xl transition-all duration-500 cursor-pointer
        flex flex-col justify-start
        backdrop-blur-sm 
        bg-gradient-to-br from-gray-800/50 to-gray-900/60
        border border-yellow-400/20 text-yellow-300
        transform ${hoverEffect ? 'hover:scale-[1.02]' : ''}
        ${glowEffect && isHovered ? 'shadow-2xl shadow-yellow-400/10' : 'shadow-lg'}
        overflow-hidden
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5 opacity-0 transition-opacity duration-700 hover:opacity-100" />
      
      {/* Glow border */}
      {glowEffect && (
        <div className={`absolute inset-0 rounded-xl border border-yellow-400/0 transition-all duration-500 ${
          isHovered ? 'border-yellow-400/30 shadow-[0_0_15px_rgba(234,179,8,0.2)]' : ''
        }`} />
      )}

      {/* Content */}
      <div className="relative z-10">
        {title && (
          <h2 className="text-xl font-bold mb-3 text-yellow-300 drop-shadow-sm">{title}</h2>
        )}
        {description && (
          <p className="text-yellow-200/80 text-sm leading-relaxed mb-4">
            {description}
          </p>
        )}
        {children && <div className="mt-auto">{children}</div>}
      </div>

      {/* Subtle corner accents */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-400/5 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-8 h-8 bg-yellow-400/5 rounded-tr-full" />
    </div>
  );
};
