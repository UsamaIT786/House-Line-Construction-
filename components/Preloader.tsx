"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep the preloader visible long enough for the animation to finish
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-primary overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Hard Hat SVG drawing */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f97316"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-6 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]"
              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              <motion.path
                d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.path
                d="M4 15v-3a6 6 0 0 1 6-6h0"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
              />
              <motion.path
                d="M14 6h0a6 6 0 0 1 6 6v3"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 1.2 }}
              />
            </motion.svg>

            {/* Staggered Text Reveal */}
            <div className="flex gap-2 overflow-hidden">
              <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
                className="font-bold text-4xl md:text-5xl tracking-tight text-white"
              >
                AHA
              </motion.span>
              <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.7 }}
                className="font-bold text-4xl md:text-5xl tracking-tight text-brand-accent"
              >
                Construction
              </motion.span>
            </div>

            {/* Progress line that fills up */}
            <motion.div
              className="h-1 bg-brand-accent mt-8 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 250, opacity: 1 }}
              transition={{ duration: 1.8, ease: "circInOut", delay: 0.4 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
