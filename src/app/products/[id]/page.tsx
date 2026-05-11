"use client";

import React, { use } from "react";
import { Container, Section } from "@/components/ui/LayoutUtils";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Check, Star, Download, ShieldCheck, Globe, CreditCard, ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { products } from "@/data/products";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailsPage({ params }: PageProps) {
  const { id } = use(params);
  const { addItem, openCart } = useCartStore();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    openCart();
  };

  return (
    <div className="min-h-screen">
      <Section className="pb-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Gallery Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-[4/3] bg-neutral-100 rounded-[2.5rem] overflow-hidden border border-neutral-100 flex items-center justify-center text-neutral-400 font-bold premium-shadow"
              >
                {product.image ? (
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 bg-neutral-200 rounded-full flex items-center justify-center animate-pulse" />
                    <span className="text-xs uppercase tracking-[0.2em] opacity-50">Preview Generation</span>
                  </div>
                )}
              </motion.div>
              <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="aspect-square bg-neutral-50 rounded-2xl border border-neutral-100 flex items-center justify-center text-neutral-300 text-[10px] font-bold uppercase tracking-widest"
                  >
                    View {i}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-6">
                   <span className="px-3 py-1 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-wider">New Release</span>
                   <span className="text-neutral-400 text-xs font-bold uppercase tracking-widest">{product.category}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 leading-tight">{product.title}</h1>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex text-black">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} fill="currentColor" />)}
                  </div>
                  <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">4.9/5 from 82 Creators</span>
                </div>
                <p className="text-sm md:text-base text-neutral-500 leading-relaxed mb-8 font-medium">
                  {product.description}
                </p>
                <div className="flex items-baseline gap-3 mb-10">
                  <span className="text-3xl font-bold tracking-tighter">{formatPrice(product.price)}</span>
                  <span className="text-neutral-300 line-through text-lg font-medium">{formatPrice(product.price * 1.5)}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-12">
                  <Button size="lg" className="flex-[2] py-6 rounded-xl gap-2 text-sm" onClick={handleAddToCart}>
                    <ShoppingCart size={18} /> Add to Cart
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 py-6 rounded-xl text-sm">
                    Free Trial
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm font-bold text-neutral-600">
                      <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-black">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Trust badges */}
              <div className="pt-12 mt-12 border-t border-neutral-100 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-neutral-100">
                    <ShieldCheck className="text-black" size={20} />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Secure Assets</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-neutral-100">
                    <Globe className="text-black" size={20} />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Global Use</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-neutral-100">
                    <CreditCard className="text-black" size={20} />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Instant File</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section className="bg-neutral-50/50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {product.faqs.map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-neutral-100 premium-shadow">
                  <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                  <p className="text-neutral-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
