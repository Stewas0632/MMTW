"use client";

import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductGrid from "@/components/product/ProductGrid";
import { bestSellers } from "@/data/products";
import Button from "@/components/ui/Button";

export default function BestSellers() {
  return (
    <section className="bg-mmtw-black px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            label="Trending"
            title="Best Sellers"
            subtitle="The pieces our community can't stop wearing."
            className="mb-0"
          />
          <Link href="/shop" className="flex-shrink-0 pb-2">
            <Button variant="ghost" size="sm">
              Shop All →
            </Button>
          </Link>
        </div>

        <div className="mt-12">
          <ProductGrid products={bestSellers} columns={4} />
        </div>
      </div>
    </section>
  );
}
