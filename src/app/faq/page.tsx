"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { faqItems } from "@/data/products";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-mmtw-black pt-24 md:pt-28">
      <div className="mx-auto max-w-3xl px-6 py-12 md:px-10 md:py-20 lg:px-16">
        <FadeIn>
          <span className="font-sans text-xs uppercase tracking-ultra text-mmtw-accent">
            FAQ
          </span>
          <h1 className="mt-4 font-display text-5xl uppercase leading-none tracking-wide text-mmtw-light md:text-7xl">
            Questions
          </h1>
          <p className="mt-6 font-sans text-sm text-mmtw-muted">
            Everything you need to know about MMTW. orders, sizing, and returns.
          </p>
        </FadeIn>

        <div className="mt-12 divide-y divide-white/5">
          {faqItems.map((item, index) => (
            <FadeIn key={item.question} delay={index * 0.05}>
              <div className="py-6">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="pr-8 font-sans text-sm text-mmtw-light md:text-base">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    className="flex-shrink-0 font-sans text-xl text-mmtw-accent"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 font-sans text-sm leading-relaxed text-mmtw-muted">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
