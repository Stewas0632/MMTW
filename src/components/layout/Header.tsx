"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Logo from "@/components/ui/Logo";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/5 bg-mmtw-black/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 items-center justify-between px-6 md:h-20 md:px-10 lg:px-16">
          <Logo size="sm" priority glow />

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative font-sans text-xs uppercase tracking-widest text-mmtw-muted transition-colors hover:text-mmtw-light"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-mmtw-flame transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={openCart}
              className="relative font-sans text-xs uppercase tracking-widest text-mmtw-light transition-colors hover:text-mmtw-flame"
              aria-label="Open cart"
            >
              Cart
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -right-4 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-mmtw-flame text-[9px] font-medium text-mmtw-black"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              className="flex flex-col gap-1.5 md:hidden"
              aria-label="Open menu"
            >
              <span className="block h-px w-6 bg-mmtw-light" />
              <span className="block h-px w-4 bg-mmtw-light" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
