"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

const questionTopics = [
  "Product Information",
  "Order Status",
  "Sizing & Fit",
  "Returns & Exchanges",
  "Shipping",
  "Collaborations",
  "Other",
];

const inputClass =
  "w-full border border-white/10 bg-mmtw-dark px-4 py-3 font-sans text-sm text-mmtw-light focus:border-mmtw-flame focus:outline-none transition-colors";

export default function QuestionsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // CMS-ready: wire to Formspree, Resend, or your backend API
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-mmtw-black pt-24 md:pt-28">
      <div className="mx-auto max-w-3xl px-6 py-12 md:px-10 md:py-20 lg:px-16">
        <FadeIn>
          <span className="font-sans text-xs uppercase tracking-ultra text-mmtw-flame">
            Questions
          </span>
          <h1 className="mt-4 font-display text-5xl uppercase leading-none tracking-wide text-mmtw-light md:text-7xl">
            Ask Us Anything
          </h1>
          <p className="mt-6 max-w-lg font-sans text-sm leading-relaxed text-mmtw-muted md:text-base">
            Can&apos;t find what you&apos;re looking for? Send us your question
            and our team will get back to you within 24–48 hours.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-12">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-white/5 p-10 text-center md:p-14"
            >
              <p className="font-display text-3xl uppercase text-mmtw-light md:text-4xl">
                Question Received
              </p>
              <p className="mt-4 font-sans text-sm text-mmtw-muted">
                Thanks for reaching out. We&apos;ll respond to your email
                shortly.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/faq">
                  <Button variant="outline">Browse FAQ</Button>
                </Link>
                <Link href="/shop">
                  <Button variant="flame">Continue Shopping</Button>
                </Link>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-sans text-xs uppercase tracking-widest text-mmtw-muted"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-sans text-xs uppercase tracking-widest text-mmtw-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    className={inputClass}
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="mb-2 block font-sans text-xs uppercase tracking-widest text-mmtw-muted"
                >
                  Topic
                </label>
                <select
                  id="topic"
                  name="topic"
                  required
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  {questionTopics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="orderNumber"
                  className="mb-2 block font-sans text-xs uppercase tracking-widest text-mmtw-muted"
                >
                  Order Number{" "}
                  <span className="normal-case tracking-normal text-mmtw-muted/60">
                    (optional)
                  </span>
                </label>
                <input
                  id="orderNumber"
                  name="orderNumber"
                  type="text"
                  className={inputClass}
                  placeholder="MMTW-12345"
                />
              </div>

              <div>
                <label
                  htmlFor="question"
                  className="mb-2 block font-sans text-xs uppercase tracking-widest text-mmtw-muted"
                >
                  Your Question
                </label>
                <textarea
                  id="question"
                  name="question"
                  required
                  rows={6}
                  className={`${inputClass} resize-none`}
                  placeholder="What would you like to know?"
                />
              </div>

              <Button type="submit" variant="flame" className="w-full" size="lg">
                Submit Question
              </Button>

              <p className="text-center font-sans text-xs text-mmtw-muted">
                Looking for quick answers?{" "}
                <Link
                  href="/faq"
                  className="text-mmtw-flame transition-colors hover:text-mmtw-gold"
                >
                  Check our FAQ
                </Link>
              </p>
            </form>
          )}
        </FadeIn>
      </div>
    </div>
  );
}
