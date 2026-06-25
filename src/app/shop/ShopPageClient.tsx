"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductGrid from "@/components/product/ProductGrid";
import ProductFilter from "@/components/shop/ProductFilter";
import { products } from "@/data/products";

interface ShopPageClientProps {
  initialCategory?: string;
}

export default function ShopPageClient({
  initialCategory = "all",
}: ShopPageClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) setActiveCategory(category);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    const url = category === "all" ? "/shop" : `/shop?category=${category}`;
    router.push(url, { scroll: false });
  };

  return (
    <div className="min-h-screen bg-mmtw-black pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <SectionHeading
          label="Shop"
          title="All Products"
          subtitle="Premium streetwear built for ambition. Filter by category to find your next piece."
        />

        <div className="mb-12">
          <ProductFilter
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ProductGrid products={filteredProducts} columns={4} />
        </motion.div>

        {filteredProducts.length === 0 && (
          <p className="py-20 text-center font-sans text-sm text-mmtw-muted">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
