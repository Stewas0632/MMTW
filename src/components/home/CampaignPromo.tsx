"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { campaignImages } from "@/data/campaign";

export default function CampaignPromo() {
  const preview = campaignImages.slice(0, 3);

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-mmtw-dark py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-sans text-xs uppercase tracking-ultra text-mmtw-flame">
              Campaign
            </span>
            <h2 className="mt-4 font-display text-4xl uppercase leading-none tracking-wide text-mmtw-light md:text-6xl">
              Official Promo
            </h2>
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-mmtw-muted md:text-base">
              MMTW brand photography and campaign visuals — separate from our
              product catalog. See the movement in motion.
            </p>
            <Link
              href="/campaign"
              className="mt-8 inline-block font-sans text-xs uppercase tracking-widest text-mmtw-light transition-colors hover:text-mmtw-flame"
            >
              View Campaign →
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
            {preview.map((image, i) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative aspect-[3/4] overflow-hidden bg-mmtw-gray ${i === 0 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <Link href="/campaign" className="block h-full w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 33vw, 20vw"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
