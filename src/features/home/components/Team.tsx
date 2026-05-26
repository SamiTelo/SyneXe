"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { containerVariants, itemVariants } from "@/animations/fade.animation";
import { FabButton } from "@/components/ui/FabFButton";

const teamMembers = [
  {
    id: 1,
    name: "Marcus Diallo",
    role: "Architecte Solutions IT",
    image: "/assets/team-1.png",
  },
  {
    id: 2,
    name: "Sarah Kowalski",
    role: "Designer UI/UX",
    image: "/assets/team-2.png",
  },
  {
    id: 3,
    name: "Elena Moretti",
    role: "Experte Cybersécurité",
    image: "/assets/team.png",
  },
];

export const TeamSection = () => {
  return (
    <section
      id="team"
      className="relative w-full bg-background py-10 md:py-24 px-6 overflow-hidden"
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
        className="text-center mb-22"
      >
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 bg-accent text-accent-foreground border border-border px-6 py-3 mb-4 rounded-full text-sm font-medium">
            Équipe
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-3xl md:text-[38px] font-bold text-foreground">
          Notre Équipe <span className="text-primary">d’Experts</span>
        </h2>
      </motion.div>

      {/*----------------------------------------------
           Background Decorative Shape
      ----------------------------------------------*/}
      <div
        className="absolute top-50 left-0 w-42 h-42 bg-secondary/60 pointer-events-none blur-sm"
        style={{
          borderRadius: "62% 38% 46% 54% / 60% 44% 56% 40%",
        }}
      />

      {/*----------------------------------------------
           Main Content Grid
      ----------------------------------------------*/}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 gap-16 px-0 md:px-6">
        {/* ----------------------------------------
             Cards Grid Block
        ---------------------------------------- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              key={member.id}
              className="group bg-card rounded-2xl shadow-lg border border-border overflow-hidden flex flex-col transition-all duration-300  hover:shadow-2xl"
            >
              {/* ----------------------------------------
                   Image Block
              ---------------------------------------- */}
              <div className="relative w-full aspect-[4/4.2] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Plus button */}
                <FabButton className="absolute top-86 -right-78 md:top-84 md:-right-78"/>
              </div>

              {/* ----------------------------------------
                   Info Block
              ---------------------------------------- */}
              <div className="py-8 px-4 flex flex-col items-center gap-2">
                <h3 className="text-card-foreground text-lg font-bold">
                  {member.name}
                </h3>

                <p className="text-primary text-sm font-medium">
                  {member.role}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div className="h-0.75 w-0 group-hover:w-full bg-primary transition-all duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
