"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductGallery from "@/components/product/ProductGallery";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import { Product } from "@/types";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedSize, selectedColor);
  };

  return (
    <div className="min-h-screen bg-mmtw-black pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16">
        <Link
          href="/shop"
          className="mb-8 inline-block font-sans text-xs uppercase tracking-widest text-mmtw-muted transition-colors hover:text-mmtw-light"
        >
          ← Back to Shop
        </Link>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ProductGallery images={product.images} name={product.name} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <span className="font-sans text-xs uppercase tracking-ultra text-mmtw-accent">
              {product.category}
            </span>
            <h1 className="mt-2 font-display text-4xl uppercase tracking-wide text-mmtw-light md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 font-sans text-2xl text-mmtw-light">
              {formatPrice(product.price)}
            </p>
            <p className="mt-6 font-sans text-sm leading-relaxed text-mmtw-muted">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="mb-3 font-sans text-xs uppercase tracking-widest text-mmtw-muted">
                Color — {selectedColor}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "border px-4 py-2 font-sans text-xs uppercase tracking-widest transition-colors",
                      selectedColor === color
                        ? "border-mmtw-accent text-mmtw-accent"
                        : "border-white/10 text-mmtw-muted hover:border-white/30"
                    )}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 font-sans text-xs uppercase tracking-widest text-mmtw-muted">
                Size — {selectedSize}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "flex h-11 w-11 items-center justify-center border font-sans text-xs transition-colors",
                      selectedSize === size
                        ? "border-mmtw-light bg-mmtw-light text-mmtw-black"
                        : "border-white/10 text-mmtw-muted hover:border-white/30"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button onClick={handleAddToCart} className="flex-1">
                Add to Cart
              </Button>
              <Link href="/checkout" className="flex-1">
                <Button variant="secondary" className="w-full">
                  Buy Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
