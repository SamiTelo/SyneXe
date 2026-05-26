"use client";

import {
  motion,
  AnimatePresence,
  cubicBezier,
} from "framer-motion";
import { useEffect, useState } from "react";

type SplitTextProps = {
  texts: string[];
  className?: string;
  stagger?: number;
  interval?: number;
};

export const SplitText = ({
  texts,
  className = "",
  stagger = 0.05,
  interval = 2200,
}: SplitTextProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(id);
  }, [texts.length, interval]);

  const currentText = texts[index];
  const letters = Array.from(currentText);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 30,
      rotateX: 90,
      filter: "blur(10px)",
    },

    visible: {
      opacity: 1,
      y: [30, -8, 0], // effet wave
      rotateX: [90, -10, 0],
      filter: ["blur(10px)", "blur(4px)", "blur(0px)"],

      transition: {
        duration: 0.8,
        ease: cubicBezier(0.25, 0.1, 0.25, 1),
      },
    },

    exit: {
      opacity: 0,
      y: -20,
      rotateX: -90,
      filter: "blur(8px)",

      transition: {
        duration: 0.35,
      },
    },
  };

  return (
    <span
      className={`relative inline-flex overflow-hidden ${className}`}
      style={{ perspective: "1000px" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          variants={container}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="inline-flex"
        >
          {letters.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={child}
              className="inline-block will-change-transform"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};