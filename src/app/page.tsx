"use client";

import React from "react";

import { Hero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/ui/LayoutUtils";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Zap, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

import { products } from "@/data/products";

const featuredProducts = products.slice(0, 4);

const benefits = [
  {
    icon: <Layers size={20} />,
    title: "Modular Design",
    description: "Built to be flexible and adaptable to any project or workflow."
  },
  {
    icon: <Zap size={20} />,
    title: "Instant Access",
    description: "Download your assets immediately after purchase. No waiting."
  },
  {
    icon: <Shield size={20} />,
    title: "Premium Quality",
    description: "Every asset is meticulously vetted for the highest standards."
  },
  {
    icon: <Sparkles size={20} />,
    title: "Lifetime Updates",
    description: "Get all future improvements and updates for free, forever."
  }
];

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Featured Products */}
      <Section className="bg-neutral-50/50">
        <Container>
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Featured Assets</h2>
              <p className="text-neutral-500 text-sm max-w-sm">Selected high-end products to boost your creative workflow today.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex gap-2 text-sm">
              View All <ArrowRight size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center md:hidden">
            <Button variant="outline" className="w-full gap-2 text-sm">
              View All Products <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Categories Section */}
      <Section className="bg-neutral-50/50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Browse by Category</h2>
            <p className="text-neutral-500 text-sm mx-auto max-w-sm">Find the perfect asset for your specific creative needs.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Design", "Assets", "Templates", "Animation", "Typography", "Video"].map((cat, i) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/products?category=${cat}`} className="block p-5 bg-white rounded-xl border border-neutral-100 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="w-9 h-9 bg-neutral-50 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <Zap size={16} />
                  </div>
                  <span className="text-xs font-bold">{cat}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="pt-0">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-black rounded-[2rem] p-8 md:p-12 text-center text-white overflow-hidden relative"
          >
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 relative z-10 leading-tight">
              Ready to elevate <br className="hidden md:block" /> your craft?
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto mb-8 relative z-10">
              Join thousands of creators using Memoria assets to build better products, faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
              <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-neutral-100 text-sm px-8">
                Get Started Now
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 text-sm px-8">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
