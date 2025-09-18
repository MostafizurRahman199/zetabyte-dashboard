"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Heart, 
  Code2,
  ExternalLink
} from "lucide-react";

interface Particle {
  x: string;
  y: string;
  duration: number;
  delay: number;
}

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com", color: "hover:text-yellow-300" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-yellow-400" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-yellow-500" },
    { name: "Email", icon: Mail, href: "mailto:hello@example.com", color: "hover:text-yellow-600" }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" }
  ];

  const resourceLinks = [
    { name: "Documentation", href: "/docs" },
    { name: "API", href: "/api" },
    { name: "Support", href: "/support" },
    { name: "Community", href: "/community" }
  ];

  // Client-only floating particles
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 5 }, () => ({
      x: Math.random() * 100 + '%',
      y: Math.random() * 100 + '%',
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2
    }));
    setParticles(generated);
  }, []);

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-yellow-400/20 mt-auto">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0yIDBoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0tNCAwaC0ydi0yaDJ2MnptMC00aC0ydi0yaDJ2MnptLTQgMGgtMnYtMmgydjJ6bTAgNGgtMnYtMmgydjJ6bTItNGgtMnYtMmgydjJ6bTAgNGgtMnYtMmgydjJ6bTQgMGgtMnYtMmgydjJ6bTAgNGgtMnYtMmgydjJ6bTItNGgtMnYtMmgydjJ6bTAgNGgtMnYtMmgydjJ6bTQgMGgtMnYtMmgydjJ6bTAgNGgtMnYtMmgydjJ6bTItNGgtMnYtMmgydjJ6bTAgNGgtMnYtMmgydjJ6bTQgMGgtMnYtMmgydjJ6bTAgNGgtMnYtMmgydjJ6bTItNGgtMnYtMmgydjJ6bTAgNGgtMnYtMmgydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      {/* Footer main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-gray-900" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Zettabyte
              </span>
            </div>
            <p className="text-yellow-200/80 text-sm leading-relaxed mb-6 max-w-xs">
              Building amazing digital experiences with cutting-edge technology and creative solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400/80 transition-all duration-300 hover:bg-yellow-400/20 hover:border-yellow-400/30 ${social.color} backdrop-blur-sm`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className="text-yellow-300 font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span> Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={link.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                  <a href={link.href} className="text-yellow-200/70 hover:text-yellow-300 transition-all duration-300 flex items-center gap-2 group text-sm">
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="text-yellow-300 font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span> Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <motion.li key={link.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                  <a href={link.href} className="text-yellow-200/70 hover:text-yellow-300 transition-all duration-300 flex items-center gap-2 group text-sm">
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <h3 className="text-yellow-300 font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span> Stay Updated
            </h3>
            <p className="text-yellow-200/70 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <motion.div className="flex gap-2" whileHover={{ scale: 1.02 }}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-lg text-yellow-200 placeholder-yellow-400/50 text-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/30"
              />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 bg-yellow-400 text-gray-900 font-medium rounded-lg text-sm hover:bg-yellow-500 transition-colors">
                Subscribe
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="border-t border-yellow-400/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-yellow-200/60 text-sm">
            <span>© {currentYear} Zettabyte. All rights reserved.</span>
            <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
          </div>
          <div className="flex gap-6 text-sm text-yellow-200/60">
            <a href="/privacy" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-yellow-300 transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>

      {/* Floating particles - client-only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
            initial={{ x: p.x, y: p.y }}
            animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
          />
        ))}
      </div>
    </footer>
  );
};
