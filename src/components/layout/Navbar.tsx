"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "../ui/LayoutUtils";

const navLinks = [
  { name: "Products", href: "/products" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4 bg-white/80 backdrop-blur-md border-b border-neutral-100" : "py-6 bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-xs">M</span>
            MEMORIA
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
              <ShoppingBag size={20} />
            </button>
            <Link href="/dashboard" className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
              <User size={20} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-neutral-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-neutral-600 hover:text-black transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-neutral-100">
                <button className="flex items-center gap-2 text-neutral-600">
                  <ShoppingBag size={20} /> Cart
                </button>
                <Link href="/dashboard" className="flex items-center gap-2 text-neutral-600">
                  <User size={20} /> Account
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
