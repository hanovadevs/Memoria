"use client";

import { Hero } from "@/components/sections/Hero";
import { Container, Section } from "@/components/ui/LayoutUtils";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Zap, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

const featuredProducts = [
  { id: "1", title: "Minimal UI Kit", category: "Design", price: 49, image: "" },
  { id: "2", title: "Creator OS", category: "Notion Template", price: 29, image: "" },
  { id: "3", title: "Brand Identity Pack", category: "Assets", price: 79, image: "" },
  { id: "4", title: "Motion Presets", category: "Animation", price: 39, image: "" },
];

const benefits = [
  {
    icon: <Layers size={24} />,
    title: "Modular Design",
    description: "Built to be flexible and adaptable to any project or workflow."
  },
  {
    icon: <Zap size={24} />,
    title: "Instant Access",
    description: "Download your assets immediately after purchase. No waiting."
  },
  {
    icon: <Shield size={24} />,
    title: "Premium Quality",
    description: "Every asset is meticulously vetted for the highest standards."
  },
  {
    icon: <Sparkles size={24} />,
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
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Assets</h2>
              <p className="text-neutral-500 max-w-md">Selected high-end products to boost your creative workflow today.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex gap-2">
              View All <ArrowRight size={18} />
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

          <div className="mt-12 flex justify-center md:hidden">
            <Button variant="outline" className="w-full gap-2">
              View All Products <ArrowRight size={18} />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Categories Section */}
      <Section className="bg-neutral-50/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Browse by Category</h2>
            <p className="text-neutral-500 mx-auto max-w-md">Find the perfect asset for your specific creative needs.</p>
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
                <Link href={`/products?category=${cat}`} className="block p-6 bg-white rounded-2xl border border-neutral-100 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="w-10 h-10 bg-neutral-50 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <Zap size={18} />
                  </div>
                  <span className="text-sm font-bold">{cat}</span>
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
            className="bg-black rounded-[2rem] p-8 md:p-16 text-center text-white overflow-hidden relative"
          >
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 relative z-10">
              Ready to elevate <br className="hidden md:block" /> your craft?
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
              Join thousands of creators using Memoria assets to build better products, faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-neutral-100">
                Get Started Now
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
