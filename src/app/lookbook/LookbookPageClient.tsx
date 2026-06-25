"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

const lookbookImages = [
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80&auto=format&fit=crop",
    title: "Urban Architect",
    season: "SS26",
  },
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80&auto=format&fit=crop",
    title: "Night Shift",
    season: "SS26",
  },
  {
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80&auto=format&fit=crop",
    title: "Concrete Dreams",
    season: "SS26",
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80&auto=format&fit=crop",
    title: "The Grind",
    season: "SS26",
  },
  {
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80&auto=format&fit=crop",
    title: "Silent Power",
    season: "SS26",
  },
  {
    src: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1200&q=80&auto=format&fit=crop",
    title: "After Hours",
    season: "SS26",
  },
];

export default function LookbookPageClient() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="min-h-screen bg-mmtw-black pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <FadeIn>
          <span className="font-sans text-xs uppercase tracking-ultra text-mmtw-accent">
            Lookbook
          </span>
          <h1 className="mt-4 font-display text-5xl uppercase leading-none tracking-wide text-mmtw-light md:text-7xl">
            SS26 Editorial
          </h1>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {lookbookImages.map((image, index) => (
            <FadeIn key={image.src} delay={index * 0.05}>
              <button
                onClick={() => {
                  setActiveIndex(index);
                  setLightboxOpen(true);
                }}
                className="group relative aspect-[3/4] w-full overflow-hidden bg-mmtw-gray"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mmtw-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-sans text-[10px] uppercase tracking-widest text-mmtw-accent">
                    {image.season}
                  </p>
                  <p className="font-display text-2xl uppercase text-mmtw-light">
                    {image.title}
                  </p>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-mmtw-black/95"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-6 top-6 z-10 font-sans text-xs uppercase tracking-widest text-mmtw-light"
            >
              Close
            </button>

            <button
              onClick={() =>
                setActiveIndex(
                  (activeIndex - 1 + lookbookImages.length) %
                    lookbookImages.length
                )
              }
              className="absolute left-4 z-10 p-4 font-display text-3xl text-mmtw-light md:left-8"
            >
              ‹
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative mx-16 aspect-[3/4] w-full max-w-2xl"
            >
              <Image
                src={lookbookImages[activeIndex].src}
                alt={lookbookImages[activeIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-12 left-0">
                <p className="font-display text-2xl uppercase text-mmtw-light">
                  {lookbookImages[activeIndex].title}
                </p>
              </div>
            </motion.div>

            <button
              onClick={() =>
                setActiveIndex((activeIndex + 1) % lookbookImages.length)
              }
              className="absolute right-4 z-10 p-4 font-display text-3xl text-mmtw-light md:right-8"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
