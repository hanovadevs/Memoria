"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Container } from "../ui/LayoutUtils";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-neutral-50 to-transparent opacity-50 blur-3xl -z-10" />
      
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold tracking-wide uppercase mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            Curated Premium Digital Goods
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
          >
            Elevate your <br />
            <span className="text-neutral-400">digital craft.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-500 max-w-2xl mb-12 leading-relaxed"
          >
            Memoria is a boutique storefront for high-end digital assets. 
            Meticulously designed products that blend aesthetics with performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="gap-2">
              Explore Collection <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg">
              View Showcase
            </Button>
          </motion.div>
        </div>

        {/* Hero Image/Mockup Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 relative mx-auto max-w-5xl aspect-[16/9] bg-neutral-100 rounded-2xl border border-neutral-200 overflow-hidden premium-shadow"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-200 flex items-center justify-center text-neutral-400 font-medium">
             [ Premium Product Showcase Animation ]
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
