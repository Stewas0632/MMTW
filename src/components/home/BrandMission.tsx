"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cmsContent } from "@/data/products";

const values = [
  { value: "Ambition", desc: "Dream bigger. Move faster." },
  { value: "Purpose", desc: "Every piece has intent." },
  { value: "Hustle", desc: "Built for the grind." },
];

export default function BrandMission() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-mmtw-dark py-32 md:py-48"
    >
      <motion.div
        style={{ x }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.025]"
      >
        <span className="whitespace-nowrap font-display text-[18vw] uppercase tracking-widest text-mmtw-light">
          MMTW. MMTW. MMTW.
        </span>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <span className="font-sans text-xs uppercase tracking-ultra text-mmtw-accent">
              Our Mission
            </span>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none tracking-wide text-mmtw-light md:text-7xl">
              {cmsContent.mission.title}
            </h2>
            <motion.div
              style={{ width: lineWidth }}
              className="mt-8 h-px bg-mmtw-accent"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-8"
          >
            <p className="font-sans text-lg leading-relaxed text-mmtw-muted md:text-xl md:leading-relaxed">
              {cmsContent.mission.body}
            </p>

            <div className="mt-16 grid gap-8 border-t border-white/5 pt-16 sm:grid-cols-3">
              {values.map((item, i) => (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group"
                >
                  <p className="font-display text-2xl uppercase tracking-wide text-mmtw-light transition-colors group-hover:text-mmtw-accent md:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-mmtw-muted">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
