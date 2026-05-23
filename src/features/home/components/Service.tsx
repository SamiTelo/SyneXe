"use client";

import Image from "next/image";
import { ArrowUpRight, Code2, Palette, BarChart3 } from "lucide-react";

const projects = [
  {
    id: 1,
    image: "/images/web-development.jpg",
    alt: "Web Development - Agence IT",
    icon: Code2,
    title: "Développement Web",
    description:
      "Nous concevons des applications web robustes et scalables, adaptées aux besoins métiers de chaque client. De l'architecture technique au déploiement, nous assurons des solutions performantes et durables.",
  },
  {
    id: 2,
    image: "/images/website-design.jpg",
    alt: "Website Design - Agence IT",
    icon: Palette,
    title: "Design UI/UX",
    description:
      "Nous créons des interfaces modernes, intuitives et centrées utilisateur. Chaque pixel est pensé pour maximiser l'expérience digitale et renforcer l'identité visuelle de votre marque.",
  },
  {
    id: 3,
    image: "/images/seo-optimization.jpg",
    alt: "SEO Optimization - Agence IT",
    icon: BarChart3,
    title: "Optimisation SEO",
    description:
      "Boostez votre visibilité en ligne grâce à nos stratégies SEO data-driven. Nous optimisons votre présence digitale pour attirer un trafic qualifié et convertir vos visiteurs en clients.",
  },
];

export const ServiceSection = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8 lg:px-16">
      {/*----------------------------------------------
           Header
      ----------------------------------------------*/}
      <div className="text-center mb-14">
        <span className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
          Projets
        </span>
        <h2 className="mt-3 text-4xl font-extrabold text-gray-900">
          Nos Derniers{" "}
          <span className="text-indigo-600">Projets Récents</span>
        </h2>
      </div>

      {/*----------------------------------------------
           Main Content Grid
      ----------------------------------------------*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* ----------------------------------------
            BLOCS
        ---------------------------------------- */}
        {projects.map(({ id, image, alt, icon: Icon, title, description }) => (
          <div
            key={id}
            className="group flex flex-col rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            {/* Image */}
            <div className="relative w-full h-[240px] overflow-hidden">
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 gap-3">
              {/* Icon + Title */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600">
                    <Icon size={18} strokeWidth={2} />
                  </div>
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
            <div className="h-[3px] w-0 group-hover:w-full bg-indigo-600 transition-all duration-500 rounded-b-2xl" />
          </div>
        ))}
      </div>
    </section>
  );
};