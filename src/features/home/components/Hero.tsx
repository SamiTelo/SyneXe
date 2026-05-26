"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { SplitText } from "./SplitText";


export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative w-full px-6 sm:px-10 pb-32 -top-48 lg:px-20 sm:pb-38 md:pb-38 md:pt-32 pt-56 bg-cover bg-center bg-[url('/assets/hero-bg.png')]"
    >
      {/*----------------------------------------------
           Main Content Grid
      ----------------------------------------------------*/}
      <div className="max-w-7xl mx-auto gap-18 sm:gap-20 md:gap-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1.3fr] items-center md:mt-20">
        {/* ----------------------------------------
            BLOC LEFT: Text Presentation
        ----------------------------------------------- */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ x: -50, opacity: 0, scale: 0.95 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="flex-1 py-8 md:mt-12 -mt-4 md:pl-4 pl-0"
          >
            {/* Badge */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              className="flex justify-center md:justify-start"
            >
              <div className="inline-flex items-center gap-3 bg-accent text-primary pl-1.5 pr-6 py-1 mb-6 rounded-full text-sm font-medium">
                <span className="bg-background text-foreground px-6 py-3 rounded-full">
                  Nouveau
                </span>
                Solutions & Technologies
              </div>
            </motion.div>

            {/* Title */}
            <h1 className="font-bold text-[44px] sm:text-6xl md:text-[68px] leading-tight text-center md:text-left text-foreground">
              Des solutions IT{" "}
              <span className="text-[#6C63D8]">
                <SplitText texts={["robustes", "modernes"]} interval={2200} />
              </span>{" "}
              et sûres
            </h1>
            {/* Description */}
            <p className="mt-6 sm:text-[16px] md:text-[16px] text-sm text-muted-foreground text-center md:text-left leading-relaxed pr-6">
              Nous concevons et déployons des solutions digitales sur mesure,
              pensées pour répondre aux besoins de votre entreprise Vous
              accompagnons dans votre transformation numérique en améliorant
              performances, la sécurité et l’efficacité de vos processus. Grâce
              aux technologies modernes, nous optimisons la productivité et
              l’expérience utilisateur.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center gap-6 md:flex-row md:justify-start md:gap-8">
              {/* Primary Button */}
              <Link href="#service">
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
                  className="w-full md:w-auto inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full md:text-[16px] text-sm"
                >
                  <ArrowUpRight size={20} />
                  <span className="h-6 w-0.5 bg-primary-foreground/40 mx-2"></span>
                  Découvrir nos services
                </motion.div>
              </Link>

              {/* Secondary Button */}
              <button className="flex items-center gap-3 text-foreground font-medium md:text-[16px] text-sm group">
                <span className="w-15 h-15 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary text-primary transition">
                  <Play size={18} />
                </span>

                <span className="text-left ">
                  Vidéo <br />
                  de Presentation
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* -------------------------------------------
            BLOC RIGHT: image
        ------------------------------------------------- */}
        <div className="relative flex justify-center sm:pl-12 md:pl-10 pl-0 mt-8 md:mt-22">
          <div className="w-full max-w-3xl">
            <Image
              src="/assets/hero-image.png"
              alt="Hero"
              width={600}
              height={600}
              className="w-145 h-auto sm:sm:w-120 md:w-145 md:h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
