"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    // CMS-ready: replace with Mailchimp/Klaviyo/Resend API integration
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-mmtw-black px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(243,112,33,0.1)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-xs uppercase tracking-ultra text-mmtw-accent"
        >
          Stay Connected
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-display text-5xl uppercase leading-none tracking-wide text-mmtw-light md:text-7xl"
        >
          Join The Movement
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-md font-sans text-sm leading-relaxed text-mmtw-muted md:text-base"
        >
          Be first to know about new drops, exclusive releases, and behind-the-scenes
          content. No spam — just purpose.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("idle");
            }}
            placeholder="Enter your email"
            className="flex-1 border border-white/10 bg-mmtw-dark px-4 py-3 font-sans text-sm text-mmtw-light placeholder:text-mmtw-muted focus:border-mmtw-accent focus:outline-none"
          />
          <Button type="submit" size="md" className="sm:flex-shrink-0">
            Subscribe
          </Button>
        </motion.form>

        {status === "success" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 font-sans text-sm text-mmtw-accent"
          >
            Welcome to the movement. Check your inbox.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 font-sans text-sm text-red-400"
          >
            Please enter a valid email address.
          </motion.p>
        )}
      </div>
    </section>
  );
}
