"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export function AuthLayout({ children, title = "Secure Access", subtitle = "Authentication Portal" }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden font-sans">
      {/* Cinematic Background with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 scale-105 animate-pulse-slow"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
          filter: "grayscale(100%) contrast(120%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-0" />

      {/* Shutter Animation Overlay */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: [0.87, 0, 0.13, 1], delay: 0.2 }}
        className="absolute inset-0 bg-black z-50 flex flex-col items-center justify-center"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-4xl font-bold tracking-[0.2em] uppercase"
        >
          Memoria
        </motion.div>
      </motion.div>

      <div className="relative z-10 w-full max-w-md px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="w-full"
        >
          {/* Main Auth Card */}
          <div className="backdrop-blur-3xl bg-[#0a0a0a]/80 border border-white/10 rounded-[2.5rem] p-10 shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] relative overflow-hidden group">
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              <div className="text-center space-y-2">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 1.2 }}
                  className="text-[10px] uppercase tracking-[0.4em] text-white font-bold"
                >
                  {subtitle}
                </motion.span>
                <h1 className="text-3xl font-bold tracking-tighter text-white">
                  {title}
                </h1>
              </div>

              {/* Clerk Component Injection Point */}
              <div className="auth-component-wrapper py-2">
                {children}
              </div>

              <div className="text-center pt-4">
                <p className="text-neutral-500 text-[11px] uppercase tracking-widest font-medium">
                  Luxury Digital Assets &copy; 2024
                </p>
              </div>
            </div>
          </div>

          {/* Back to Store Link */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-center mt-8"
          >
            <a 
              href="/" 
              className="text-neutral-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <span className="w-1 h-1 bg-neutral-500 rounded-full" />
              Return to Gallery
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 z-10 hidden lg:block">
        <div className="text-white/20 text-[10px] tracking-[0.5em] uppercase vertical-text">
          Est. MMXXIV
        </div>
      </div>
    </div>
  );
}
