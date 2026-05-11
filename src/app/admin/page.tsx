"use client";

import { Container, Section } from "@/components/ui/LayoutUtils";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Users, BarChart3, Package, DollarSign, ExternalLink } from "lucide-react";
import { formatPrice } from "@/lib/utils";

const stats = [
  { label: "Total Revenue", value: "$42,850", icon: <DollarSign className="text-green-500" />, change: "+12.5%" },
  { label: "Total Products", value: "24", icon: <Package className="text-blue-500" />, change: "+2 this month" },
  { label: "Active Customers", value: "1,240", icon: <Users className="text-purple-500" />, change: "+84 this week" },
  { label: "Conversion Rate", value: "3.2%", icon: <BarChart3 className="text-orange-500" />, change: "-0.4%" },
];

const recentProducts = [
  { id: "1", title: "Minimal UI Kit", category: "Design", price: 49, sales: 142 },
  { id: "2", title: "Creator OS", category: "Notion Template", price: 29, sales: 84 },
  { id: "3", title: "Brand Identity Pack", category: "Assets", price: 79, sales: 36 },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-neutral-50/50">
      <Section className="pb-10 pt-32">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h1 className="text-3xl font-bold mb-2">Admin Panel</h1>
              <p className="text-neutral-500">Manage your products, orders, and business metrics.</p>
            </div>
            <Button className="gap-2 px-8 py-4">
              <Plus size={20} /> Add New Product
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-neutral-100 premium-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <span className={cn(
                    "text-xs font-bold px-2 py-1 rounded-lg",
                    stat.change.startsWith("+") ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                  )}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-sm font-medium text-neutral-400 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-neutral-900">{stat.value}</h3>
              </motion.div>
            ))}
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-[2.5rem] border border-neutral-100 overflow-hidden premium-shadow">
            <div className="p-8 border-b border-neutral-50 flex justify-between items-center">
              <h2 className="text-xl font-bold">Manage Products</h2>
              <Button variant="ghost" className="text-sm">View All</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-neutral-50/50">
                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-neutral-400">Product</th>
                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-neutral-400">Category</th>
                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-neutral-400">Price</th>
                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-neutral-400">Sales</th>
                    <th className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-neutral-400 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-50">
                  {recentProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-neutral-50/30 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-neutral-100" />
                          <span className="font-bold">{product.title}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-neutral-500">{product.category}</td>
                      <td className="px-8 py-6 font-medium">{formatPrice(product.price)}</td>
                      <td className="px-8 py-6 font-medium">{product.sales}</td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors text-neutral-400 hover:text-black">
                            <Edit size={18} />
                          </button>
                          <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors text-neutral-400 hover:text-red-500">
                            <Trash2 size={18} />
                          </button>
                          <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors text-neutral-400 hover:text-blue-500">
                            <ExternalLink size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

import { cn } from "@/lib/utils";
