"use client";

import { Container, Section } from "@/components/ui/LayoutUtils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Design", count: 12, slug: "design", description: "UI kits, wireframes, and design systems." },
  { name: "Assets", count: 8, slug: "assets", description: "3D icons, illustrations, and patterns." },
  { name: "Templates", count: 15, slug: "templates", description: "Notion, Webflow, and Framer templates." },
  { name: "Animation", count: 6, slug: "animation", description: "Lottie files and motion presets." },
  { name: "Typography", count: 4, slug: "typography", description: "Custom fonts and lettering packs." },
  { name: "Video", count: 9, slug: "video", description: "LUTs, overlays, and transition packs." },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen">
      <Section className="pb-10 pt-32">
        <Container>
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Categories</h1>
            <p className="text-neutral-500 text-sm max-w-sm">Browse our collection by specialized creative categories.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <Link href={`/products?category=${cat.name}`} className="block">
                  <div className="p-10 bg-white rounded-[3rem] border border-neutral-100 premium-shadow group-hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-12">
                      <div className="w-16 h-16 rounded-[1.5rem] bg-neutral-100 flex items-center justify-center text-neutral-300 font-bold">
                        IMG
                      </div>
                      <span className="px-4 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                        {cat.count} Products
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors">{cat.name}</h3>
                    <p className="text-neutral-500 leading-relaxed mb-8 flex-grow">
                      {cat.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm font-bold group-hover:gap-4 transition-all">
                      Browse Category <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
