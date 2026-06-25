"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-mmtw-gray">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

          {product.tags && product.tags.length > 0 && (
            <span className="absolute left-3 top-3 bg-mmtw-black/80 px-2 py-1 font-sans text-[10px] uppercase tracking-widest text-mmtw-flame backdrop-blur-sm">
              {product.tags[0]}
            </span>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <span className="block w-full bg-mmtw-flame py-3 text-center font-sans text-[10px] uppercase tracking-widest text-mmtw-black transition-colors group-hover:bg-mmtw-gold">
              Quick View
            </span>
          </motion.div>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          <h3 className="font-sans text-sm text-mmtw-light transition-colors group-hover:text-mmtw-flame">
            {product.name}
          </h3>
          <p className="font-sans text-sm text-mmtw-muted">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
