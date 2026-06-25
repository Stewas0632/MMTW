"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&auto=format&fit=crop",
    alt: "Street style look 1",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80&auto=format&fit=crop",
    alt: "Street style look 2",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80&auto=format&fit=crop",
    alt: "Street style look 3",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80&auto=format&fit=crop",
    alt: "Street style look 4",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80&auto=format&fit=crop",
    alt: "Street style look 5",
    span: "col-span-1 row-span-1",
  },
];

export default function LifestyleGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-mmtw-dark px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Lifestyle"
          title="The Culture"
          subtitle="More than clothes. A movement of builders, dreamers, and doers."
          align="center"
        />

        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:auto-rows-[250px] md:gap-4 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={`group relative cursor-pointer overflow-hidden ${image.span}`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-mmtw-black/0 transition-colors duration-500 group-hover:bg-mmtw-black/30" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-mmtw-black/90 p-6 backdrop-blur-md"
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative aspect-[3/4] w-full max-w-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                fill
                className="object-cover"
              />
            </motion.div>
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute right-6 top-6 font-sans text-xs uppercase tracking-widest text-mmtw-light"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
