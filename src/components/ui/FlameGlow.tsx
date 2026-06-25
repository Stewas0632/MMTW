"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlameGlowProps {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

export default function FlameGlow({
  className,
  intensity = "medium",
}: FlameGlowProps) {
  const opacity =
    intensity === "subtle" ? 0.12 : intensity === "medium" ? 0.2 : 0.3;

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [opacity * 0.7, opacity, opacity * 0.7],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-1/4 left-1/2 h-[60%] w-[80%] -translate-x-1/2 rounded-full bg-mmtw-flame/30 blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [opacity * 0.5, opacity * 0.8, opacity * 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-1/3 left-1/3 h-[50%] w-[60%] rounded-full bg-mmtw-gold/20 blur-[80px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [opacity * 0.3, opacity * 0.6, opacity * 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -right-1/4 top-1/4 h-[40%] w-[40%] rounded-full bg-mmtw-navy/40 blur-[90px]"
      />
    </div>
  );
}
