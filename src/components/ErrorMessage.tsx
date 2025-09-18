
import React from "react";
import { AlertTriangle } from "lucide-react";

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = "Something went wrong. Please try again.",
  onRetry,
}) => {
  return (
    <div className="flex w-10/12 mx-auto h-80 mt-20 flex-col items-center justify-center 
      bg-gray-800/70 border border-yellow-500 text-yellow-400 
      p-6 rounded-xl shadow-lg">
      
      {/* Icon & Title */}
      <div className="flex items-center gap-3 mb-4">
        <AlertTriangle className="w-7 h-7 text-yellow-400" />
        <span className="text-lg font-bold tracking-wide">Error</span>
      </div>

      {/* Message */}
      <p className="text-base text-center mb-6">{message}</p>

      {/* Retry Button */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-yellow-400 text-gray-900 font-semibold 
          rounded-lg shadow hover:bg-yellow-500 transition"
        >
          Retry
        </button>
      )}
    </div>
  );
};
