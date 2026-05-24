"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { value: 120, suffix: "k", label: "Clients Satisfaits" },
  { value: 200, suffix: "k", label: "Projets Livrés" },
  { value: 100, suffix: "%", label: "Résultats Garantis" },
  { value: 80, suffix: "+", label: "Experts Certifiés" },
];

const AnimatedCounter = ({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeOut",
    });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [inView, value, motionValue, rounded]);

  return (
    <span className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
      {display}{" "}
      <span className="text-4xl lg:text-5xl font-extrabold text-white">
        {suffix}
      </span>
    </span>
  );
};

export const CounterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full bg-white py-6 px-4 lg:px-16">
      {/*----------------------------------------------
           Main Content Grid
        ----------------------------------------------------*/}
      <div
        ref={ref}
        className="relative max-w-309 mx-auto rounded-4xl overflow-hidden"
        style={{ background: "#684df4" }}
      >
        {/* ----------------------------------------
            Wavy SVG background texture
        ----------------------------------------------- */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-contan bg-no-repeat bg-center bg-[url('/assets/counter-bg.svg')]">
         
        </div>

        {/* ----------------------------------------
            Stats Grid
        ----------------------------------------------- */}
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 py-10 px-6 lg:px-12">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-stretch">
              {/* Stat bloc */}
              <motion.div
                className="flex flex-col items-center justify-center text-center flex-1 py-4 px-4"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-indigo-200">
                  {stat.label}
                </p>
              </motion.div>

              {/* Divider — hide after last item */}
              {index < stats.length - 1 && (
                <div className="self-center h-12 w-px bg-indigo-400 opacity-50 hidden lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};