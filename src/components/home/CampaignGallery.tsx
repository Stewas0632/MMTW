"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { campaignContent, campaignImages } from "@/data/campaign";

export default function CampaignGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const heroImage = campaignImages.find((img) => img.featured) ?? campaignImages[0];

  return (
    <section className="bg-mmtw-dark px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Advertisement"
          title="Official Promo"
          subtitle={campaignContent.subheadline}
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-12 aspect-[16/9] overflow-hidden md:aspect-[21/9]"
        >
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mmtw-black via-mmtw-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <p className="font-sans text-[10px] uppercase tracking-ultra text-mmtw-flame">
              Featured
            </p>
            <p className="mt-2 font-display text-2xl uppercase text-mmtw-light md:text-4xl">
              {heroImage.title}
            </p>
            <p className="mt-2 max-w-sm font-sans text-sm text-mmtw-muted">
              {heroImage.tagline}
            </p>
          </div>
        </motion.div>

        <div className="mt-6 grid auto-rows-[200px] grid-cols-2 gap-3 md:mt-8 md:auto-rows-[260px] md:gap-4 lg:grid-cols-3">
          {campaignImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className={`group relative cursor-pointer overflow-hidden bg-mmtw-gray ${image.span ?? "col-span-1 row-span-1"}`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-mmtw-black/0 transition-colors duration-500 group-hover:bg-mmtw-black/30" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-mmtw-black/90 to-transparent p-4 transition-transform duration-500 group-hover:translate-y-0 md:p-5">
                <p className="font-display text-lg uppercase text-mmtw-light md:text-xl">
                  {image.title}
                </p>
                <p className="mt-1 font-sans text-[10px] text-mmtw-muted md:text-xs">
                  {image.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href={campaignContent.ctaLink}>
            <Button variant="flame" size="lg">
              {campaignContent.ctaText}
            </Button>
          </Link>
        </div>
      </div>

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
    </section>
  );
}
