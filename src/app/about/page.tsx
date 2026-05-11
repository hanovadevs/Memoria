"use client";

import { Container, Section } from "@/components/ui/LayoutUtils";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Section className="pb-10 pt-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Excellence in <br />
              <span className="text-neutral-400">every detail.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base text-neutral-500 leading-relaxed"
            >
              Memoria was born out of a simple frustration: the digital world is cluttered with mediocre assets. 
              We believe that creators deserve better. We believe in the power of minimalism, 
              precision, and timeless design.
            </motion.p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] bg-neutral-100 rounded-[2.5rem] overflow-hidden flex items-center justify-center text-neutral-300 font-bold">
              [ Brand Story Image ]
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Philosophy</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">Quality over Quantity</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    We don't release 100 products a year. We release a handful of meticulously crafted 
                    assets that we know will make a real difference in your workflow.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Timeless Aesthetics</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Trends fade, but good design is eternal. Our assets are designed to look as good 
                    five years from now as they do today.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Creator-Centric</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    We are creators ourselves. We build the tools we wish we had, with the 
                    features and flexibility we know you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-neutral-900 text-white py-20 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
         <Container>
           <div className="text-center max-w-xl mx-auto">
             <h2 className="text-2xl font-bold mb-6">Join the inner circle.</h2>
             <p className="text-neutral-400 text-sm mb-10">
               Stay updated with our latest releases, design tips, and exclusive offers. 
               No spam, just pure value.
             </p>
             <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
               <input 
                 type="email" 
                 placeholder="Email address" 
                 className="flex-grow px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
               />
               <button className="px-6 py-3 bg-white text-black rounded-full text-sm font-bold hover:bg-neutral-100 transition-colors">
                 Subscribe
               </button>
             </form>
           </div>
         </Container>
      </Section>
    </div>
  );
}
