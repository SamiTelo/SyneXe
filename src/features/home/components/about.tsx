"use client";

import Image from "next/image";
import { CheckCircle2, Apple } from "lucide-react";

const features = [
  { label: "web | mobile développement" },
  { label: "Stockage Cloud " },
  { label: "SEO Optimisé et performante" },
  { label: "Sécurité Renforcée" },
];

export const AboutSection = () => {
  return (
    <section className="w-full bg-white pb-40 -mt-20 sm:-mt-20 md:mt-0  px-6 lg:px-16">
      {/*----------------------------------------------
           Main Content Grid
        ----------------------------------------------------*/}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* ----------------------------------------
            BLOC GAUCHE — Image avec badge
        ----------------------------------------------- */}
        <div className="relative flex items-center justify-center pr-6">
          <div className="absolute inset-0 z-0" />

          <div className="relative flex justify-center sm:pl-12 md:pl-10 pl-0 mt-8 md:mt-10">
            <div className="w-full max-w-3xl">
              <Image
                src="/assets/about-img.png"
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
        <div className="flex flex-col gap-6">
          {/* Eyebrow */}
          {/* Badge */}
            <div
              className="flex justify-start"
            >
              <div className="inline-flex items-center gap-3 bg-accent text-primary px-6 py-3 rounded-full text-sm font-medium">
                Pourquoi Nous Choisir
              </div>
            </div>


          {/* Heading */}
          <h2 className="text-[38px] font-bold text-gray-900 leading-snug">
            Plus de 14 Ans d&apos;Expérience
            <br />
            en{" "}
            Solutions & Technologies IT
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-base leading-relaxed max-w-lg">
            Nous concevons des architectures numériques robustes et évolutives
            pour accompagner la transformation digitale de votre entreprise.
            Notre expertise couvre l&apos;intégration cloud, la cybersécurité et
            le développement de systèmes d&apos;information sur mesure.
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-2  gap-y-4 mt-2">
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
          <div className="mt-4">
            <button
              className="inline-flex items-center gap-3 text-white text-sm font-semibold px-6 py-3 rounded-full transition hover:opacity-90 active:scale-95"
              style={{ background: "#684df4" }}
            >
              <Apple size={18} className="shrink-0" />
              <span className="border-l border-indigo-400 pl-3">
                Télécharger l&apos;App
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
