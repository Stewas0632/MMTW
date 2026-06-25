"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <div className="min-h-screen bg-mmtw-black pt-24 md:pt-28">
      <div className="mx-auto max-w-4xl px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <h1 className="font-display text-5xl uppercase tracking-wide text-mmtw-light md:text-6xl">
          Your Cart
        </h1>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 text-center"
          >
            <p className="font-sans text-sm text-mmtw-muted">
              Your cart is empty.
            </p>
            <Link href="/shop" className="mt-6 inline-block">
              <Button>Continue Shopping</Button>
            </Link>
          </motion.div>
        ) : (
          <div className="mt-12">
            <ul className="divide-y divide-white/5">
              {items.map((item) => (
                <li
                  key={`${item.product.id}-${item.size}-${item.color}`}
                  className="flex gap-6 py-8"
                >
                  <div className="relative h-32 w-24 flex-shrink-0 overflow-hidden bg-mmtw-gray">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col sm:flex-row sm:justify-between">
                    <div>
                      <Link
                        href={`/product/${item.product.slug}`}
                        className="font-sans text-sm text-mmtw-light hover:text-mmtw-accent"
                      >
                        {item.product.name}
                      </Link>
                      <p className="mt-1 font-sans text-xs text-mmtw-muted">
                        {item.size} / {item.color}
                      </p>
                      <p className="mt-2 font-sans text-sm text-mmtw-light">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-4 sm:mt-0">
                      <div className="flex items-center gap-3 border border-white/10 px-3 py-1">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.color,
                              item.quantity - 1
                            )
                          }
                          className="text-mmtw-muted hover:text-mmtw-light"
                        >
                          −
                        </button>
                        <span className="font-sans text-xs">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.color,
                              item.quantity + 1
                            )
                          }
                          className="text-mmtw-muted hover:text-mmtw-light"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() =>
                          removeItem(
                            item.product.id,
                            item.size,
                            item.color
                          )
                        }
                        className="font-sans text-[10px] uppercase tracking-widest text-mmtw-muted hover:text-mmtw-accent"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/5 pt-8">
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs uppercase tracking-widest text-mmtw-muted">
                  Subtotal
                </span>
                <span className="font-sans text-2xl text-mmtw-light">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-2 font-sans text-xs text-mmtw-muted">
                Shipping and taxes calculated at checkout.
              </p>
              <Link href="/checkout" className="mt-8 block">
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
