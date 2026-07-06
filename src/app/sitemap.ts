import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mmtw.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const staticPages = [
    "",
    "/shop",
    "/about",
    "/contact",
    "/lookbook",
    "/faq",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  return [...staticPages, ...productPages];
}
