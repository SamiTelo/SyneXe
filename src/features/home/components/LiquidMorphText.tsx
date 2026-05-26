"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  texts: string[];
  interval?: number;
  className?: string;
};

export const LiquidMorphText = ({
  texts,
  interval = 2000,
  className = "",
}: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(id);
  }, [texts.length, interval]);

  return (
    <span className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{
            opacity: 0,
            y: 10,
            scale: 0.98,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -10,
            scale: 1.02,
            filter: "blur(14px)",
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="inline-block font-bold"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>

      {/* Liquid glow overlay */}
      <motion.span
        aria-hidden
        className="absolute inset-0 blur-xl opacity-30 text-[#6C63D8]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {texts[index]}
      </motion.span>
    </span>
  );
};