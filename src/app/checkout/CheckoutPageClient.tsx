"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { calculateOrderTotal } from "@/lib/checkout";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPageClient() {
  const searchParams = useSearchParams();
  const canceled = searchParams.get("canceled");
  const { items, subtotal } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { shipping, tax, total } = calculateOrderTotal(subtotal);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            slug: item.product.slug,
            quantity: item.quantity,
            size: item.size,
            color: item.color,
          })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Checkout failed");
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed");
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-mmtw-black px-6">
        <p className="font-sans text-sm text-mmtw-muted">Your cart is empty.</p>
        <Link href="/shop" className="mt-6">
          <Button variant="flame">Shop Now</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mmtw-black pt-24 md:pt-28">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 lg:px-16">
        <h1 className="font-display text-5xl uppercase tracking-wide text-mmtw-light">
          Checkout
        </h1>
        <p className="mt-3 font-sans text-sm text-mmtw-muted">
          Secure payment powered by Stripe
        </p>

        {canceled && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 border border-mmtw-flame/30 bg-mmtw-flame/5 px-4 py-3 font-sans text-sm text-mmtw-flame"
          >
            Payment was canceled. Your cart is still saved.
          </motion.p>
        )}

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-6">
            <div className="border border-white/5 p-6">
              <h2 className="font-sans text-xs uppercase tracking-widest text-mmtw-flame">
                Payment
              </h2>
              <p className="mt-4 font-sans text-sm leading-relaxed text-mmtw-muted">
                You&apos;ll be redirected to Stripe&apos;s secure checkout to
                enter your payment and shipping details. Use test card{" "}
                <span className="text-mmtw-light">4242 4242 4242 4242</span> in
                sandbox mode.
              </p>

              {error && (
                <p className="mt-4 font-sans text-sm text-red-400">{error}</p>
              )}

              <Button
                onClick={handleCheckout}
                disabled={loading}
                variant="flame"
                className="mt-6 w-full"
                size="lg"
              >
                {loading ? "Redirecting…" : "Pay with Stripe"}
              </Button>
            </div>

            <Link
              href="/cart"
              className="inline-block font-sans text-xs uppercase tracking-widest text-mmtw-muted transition-colors hover:text-mmtw-light"
            >
              ← Back to Cart
            </Link>
          </div>

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
