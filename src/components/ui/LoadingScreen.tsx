"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import FlameGlow from "@/components/ui/FlameGlow";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [glowActive, setGlowActive] = useState(false);

  useEffect(() => {
    const glowTimer = setTimeout(() => setGlowActive(true), 400);

    const progressInterval = setInterval(() => {
      setProgress((p) => Math.min(p + 3, 100));
    }, 55);

    const timer = setTimeout(() => setIsLoading(false), 2200);

    return () => {
      clearTimeout(glowTimer);
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-mmtw-black"
        >
          <FlameGlow intensity={glowActive ? "strong" : "subtle"} />

          <div className="relative z-10 flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, filter: "blur(16px)" }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Logo
                size="lg"
                link={false}
                priority
                glow={glowActive}
                pulse={glowActive}
              />
            </motion.div>

            <div className="w-48 overflow-hidden md:w-64">
              <div className="h-0.5 w-full bg-white/5">
                <motion.div
                  className="h-full bg-flame-gradient"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #f37021, #ffba08)",
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="font-sans text-[10px] uppercase tracking-ultra text-mmtw-muted"
            >
              Money Moves The World
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
