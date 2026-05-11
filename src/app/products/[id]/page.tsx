"use client";

import React, { use } from "react";
import { Container, Section } from "@/components/ui/LayoutUtils";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Check, Star, Download, ShieldCheck, Globe, CreditCard } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailsPage({ params }: PageProps) {
  const { id } = use(params);

  // Mock data for a single product
  const product = {
    id,
    title: "Minimal UI Kit",
    category: "Design",
    price: 49,
    description: "The ultimate UI kit for modern web applications. Featuring over 200+ components, 50+ templates, and a comprehensive design system that follows best practices. Built for designers and developers who value speed and aesthetics.",
    features: [
      "200+ Premium Components",
      "Auto-layout & Variants",
      "Light & Dark Mode ready",
      "Free Lifetime Updates",
      "Documentation Included",
      "Commercial License"
    ],
    faqs: [
      { q: "What files are included?", a: "You will receive a Figma file (.fig) and a documentation PDF." },
      { q: "Can I use this for client projects?", a: "Yes, the commercial license allows use in unlimited personal and client projects." },
      { q: "How do I get updates?", a: "Updates are sent via email and can also be downloaded from your account dashboard." }
    ]
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
                className="aspect-[4/3] bg-neutral-100 rounded-3xl overflow-hidden border border-neutral-200 flex items-center justify-center text-neutral-400 font-bold"
              >
                [ Primary Product Showcase ]
              </motion.div>
              <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="aspect-square bg-neutral-50 rounded-2xl border border-neutral-100 flex items-center justify-center text-neutral-300 text-xs"
                  >
                    Preview {i}
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
                <div className="flex items-center gap-3 mb-4">
                   <span className="px-3 py-1 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-wider">New</span>
                   <span className="text-neutral-400 text-sm font-medium">{product.category}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{product.title}</h1>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                  </div>
                  <span className="text-sm text-neutral-500 font-medium">(48 Reviews)</span>
                </div>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  {product.description}
                </p>
                <div className="flex items-baseline gap-4 mb-10">
                  <span className="text-4xl font-bold">{formatPrice(product.price)}</span>
                  <span className="text-neutral-400 line-through">{formatPrice(product.price * 1.5)}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button size="lg" className="flex-1 gap-2">
                    <Download size={20} /> Purchase Now
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    Free Preview
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-neutral-600">
                      <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-black">
                        <Check size={12} />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Trust badges */}
              <div className="pt-10 border-t border-neutral-100 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <ShieldCheck className="mx-auto mb-2 text-neutral-400" size={24} />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Secure Payment</p>
                </div>
                <div className="text-center">
                  <Globe className="mx-auto mb-2 text-neutral-400" size={24} />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Global License</p>
                </div>
                <div className="text-center">
                  <CreditCard className="mx-auto mb-2 text-neutral-400" size={24} />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Instant Access</p>
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
