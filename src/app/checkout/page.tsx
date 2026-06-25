"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<"info" | "payment" | "complete">("info");

  const shipping = subtotal >= 150 ? 0 : 12;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (step === "info") {
      setStep("payment");
    } else if (step === "payment") {
      // Stripe-ready: replace with Stripe Checkout Session or Payment Element
      clearCart();
      setStep("complete");
    }
  };

  if (items.length === 0 && step !== "complete") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-mmtw-black px-6">
        <p className="font-sans text-sm text-mmtw-muted">
          Your cart is empty.
        </p>
        <Link href="/shop" className="mt-6">
          <Button>Shop Now</Button>
        </Link>
      </div>
    );
  }

  if (step === "complete") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-mmtw-black px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="font-display text-5xl uppercase text-mmtw-light">
            Order Confirmed
          </p>
          <p className="mt-4 font-sans text-sm text-mmtw-muted">
            Thank you for your purchase. You&apos;ll receive a confirmation
            email shortly.
          </p>
          <Link href="/shop" className="mt-8 inline-block">
            <Button>Continue Shopping</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mmtw-black pt-24 md:pt-28">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 lg:px-16">
        <h1 className="font-display text-5xl uppercase tracking-wide text-mmtw-light">
          Checkout
        </h1>

        <div className="mt-4 flex gap-4">
          {(["info", "payment"] as const).map((s, i) => (
            <span
              key={s}
              className={`font-sans text-xs uppercase tracking-widest ${
                step === s || (step === "payment" && s === "info")
                  ? "text-mmtw-accent"
                  : "text-mmtw-muted"
              }`}
            >
              {i + 1}. {s === "info" ? "Information" : "Payment"}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            {step === "info" ? (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-sans text-xs uppercase tracking-widest text-mmtw-muted">
                      First Name
                    </label>
                    <input
                      required
                      className="w-full border border-white/10 bg-mmtw-dark px-4 py-3 font-sans text-sm text-mmtw-light focus:border-mmtw-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-sans text-xs uppercase tracking-widest text-mmtw-muted">
                      Last Name
                    </label>
                    <input
                      required
                      className="w-full border border-white/10 bg-mmtw-dark px-4 py-3 font-sans text-sm text-mmtw-light focus:border-mmtw-accent focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block font-sans text-xs uppercase tracking-widest text-mmtw-muted">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full border border-white/10 bg-mmtw-dark px-4 py-3 font-sans text-sm text-mmtw-light focus:border-mmtw-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-sans text-xs uppercase tracking-widest text-mmtw-muted">
                    Address
                  </label>
                  <input
                    required
                    className="w-full border border-white/10 bg-mmtw-dark px-4 py-3 font-sans text-sm text-mmtw-light focus:border-mmtw-accent focus:outline-none"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label className="mb-2 block font-sans text-xs uppercase tracking-widest text-mmtw-muted">
                      City
                    </label>
                    <input
                      required
                      className="w-full border border-white/10 bg-mmtw-dark px-4 py-3 font-sans text-sm text-mmtw-light focus:border-mmtw-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-sans text-xs uppercase tracking-widest text-mmtw-muted">
                      State
                    </label>
                    <input
                      required
                      className="w-full border border-white/10 bg-mmtw-dark px-4 py-3 font-sans text-sm text-mmtw-light focus:border-mmtw-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-sans text-xs uppercase tracking-widest text-mmtw-muted">
                      ZIP
                    </label>
                    <input
                      required
                      className="w-full border border-white/10 bg-mmtw-dark px-4 py-3 font-sans text-sm text-mmtw-light focus:border-mmtw-accent focus:outline-none"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-6">
                <p className="font-sans text-sm text-mmtw-muted">
                  Stripe Payment Element integration point. Connect your Stripe
                  publishable key and create a Checkout Session or mount the
                  Payment Element here.
                </p>
                <div className="border border-dashed border-white/10 p-8 text-center">
                  <p className="font-sans text-xs uppercase tracking-widest text-mmtw-muted">
                    Stripe Payment Element
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="h-10 bg-mmtw-gray" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-10 bg-mmtw-gray" />
                      <div className="h-10 bg-mmtw-gray" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <Button type="submit" className="w-full" size="lg">
              {step === "info" ? "Continue to Payment" : "Place Order"}
            </Button>
          </form>

          <div className="lg:col-span-2">
            <div className="border border-white/5 p-6">
              <h2 className="font-sans text-xs uppercase tracking-widest text-mmtw-muted">
                Order Summary
              </h2>
              <ul className="mt-6 space-y-4">
                {items.map((item) => (
                  <li
                    key={`${item.product.id}-${item.size}-${item.color}`}
                    className="flex gap-3"
                  >
                    <div className="relative h-16 w-12 flex-shrink-0 overflow-hidden bg-mmtw-gray">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-sans text-xs text-mmtw-light">
                        {item.product.name}
                      </p>
                      <p className="font-sans text-[10px] text-mmtw-muted">
                        {item.size} / {item.color} × {item.quantity}
                      </p>
                    </div>
                    <p className="font-sans text-xs text-mmtw-light">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-2 border-t border-white/5 pt-6">
                <div className="flex justify-between font-sans text-sm">
                  <span className="text-mmtw-muted">Subtotal</span>
                  <span className="text-mmtw-light">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between font-sans text-sm">
                  <span className="text-mmtw-muted">Shipping</span>
                  <span className="text-mmtw-light">
                    {shipping === 0 ? "Free" : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between font-sans text-sm">
                  <span className="text-mmtw-muted">Tax</span>
                  <span className="text-mmtw-light">{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between border-t border-white/5 pt-4 font-sans text-lg">
                  <span className="text-mmtw-muted">Total</span>
                  <span className="text-mmtw-light">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
