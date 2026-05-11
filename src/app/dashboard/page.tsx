"use client";

import { Container, Section } from "@/components/ui/LayoutUtils";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Download, Package, Settings, User, LogOut, ChevronRight } from "lucide-react";
import Link from "next/link";

const purchasedProducts = [
  { id: "1", title: "Minimal UI Kit", date: "May 10, 2026", version: "v2.4", size: "142 MB" },
  { id: "2", title: "Creator OS", date: "April 22, 2026", version: "v1.1", size: "12 MB" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-neutral-50/50">
      <Section className="pb-10 pt-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-2">
              <div className="p-6 bg-white rounded-3xl border border-neutral-100 mb-8 premium-shadow">
                <div className="w-16 h-16 rounded-2xl bg-neutral-100 mb-4 flex items-center justify-center">
                  <User size={32} className="text-neutral-400" />
                </div>
                <h3 className="font-bold text-lg">Alex Rivera</h3>
                <p className="text-sm text-neutral-500">alex@example.com</p>
              </div>

              <nav className="space-y-1">
                {[
                  { name: "My Products", icon: <Package size={18} />, active: true },
                  { name: "Profile Settings", icon: <Settings size={18} /> },
                  { name: "Order History", icon: <ChevronRight size={18} /> },
                ].map((item) => (
                  <button
                    key={item.name}
                    className={cn(
                      "w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-bold transition-all",
                      item.active ? "bg-black text-white" : "text-neutral-500 hover:bg-neutral-100"
                    )}
                  >
                    {item.icon}
                    {item.name}
                  </button>
                ))}
                <button className="w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all mt-8">
                  <LogOut size={18} />
                  Sign Out
                </button>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="mb-10">
                <h1 className="text-3xl font-bold mb-2">My Library</h1>
                <p className="text-neutral-500">Access and download your purchased digital assets.</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {purchasedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 bg-white rounded-[2rem] border border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-8 premium-shadow"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-300 font-bold">
                        IMG
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{product.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-neutral-400">
                           <span className="flex items-center gap-1"><Package size={14} /> {product.version}</span>
                           <span className="w-1 h-1 rounded-full bg-neutral-200" />
                           <span>Purchased on {product.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 w-full md:w-auto">
                      <div className="text-right hidden md:block mr-4">
                        <p className="text-sm font-bold">{product.size}</p>
                        <p className="text-xs text-neutral-400">ZIP File</p>
                      </div>
                      <Button className="flex-1 md:flex-none gap-2">
                        <Download size={18} /> Download
                      </Button>
                      <Button variant="outline" className="flex-1 md:flex-none">
                        View License
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Account Security Placeholder */}
              <div className="mt-12 p-8 bg-neutral-900 rounded-[2rem] text-white overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
                 <h3 className="text-xl font-bold mb-4 relative z-10">Account Security</h3>
                 <p className="text-neutral-400 mb-8 relative z-10">Keep your account safe by enabling two-factor authentication.</p>
                 <Button variant="secondary" className="bg-white text-black hover:bg-neutral-100 relative z-10">
                   Enable 2FA
                 </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

import { cn } from "@/lib/utils";
