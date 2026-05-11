"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";

interface ProductCardProps {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  className?: string;
}

export function ProductCard({ id, title, category, price, image, className }: ProductCardProps) {
  const { addItem, openCart } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id, title, price, image, category });
    openCart();
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn("group relative bg-white rounded-[2rem] border border-neutral-100 overflow-hidden premium-shadow-hover", className)}
    >
      <Link href={`/products/${id}`} className="block">
        <div className="aspect-[4/5] bg-neutral-100 overflow-hidden relative">
          {/* Placeholder for real image */}
          <div className="absolute inset-0 bg-neutral-200" />
          <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-xs uppercase tracking-widest font-bold">
            Preview
          </div>
          
          <div className="absolute top-4 right-4 flex gap-2">
            <button 
              onClick={handleAddToCart}
              className="p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white"
            >
              <ShoppingBag size={18} />
            </button>
            <div className="p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest mb-1">{category}</p>
              <h3 className="text-base font-bold text-neutral-900 group-hover:text-black transition-colors">{title}</h3>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-black">{formatPrice(price)}</p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-neutral-50 flex items-center gap-2">
             <span className="text-[9px] text-neutral-400 uppercase tracking-widest font-bold">Digital</span>
             <span className="w-1 h-1 rounded-full bg-neutral-200" />
             <span className="text-[9px] text-neutral-400 uppercase tracking-widest font-bold">Lifetime Access</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
