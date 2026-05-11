"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  className?: string;
}

export function ProductCard({ id, title, category, price, image, className }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn("group relative bg-white rounded-2xl border border-neutral-100 overflow-hidden premium-shadow-hover", className)}
    >
      <Link href={`/products/${id}`} className="block">
        <div className="aspect-[4/5] bg-neutral-100 overflow-hidden relative">
          {/* Placeholder for real image */}
          <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-xs uppercase tracking-widest font-bold">
            Preview
          </div>
          <div className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight size={18} />
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">{category}</p>
              <h3 className="text-lg font-bold text-neutral-900 group-hover:text-black transition-colors">{title}</h3>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-black">{formatPrice(price)}</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-neutral-50 flex items-center gap-2">
             <span className="text-xs text-neutral-400 font-medium">Digital Download</span>
             <span className="w-1 h-1 rounded-full bg-neutral-200" />
             <span className="text-xs text-neutral-400 font-medium">Lifetime Updates</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
