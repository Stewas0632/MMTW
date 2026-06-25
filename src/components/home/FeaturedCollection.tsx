"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductGrid from "@/components/product/ProductGrid";
import { featuredProducts } from "@/data/products";
import Button from "@/components/ui/Button";

export default function FeaturedCollection() {
  return (
    <section className="relative bg-mmtw-black px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative aspect-[4/5] overflow-hidden lg:sticky lg:top-24 lg:self-start"
          >
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80&auto=format&fit=crop"
              alt="Featured Collection"
              fill
              className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mmtw-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="font-sans text-[10px] uppercase tracking-ultra text-mmtw-accent">
                Spring Summer 2026
              </span>
              <p className="mt-1 font-display text-4xl uppercase tracking-wide text-mmtw-light">
                SS26
              </p>
            </div>
            <div className="absolute right-8 top-8 border border-white/20 px-3 py-1.5 backdrop-blur-sm">
              <span className="font-sans text-[10px] uppercase tracking-widest text-mmtw-light">
                New Drop
              </span>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              label="Featured"
              title="The Collection"
              subtitle="Curated pieces that define the MMTW. aesthetic — oversized silhouettes, premium materials, and unapologetic ambition."
            />
            <ProductGrid products={featuredProducts.slice(0, 4)} columns={2} />
            <div className="mt-12">
              <Link href="/shop">
                <Button variant="outline">View All Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
