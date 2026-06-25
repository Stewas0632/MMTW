"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-mmtw-black pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-20 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-2">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-ultra text-mmtw-accent">
              Contact
            </span>
            <h1 className="mt-4 font-display text-5xl uppercase leading-none tracking-wide text-mmtw-light md:text-7xl">
              Get In Touch
            </h1>
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-mmtw-muted md:text-base">
              Questions about orders, collaborations, or wholesale? We&apos;d
              love to hear from you. Our team typically responds within 24–48
              hours.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-mmtw-muted">
                  Email
                </p>
                <p className="mt-1 font-sans text-sm text-mmtw-light">
                  hello@mmtw.co
                </p>
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-mmtw-muted">
                  Press & Collaborations
                </p>
                <p className="mt-1 font-sans text-sm text-mmtw-light">
                  press@mmtw.co
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex h-full items-center justify-center border border-white/5 p-12"
              >
                <div className="text-center">
                  <p className="font-display text-3xl uppercase text-mmtw-light">
                    Message Sent
                  </p>
                  <p className="mt-3 font-sans text-sm text-mmtw-muted">
                    We&apos;ll get back to you soon.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 block font-sans text-xs uppercase tracking-widest text-mmtw-muted">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full border border-white/10 bg-mmtw-dark px-4 py-3 font-sans text-sm text-mmtw-light focus:border-mmtw-accent focus:outline-none"
                  />
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
                    Subject
                  </label>
                  <select className="w-full border border-white/10 bg-mmtw-dark px-4 py-3 font-sans text-sm text-mmtw-light focus:border-mmtw-accent focus:outline-none">
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Collaboration</option>
                    <option>Wholesale</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block font-sans text-xs uppercase tracking-widest text-mmtw-muted">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full resize-none border border-white/10 bg-mmtw-dark px-4 py-3 font-sans text-sm text-mmtw-light focus:border-mmtw-accent focus:outline-none"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
