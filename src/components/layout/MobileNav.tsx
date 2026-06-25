"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/products";
import Logo from "@/components/ui/Logo";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-mmtw-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-sm flex-col bg-mmtw-dark px-8 py-8"
          >
            <div className="flex items-center justify-between">
              <Logo size="sm" link={false} glow />
              <button
                onClick={onClose}
                className="font-sans text-xs uppercase tracking-widest text-mmtw-muted"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            <div className="mt-16 flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="font-display text-4xl uppercase tracking-wide text-mmtw-light transition-colors hover:text-mmtw-flame"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto border-t border-white/10 pt-8">
              <Link
                href="/shop"
                onClick={onClose}
                className="block w-full bg-mmtw-flame py-4 text-center font-sans text-xs uppercase tracking-widest text-mmtw-black transition-colors hover:bg-mmtw-gold"
              >
                Shop Now
              </Link>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
