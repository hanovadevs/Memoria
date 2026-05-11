"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Container } from "../ui/LayoutUtils";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="/hero_background_abstract_1778504664019.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white" />
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.05] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />
      
      {/* Animated Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-black/5 blur-[100px] rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neutral-200/50 blur-[120px] rounded-full animate-pulse -z-10" />
      
      <Container>
        <div className="flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 backdrop-blur-md border border-black/5 text-[9px] font-bold tracking-[0.2em] uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            Curated Premium Digital Goods
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.95] text-black"
          >
            Elevate your <br />
            <span className="text-neutral-400 italic serif">digital craft.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-neutral-500 max-w-xl mb-10 leading-relaxed font-medium"
          >
            Memoria is a boutique storefront for high-end digital assets. 
            Meticulously designed products that blend aesthetics with performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button size="lg" className="px-8 py-6 rounded-xl text-sm gap-2">
              Explore Collection <ArrowRight size={16} />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 rounded-xl text-sm bg-white/50 backdrop-blur-md">
              View Showcase
            </Button>
          </motion.div>
        </div>

        {/* Hero Showcase Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-6xl aspect-[16/9] rounded-[2.5rem] border border-neutral-100 overflow-hidden premium-shadow group"
        >
          <img 
            src="/hero_showcase_mockup_1778504682422.png" 
            alt="Showcase" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          
          {/* Glassmorphic floating element */}
          <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-auto md:w-80 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl text-white shadow-2xl">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-70">Latest Release</p>
            <h4 className="text-xl font-bold mb-1">Minimal UI Kit v2.0</h4>
            <p className="text-sm opacity-80 leading-relaxed">The ultimate design system for high-end SaaS platforms.</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
