"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { campaignContent, campaignImages } from "@/data/campaign";

export default function CampaignPageClient() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const heroImage = campaignImages.find((img) => img.featured) ?? campaignImages[0];

  return (
    <div className="min-h-screen bg-mmtw-black pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <FadeIn>
          <span className="font-sans text-xs uppercase tracking-ultra text-mmtw-flame">
            Advertisement
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-none tracking-wide text-mmtw-light md:text-8xl">
            {campaignContent.headline}
          </h1>
          <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed text-mmtw-muted md:text-base">
            {campaignContent.subheadline}
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-12">
          <div className="relative aspect-[16/9] overflow-hidden md:aspect-[21/9]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mmtw-black via-mmtw-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
              <p className="font-sans text-[10px] uppercase tracking-ultra text-mmtw-flame">
                Featured
              </p>
              <p className="mt-2 font-display text-3xl uppercase text-mmtw-light md:text-5xl">
                {heroImage.title}
              </p>
              <p className="mt-2 max-w-sm font-sans text-sm text-mmtw-muted">
                {heroImage.tagline}
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Gallery grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[280px] md:gap-4 lg:grid-cols-3">
          {campaignImages.map((image, index) => (
            <FadeIn key={image.src} delay={index * 0.06}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative h-full w-full overflow-hidden bg-mmtw-gray ${image.span ?? "col-span-1 row-span-1"}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-mmtw-black/0 transition-colors duration-500 group-hover:bg-mmtw-black/40" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-mmtw-black/90 to-transparent p-5 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="font-display text-xl uppercase text-mmtw-light">
                    {image.title}
                  </p>
                  <p className="mt-1 font-sans text-xs text-mmtw-muted">
                    {image.tagline}
                  </p>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-mmtw-dark py-20">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <FadeIn>
            <h2 className="font-display text-4xl uppercase tracking-wide text-mmtw-light md:text-6xl">
              Ready To Move?
            </h2>
            <p className="mt-4 font-sans text-sm text-mmtw-muted">
              Explore the full collection and find your next piece.
            </p>
            <Link href={campaignContent.ctaLink} className="mt-8 inline-block">
              <Button variant="flame" size="lg">
                {campaignContent.ctaText}
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-mmtw-black/95 p-4 md:p-8"
            onClick={() => setActiveIndex(null)}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-6 top-6 z-10 font-sans text-xs uppercase tracking-widest text-mmtw-light"
            >
              Close
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(
                  (activeIndex - 1 + campaignImages.length) % campaignImages.length
                );
              }}
              className="absolute left-2 z-10 p-4 font-display text-3xl text-mmtw-light md:left-8"
            >
              ‹
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-h-[85vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden md:aspect-[4/5]">
                <Image
                  src={campaignImages[activeIndex].src}
                  alt={campaignImages[activeIndex].alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-display text-2xl uppercase text-mmtw-light">
                  {campaignImages[activeIndex].title}
                </p>
                <p className="mt-1 font-sans text-sm text-mmtw-muted">
                  {campaignImages[activeIndex].tagline}
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((activeIndex + 1) % campaignImages.length);
              }}
              className="absolute right-2 z-10 p-4 font-display text-3xl text-mmtw-light md:right-8"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
