"use client";

import Image from "next/image";
import { ArrowUpRight, Code2, Palette, BarChart3 } from "lucide-react";

const services = [
  {
    id: 1,
    image: "/assets/web2.png",
    alt: "Web Development - Agence IT",
    icon: Code2,
    title: "Développement Web",
    description:
      "Nous concevons des applications web robustes et scalables, adaptées aux besoins métiers de chaque client. De l'architecture technique au déploiement, nous assurons des solutions performantes et durables.",
  },
  {
    id: 2,
    image: "/assets/mobile.png",
    alt: "Website Design - Agence IT",
    icon: Palette,
    title: "Développement Mobile",
    description:
      "Nous créons des interfaces modernes, intuitives et centrées utilisateur. Chaque pixel est pensé pour maximiser l'expérience digitale et renforcer l'identité visuelle de votre marque.",
  },
  {
    id: 3,
    image: "/assets/seo.png",
    alt: "SEO Optimization - Agence IT",
    icon: BarChart3,
    title: "Optimisation SEO",
    description:
      "Boostez votre visibilité en ligne grâce à nos stratégies SEO data-driven. Nous optimisons votre présence digitale pour attirer un trafic qualifié et convertir vos visiteurs en clients.",
  },
];

export const ServiceSection = () => {
  return (
    <section id="service" className="w-full bg-white pb-38 pt-28 md:pb-46 md:pt-42 px-6 md:px-8 lg:px-16">
      {/*----------------------------------------------
           Header
      ----------------------------------------------*/}
      <div className="text-center mb-22">
        {/* Badge */}
            <div
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-3 bg-accent text-primary px-6 py-3 mb-4 rounded-full text-sm font-medium">
                Services
              </div>
            </div>
        <h2 className="mt-3 text-3xl md:text-[38px] font-bold text-gray-900">
          Propulsez votre{" "}
          <span className="text-indigo-600">activité</span>
        </h2>
      </div>
 

      {/*----------------------------------------------
           Main Content Grid
      ----------------------------------------------*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 max-w-7xl mx-auto px-0 md:px-6">
        {/* ----------------------------------------
            BLOCS
        ---------------------------------------- */}
        {services.map(({ id, image, alt, title, description }) => (
          <div
            key={id}
            className="group flex flex-col rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white"
          >
            {/* Image */}
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-6 pt-10 pb-12 gap-3">
              {/* Icon + Title */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                </div>
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-gray-400 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all duration-300 cursor-pointer">
                  <ArrowUpRight size={15} />
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Bottom accent bar */}
            <div className="h-0.75 w-0 group-hover:w-full bg-indigo-600 transition-all duration-500 rounded-b-2xl" />
          </div>
        ))}
      </div>
    </section>
  );
};