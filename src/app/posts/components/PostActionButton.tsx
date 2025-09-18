"use client";

import React from "react";

interface PostActionButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const PostActionButton: React.FC<PostActionButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  fullWidth = false,
  className = "",
  ariaLabel,
}) => {
  const baseClasses =
    "w-full sm:w-auto px-5 py-2 rounded-lg font-semibold shadow transition transform active:scale-95";

  const variantClasses =
    variant === "primary"
      ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
      : "border border-yellow-400 text-yellow-300 hover:bg-yellow-700";

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel || label}
      className={`${baseClasses} ${variantClasses} ${widthClass} ${className}`}
    >
      {label}
    </button>
  );
};
