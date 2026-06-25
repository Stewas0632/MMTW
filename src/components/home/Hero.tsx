"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import FlameGlow from "@/components/ui/FlameGlow";
import { cmsContent } from "@/data/products";

const headlineWords = cmsContent.hero.headline.split(" ");

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="grain-overlay relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-mmtw-black"
    >
      {/* Animated background layers */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1920&q=80&auto=format&fit=crop"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-mmtw-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-mmtw-black via-transparent to-mmtw-black" />
        <div className="absolute inset-0 vignette" />
      </motion.div>

      <FlameGlow intensity="medium" />

      {/* Logo watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <Logo size="hero" link={false} className="!h-[80vh] !w-[80vh] max-w-none" />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex w-full flex-col items-center px-6 pt-28 pb-20 text-center md:px-10 md:pb-28 lg:px-16"
      >
        {/* Hero logo — primary identity */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
          className="animate-float"
        >
          <Logo size="hero" link={false} priority glow pulse />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.3 }}
          className="mt-8 font-sans text-xs uppercase tracking-ultra text-mmtw-flame"
        >
          SS26 Collection — Now Available
        </motion.span>

        <h1 className="mt-6 max-w-5xl font-display uppercase leading-[0.9] tracking-wide text-mmtw-light">
          {headlineWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 2.4 + i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mr-[0.15em] inline-block text-[clamp(2.5rem,8vw,6.5rem)] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.8 }}
          className="mx-auto mt-6 max-w-lg font-sans text-sm leading-relaxed text-mmtw-muted md:text-base"
        >
          {cmsContent.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.0 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link href={cmsContent.hero.ctaLink}>
            <Button size="lg" variant="flame">
              {cmsContent.hero.ctaText}
            </Button>
          </Link>
          <Link href="/lookbook">
            <Button variant="secondary" size="lg">
              View Lookbook
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[10px] uppercase tracking-ultra text-mmtw-muted">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-mmtw-flame/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
