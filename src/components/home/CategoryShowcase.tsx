"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    label: "Hoodies",
    href: "/shop?category=hoodies",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80&auto=format&fit=crop",
  },
  {
    label: "Tees",
    href: "/shop?category=tees",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80&auto=format&fit=crop",
  },
  {
    label: "Sweatsuits",
    href: "/shop?category=sweatsuits",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&auto=format&fit=crop",
  },
  {
    label: "Jackets",
    href: "/shop?category=jackets",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80&auto=format&fit=crop",
  },
];

export default function CategoryShowcase() {
  return (
    <section className="bg-mmtw-black px-6 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <span className="font-sans text-xs uppercase tracking-ultra text-mmtw-accent">
              Categories
            </span>
            <h2 className="mt-3 font-display text-4xl uppercase leading-none tracking-wide text-mmtw-light md:text-6xl">
              Shop By Style
            </h2>
          </div>
          <p className="max-w-sm font-sans text-sm text-mmtw-muted">
            Hoodies, boxy tees, sweatsuits, and jackets — each piece engineered
            for the grind.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link href={cat.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-mmtw-gray">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-mmtw-black/30 transition-colors duration-500 group-hover:bg-mmtw-black/10" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-mmtw-black/90 to-transparent p-5">
                    <span className="font-display text-2xl uppercase tracking-wide text-mmtw-light transition-colors group-hover:text-mmtw-accent md:text-3xl">
                      {cat.label}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
