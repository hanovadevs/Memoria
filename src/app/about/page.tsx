"use client";

import { Container, Section } from "@/components/ui/LayoutUtils";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Section className="pb-10 pt-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
            >
              Excellence in <br />
              <span className="text-neutral-400">every detail.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-neutral-500 leading-relaxed"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="aspect-[4/5] bg-neutral-100 rounded-[3rem] overflow-hidden flex items-center justify-center text-neutral-300 font-bold">
              [ Brand Story Image ]
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Philosophy</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Quality over Quantity</h3>
                  <p className="text-neutral-500 leading-relaxed">
                    We don't release 100 products a year. We release a handful of meticulously crafted 
                    assets that we know will make a real difference in your workflow.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Timeless Aesthetics</h3>
                  <p className="text-neutral-500 leading-relaxed">
                    Trends fade, but good design is eternal. Our assets are designed to look as good 
                    five years from now as they do today.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Creator-Centric</h3>
                  <p className="text-neutral-500 leading-relaxed">
                    We are creators ourselves. We build the tools we wish we had, with the 
                    features and flexibility we know you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-neutral-900 text-white py-32 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
         <Container>
           <div className="text-center max-w-2xl mx-auto">
             <h2 className="text-4xl font-bold mb-8">Join the inner circle.</h2>
             <p className="text-neutral-400 mb-12">
               Stay updated with our latest releases, design tips, and exclusive offers. 
               No spam, just pure value.
             </p>
             <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
               <input 
                 type="email" 
                 placeholder="Email address" 
                 className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
               />
               <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-100 transition-colors">
                 Subscribe
               </button>
             </form>
           </div>
         </Container>
      </Section>
    </div>
  );
}
