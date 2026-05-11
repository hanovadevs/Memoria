"use client";

import React, { useState } from "react";
import { Container, Section } from "@/components/ui/LayoutUtils";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";

const allProducts = [
  { id: "1", title: "Minimal UI Kit", category: "Design", price: 49, image: "" },
  { id: "2", title: "Creator OS", category: "Notion Template", price: 29, image: "" },
  { id: "3", title: "Brand Identity Pack", category: "Assets", price: 79, image: "" },
  { id: "4", title: "Motion Presets", category: "Animation", price: 39, image: "" },
  { id: "5", title: "Typeface Collection", category: "Typography", price: 59, image: "" },
  { id: "6", title: "3D Icon Set", category: "Assets", price: 34, image: "" },
  { id: "7", title: "Web Mockups", category: "Mockups", price: 24, image: "" },
  { id: "8", title: "Video Effects", category: "Video", price: 45, image: "" },
];

const categories = ["All", "Design", "Assets", "Notion Template", "Animation", "Typography", "Mockups", "Video"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Section className="pb-10">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The Collection</h1>
              <p className="text-neutral-500 max-w-md">Browse our curated library of premium digital assets designed for excellence.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                />
              </div>
              <Button variant="outline" className="w-full sm:w-auto gap-2">
                <SlidersHorizontal size={18} /> Filters
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === cat
                    ? "bg-black text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-neutral-500">No products found matching your criteria.</p>
              <Button
                variant="ghost"
                className="mt-4"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}

// Utility function duplicated for this file if needed, or imported
import { cn } from "@/lib/utils";
