"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export function CartOverlay() {
  const { 
    items, 
    isCartOpen, 
    closeCart, 
    updateQuantity, 
    removeItem, 
    totalPrice,
    totalItems 
  } = useCartStore();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag size={22} />
                <h2 className="text-xl font-bold">Your Cart</h2>
                <span className="bg-neutral-100 text-neutral-600 text-xs font-bold px-2.5 py-1 rounded-full">
                  {totalItems()}
                </span>
              </div>
              <button 
                onClick={closeCart}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag size={32} className="text-neutral-300" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Cart is empty</h3>
                  <p className="text-neutral-500 mb-8 max-w-[200px]">
                    Looks like you haven't added any premium products yet.
                  </p>
                  <Button onClick={closeCart} variant="outline" className="rounded-full">
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-neutral-100 rounded-2xl overflow-hidden flex-shrink-0">
                      {item.image ? (
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-neutral-300 text-xs">
                          No Image
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h4 className="font-bold text-sm leading-tight">{item.title}</h4>
                        <p className="font-bold text-sm">${item.price}</p>
                      </div>
                      <p className="text-xs text-neutral-400 mb-3">{item.category}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-neutral-100 rounded-full p-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-neutral-50 rounded-full transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-neutral-50 rounded-full transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-neutral-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-neutral-100 bg-neutral-50/50">
                <div className="flex justify-between mb-2">
                  <p className="text-neutral-500">Subtotal</p>
                  <p className="font-bold">${totalPrice()}</p>
                </div>
                <div className="flex justify-between mb-6">
                  <p className="text-neutral-500">Taxes & Shipping</p>
                  <p className="text-xs text-neutral-400 mt-1">Calculated at checkout</p>
                </div>
                <Button className="w-full py-6 rounded-2xl gap-2 group">
                  Checkout Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-[10px] text-center text-neutral-400 mt-4 uppercase tracking-widest font-bold">
                  Secure Encrypted Checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
