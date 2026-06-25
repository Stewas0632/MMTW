"use client";

import { motion } from "framer-motion";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProductFilter({
  activeCategory,
  onCategoryChange,
}: ProductFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onCategoryChange(cat.value)}
          className={cn(
            "relative px-4 py-2 font-sans text-xs uppercase tracking-widest transition-colors",
            activeCategory === cat.value
              ? "text-mmtw-black"
              : "text-mmtw-muted hover:text-mmtw-light"
          )}
        >
          {activeCategory === cat.value && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-mmtw-light"
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
          <span className="relative z-10">{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
