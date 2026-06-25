import type { Metadata } from "next";
import { Suspense } from "react";
import ShopPageClient from "./ShopPageClient";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop MMTW. premium streetwear — hoodies, boxy tees, sweatsuits, and jackets.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  return (
    <Suspense>
      <ShopPageClient initialCategory={category ?? "all"} />
    </Suspense>
  );
}
