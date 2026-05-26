"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { containerVariants, itemVariants } from "@/animations/fade.animation";

const services = [
  {
    id: 1,
    image: "/assets/web2.png",
    alt: "Web Development - Agence IT",
    title: "Développement Web",
    description:
      "Nous concevons des applications web robustes et scalables, adaptées aux besoins métiers de chaque client. De l'architecture technique au déploiement, nous assurons des solutions performantes et durables.",
  },
  {
    id: 2,
    image: "/assets/mobile.png",
    alt: "Mobile Development - Agence IT",
    title: "Développement Mobile",
    description:
     "Nous créons des interfaces modernes, intuitives et centrées utilisateur. Chaque pixel est pensé pour maximiser l'expérience digitale et renforcer l'identité visuelle de votre marque.",
  },
  {
    id: 3,
    image: "/assets/seo.png",
    alt: "SEO Optimization - Agence IT",
    title: "Optimisation SEO",
    description:
     "Boostez votre visibilité en ligne grâce à nos stratégies SEO data-driven. Nous optimisons votre présence digitale pour attirer un trafic qualifié et convertir vos visiteurs en clients.",
  },
];

export const ServiceSection = () => {
  return (
    <section
      id="service"
      className="w-full bg-background pb-38 pt-28 md:pb-46 md:pt-42 px-6 md:px-8 lg:px-16"
    >
      {/*----------------------------------------------
           Header
      ----------------------------------------------*/}
      <motion.div
       initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 80,
            damping: 12,
          }} 
      className="text-center mb-22">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 bg-accent text-accent-foreground border border-border px-6 py-3 mb-4 rounded-full text-sm font-medium">
            Services
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-3xl md:text-[38px] font-bold text-foreground">
          Propulsez votre{" "}
          <span className="text-primary">activité</span>
        </h2>
      </motion.div>

      {/*----------------------------------------------
           Main Content Grid
      ----------------------------------------------*/}
      <motion.div
       variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} 
      className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 max-w-7xl mx-auto px-0 md:px-6">
        {/* ----------------------------------------
            BLOCS
        ---------------------------------------- */}
        {services.map(
          ({ id, image, alt, title, description }) => (
            <motion.div
            variants={itemVariants}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              key={id}
              className="group flex flex-col rounded-2xl overflow-hidden shadow-lg border border-border bg-card transition-all duration-300  hover:shadow-2xl"
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
              <div className="flex flex-col flex-1 px-6 pt-10 pb-12 gap-4">
                {/*Title */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-card-foreground">
                      {title}
                    </h3>
                  </div>

                  <span className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300 cursor-pointer">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div className="h-0.75 w-0 group-hover:w-full bg-primary transition-all duration-500 rounded-b-2xl" />
            </motion.div>
          )
        )}
      </motion.div>
    </section>
  );
};