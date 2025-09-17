


// src/components/UserModal.tsx
"use client";

import { User } from "@/types/user";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Globe, Building2, MapPin } from "lucide-react";



interface UserModalProps {
  user: User | null;
  onClose: () => void;
}

export const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-gray-900 text-yellow-400 p-6 rounded-2xl shadow-2xl w-full max-w-lg relative"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <h2 className="text-2xl font-bold mb-2 text-center">
            {user.name}
          </h2>
          <p className="text-center text-sm text-yellow-300 mb-6">
            @{user.username}
          </p>

          {/* Info Grid */}
          <div className="grid gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-yellow-300" />
              <span>{user.email}</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-300" />
              <span>{user.phone}</span>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-yellow-300" />
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {user.website}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-yellow-300" />
              <span>
                {user.address.street}, {user.address.suite}, <br />
                {user.address.city} - {user.address.zipcode}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-yellow-300" />
              <span>
                {user.company.name} <br />
                <span className="text-sm text-yellow-300 italic">
                  "{user.company.catchPhrase}"
                </span>
              </span>
            </div>
          </div>

          {/* Close Button */}
          <button
            className="mt-6 w-full py-2 rounded-lg bg-yellow-400 text-gray-900 font-semibold shadow-md hover:bg-yellow-500 transition"
            onClick={onClose}
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
