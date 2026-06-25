"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";

export default function CheckoutSuccessClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { clearCart } = useCart();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  useEffect(() => {
    if (!sessionId) return;

    fetch(`/api/checkout/session?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.customerEmail) setEmail(data.customerEmail);
      })
      .catch(() => {});
  }, [sessionId]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-mmtw-black px-6 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md text-center"
      >
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-mmtw-flame/30 bg-mmtw-flame/10">
          <span className="font-display text-2xl text-mmtw-flame">✓</span>
        </div>

        <p className="font-display text-5xl uppercase text-mmtw-light">
          Order Confirmed
        </p>
        <p className="mt-4 font-sans text-sm leading-relaxed text-mmtw-muted">
          Thank you for your purchase.
          {email && (
            <>
              {" "}
              A confirmation will be sent to{" "}
              <span className="text-mmtw-light">{email}</span>.
            </>
          )}
        </p>

        <Link href="/shop" className="mt-8 inline-block">
          <Button variant="flame" size="lg">
            Continue Shopping
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
