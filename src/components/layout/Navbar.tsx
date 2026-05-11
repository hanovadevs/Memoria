"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "../ui/LayoutUtils";
import { useCartStore } from "@/store/useCartStore";
import { UserButton, Show } from "@clerk/nextjs";

const navLinks = [
  { name: "Products", href: "/products" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openCart, totalItems } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-neutral-200/50 group-hover:border-neutral-300 transition-all">
              <Image 
                src="/logo.png" 
                alt="Memoria Logo" 
                fill
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            <span className="text-base font-bold tracking-[0.2em] uppercase">
              MEMORIA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openCart}
              className="p-2 hover:bg-neutral-100 rounded-full transition-colors relative"
            >
              <ShoppingBag size={18} />
              {mounted && totalItems() > 0 && (
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-black text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                  {totalItems()}
                </span>
              )}
            </button>
            <div className="flex items-center">
              {mounted && (
                <>
                  <Show when="signed-in">
                    <UserButton 
                      appearance={{
                        elements: {
                          avatarBox: "w-8 h-8 rounded-full border border-neutral-100",
                          userButtonPopoverCard: "rounded-2xl border border-neutral-100 shadow-2xl",
                          userButtonPopoverActionButton: "hover:bg-neutral-50 transition-colors",
                        }
                      }} 
                    />
                  </Show>
                  
                  {/* We show this by default so you can see the design while fixing Clerk keys */}
                  <Link 
                    href="/sign-in" 
                    className="text-xs font-bold uppercase tracking-widest px-5 py-2.5 bg-black text-white rounded-full hover:bg-neutral-800 transition-all ml-2"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button 
              onClick={openCart}
              className="p-2 relative"
            >
              <ShoppingBag size={20} />
              {mounted && totalItems() > 0 && (
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-black text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                  {totalItems()}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
            <div className="px-6 py-10 space-y-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-bold tracking-tight"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="pt-8 border-t border-neutral-100">
                {mounted && (
                  <>
                    <Show when="signed-in">
                      <div className="flex items-center gap-4">
                        <UserButton />
                        <span className="text-sm font-medium">My Account</span>
                      </div>
                    </Show>

                    <div className="flex flex-col gap-4">
                      <Link 
                        href="/sign-in"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full py-4 bg-black text-white rounded-2xl text-center font-bold"
                      >
                        Sign In
                      </Link>
                      <Link 
                        href="/sign-up"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full py-4 bg-neutral-100 text-black rounded-2xl text-center font-bold"
                      >
                        Create Account
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
