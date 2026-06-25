"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-mmtw-black/60 backdrop-blur-sm"
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[90] flex h-full w-full max-w-md flex-col bg-mmtw-dark"
          >
            <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
              <h2 className="font-display text-2xl uppercase tracking-wide text-mmtw-light">
                Cart
              </h2>
              <button
                onClick={closeCart}
                className="font-sans text-xs uppercase tracking-widest text-mmtw-muted transition-colors hover:text-mmtw-light"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4">
                  <p className="font-sans text-sm text-mmtw-muted">
                    Your cart is empty
                  </p>
                  <Link href="/shop" onClick={closeCart}>
                    <Button variant="secondary" size="sm">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              ) : (
                <ul className="flex flex-col gap-6">
                  {items.map((item) => (
                    <li
                      key={`${item.product.id}-${item.size}-${item.color}`}
                      className="flex gap-4"
                    >
                      <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-mmtw-gray">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <h3 className="font-sans text-sm text-mmtw-light">
                          {item.product.name}
                        </h3>
                        <p className="mt-1 font-sans text-xs text-mmtw-muted">
                          {item.size} / {item.color}
                        </p>
                        <p className="mt-1 font-sans text-sm text-mmtw-light">
                          {formatPrice(item.product.price)}
                        </p>
                        <div className="mt-auto flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.color,
                                item.quantity - 1
                              )
                            }
                            className="font-sans text-sm text-mmtw-muted hover:text-mmtw-light"
                          >
                            −
                          </button>
                          <span className="font-sans text-xs text-mmtw-light">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.color,
                                item.quantity + 1
                              )
                            }
                            className="font-sans text-sm text-mmtw-muted hover:text-mmtw-light"
                          >
                            +
                          </button>
                          <button
                            onClick={() =>
                              removeItem(
                                item.product.id,
                                item.size,
                                item.color
                              )
                            }
                            className="ml-auto font-sans text-[10px] uppercase tracking-widest text-mmtw-muted hover:text-mmtw-accent"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-white/5 px-6 py-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-sans text-xs uppercase tracking-widest text-mmtw-muted">
                    Subtotal
                  </span>
                  <span className="font-sans text-lg text-mmtw-light">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="mb-6 font-sans text-xs text-mmtw-muted">
                  Shipping and taxes calculated at checkout.
                </p>
                <Link href="/checkout" onClick={closeCart} className="block">
                  <Button className="w-full" variant="flame">
                    Checkout
                  </Button>
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
