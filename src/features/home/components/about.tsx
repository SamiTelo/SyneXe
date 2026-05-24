"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const features = [
  { label: "web | mobile développement" },
  { label: "Design UI/UX" },
  { label: "SEO Optimisé et performante" },
  { label: "Sécurité Renforcée" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-white pb-30 md:pb-40 -mt-20 sm:-mt-20 md:mt-0  px-6 lg:px-16">
      {/*----------------------------------------------
           Main Content Grid
        ----------------------------------------------------*/}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-28 md:gap-20 items-center">
        {/* ----------------------------------------
            BLOC GAUCHE — Image avec badge
        ----------------------------------------------- */}
        <div className="relative flex items-center justify-center pr-0 md:pr-6 order-2 md:order-1">
          <div className="absolute inset-0 z-0" />

          <div className="relative flex justify-center sm:pl-12 md:pl-10 pl-0 mt-8 md:mt-10">
            <div className="w-full max-w-3xl">
              <Image
                src="/assets/about-image.png"
                alt="about"
                width={600}
                height={600}
                className="w-145 h-auto sm:sm:w-120 md:w-136 md:h-136"
                priority
              />
            </div>
          </div>

          {/* Badge 10k+ clients */}
          <div
            className="absolute bottom-6 right-8 z-20 flex flex-col items-center justify-center text-white font-bold rounded-full shadow-lg"
            style={{
              background: "#684df4",
              width: "120px",
              height: "120px",
            }}
          >
            <span className="text-2xl font-extrabold leading-tight">10k+</span>
            <span className="text-sm font-normal text-indigo-200 leading-tight text-center px-2">
              Clients Actifs
            </span>
          </div>
        </div>

        {/* ----------------------------------------
            BLOC DROIT — Texte, features, CTA
        ----------------------------------------------- */}
        <div className="flex flex-col gap-6 order-1 md:order-2">
          {/* Badge */}
            <div
              className="flex justify-start"
            >
              <div className="inline-flex items-center gap-3 bg-accent text-primary px-6 py-3 rounded-full text-sm font-medium">
                Pourquoi Nous Choisir
              </div>
            </div>


          {/* Heading */}
          <h2 className="text-3xl md:text-[38px] font-bold text-gray-900 leading-snug">
            Plus de 14 Ans d&apos;Expérience
            <br />
            en{" "}
            Solutions & <span className="text-indigo-600">Technologies IT</span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 sm:text-[16px] md:text-[16px] text-sm leading-relaxed max-w-lg">
            Nous concevons des architectures numériques robustes et évolutives
            pour accompagner la transformation digitale de votre entreprise.
            Notre expertise couvre l&apos;intégration cloud, la cybersécurité et
            le développement de systèmes d&apos;information sur mesure.
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-2  gap-y-4 my-4 md:my-2">
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-3">
                <CheckCircle2
                  size={38}
                  className="shrink-0"
                  style={{ color: "#684df4" }}
                  fill="#684df4"
                  strokeWidth={2}
                  stroke="white"
                />
                <span className="text-gray-700 font-medium text-sm">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

           {/* CTA Button */}
          <Link href="#competence">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    boxShadow: "0px 8px 15px rgba(0,0,0,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  }}
                  className="w-fit md:w-auto inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full md:text-[16px] text-sm"
                >
                  <ArrowUpRight size={20} />
                  <span className="h-6 w-0.5 bg-primary-foreground/40 mx-1"></span>
                  Nos meilleurs offres
                </motion.div>
              </Link>
        </div>
      </div>
    </section>
  );
};
