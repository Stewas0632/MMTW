"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "flame";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary:
    "bg-mmtw-light text-mmtw-black hover:bg-white border border-mmtw-light",
  flame:
    "bg-mmtw-flame text-mmtw-black hover:bg-mmtw-gold border border-mmtw-flame hover:border-mmtw-gold shadow-flame hover:shadow-flame-lg",
  secondary:
    "bg-transparent text-mmtw-light border border-mmtw-light hover:bg-mmtw-light hover:text-mmtw-black",
  ghost: "bg-transparent text-mmtw-light hover:text-mmtw-flame",
  outline:
    "bg-transparent text-mmtw-light border border-mmtw-muted/30 hover:border-mmtw-flame hover:text-mmtw-flame",
};

const sizes = {
  sm: "px-4 py-2 text-xs tracking-widest",
  md: "px-8 py-3 text-xs tracking-widest",
  lg: "px-10 py-4 text-sm tracking-widest",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "inline-flex items-center justify-center font-sans font-medium uppercase transition-all duration-300",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
