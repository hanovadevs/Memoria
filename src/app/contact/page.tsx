"use client";

import { Container, Section } from "@/components/ui/LayoutUtils";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Mail, MessageSquare, X, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Section className="pb-10 pt-32">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Left Side: Info */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl font-bold tracking-tight mb-8"
                >
                  Get in touch.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-neutral-500 leading-relaxed mb-12"
                >
                  Have a question about our products, licenses, or custom work? 
                  We're here to help. Reach out and we'll get back to you within 24 hours.
                </motion.p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-black">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-1">Email</p>
                      <p className="text-lg font-medium">support@memoria.studio</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-black">
                      <X size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-1">X (Twitter)</p>
                      <p className="text-lg font-medium">@memoria_studio</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-black">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-1">Location</p>
                      <p className="text-lg font-medium">London, United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-neutral-100 premium-shadow"
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-neutral-900 ml-1">Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:outline-none focus:ring-2 focus:ring-black/5 focus:bg-white focus:border-black transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-neutral-900 ml-1">Email</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:outline-none focus:ring-2 focus:ring-black/5 focus:bg-white focus:border-black transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-900 ml-1">Subject</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:outline-none focus:ring-2 focus:ring-black/5 focus:bg-white focus:border-black transition-all appearance-none">
                      <option>General Inquiry</option>
                      <option>Product Support</option>
                      <option>Licensing Question</option>
                      <option>Custom Work</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-900 ml-1">Message</label>
                    <textarea 
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-6 py-4 rounded-2xl bg-neutral-50 border border-neutral-100 focus:outline-none focus:ring-2 focus:ring-black/5 focus:bg-white focus:border-black transition-all resize-none"
                    ></textarea>
                  </div>
                  <Button size="lg" className="w-full py-5 rounded-2xl">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
