"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, ChevronRight, Send } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <section id="footer" className="w-full bg-[#e8eaf6] overflow-hidden">
      {/*-------------------------------------------------
           Main Content Grid
        ----------------------------------------------------*/}
      <div
        className="
          max-w-326.25
          mx-auto
          px-6
          sm:px-8
          py-20
          md:py-36
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-[1fr_auto_auto_auto]
          gap-x-20
          gap-y-14
          items-start
        "
      >
        {/* ----------------------------------------
            BLOC 1 — Brand / Description / Socials
           ----------------------------------------------- */}
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
         className="flex flex-col gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logo-light.svg"
              alt="NexSolve Logo"
              width={40}
              height={40}
              className="object-contain"
            />

            <span className="text-[1.6rem] font-bold text-primary leading-none tracking-tight">
              <span className="font-light text-[#1a1a3e]">Syne</span>Xa
            </span>
          </div>

          {/* Tagline */}
          <p className="sm:text-[16px] md:text-[16px] text-sm text-[#6b6b8a] leading-relaxed max-w-65">
            Nous transformons vos défis numériques en solutions performantes.
            Expertise, innovation et agilité au service de votre croissance IT.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-1">
            {[
              { icon: <FaFacebookF size={16} />, label: "Facebook" },
              { icon: <FaTwitter size={16} />, label: "Twitter" },
              { icon: <FaInstagram size={16} />, label: "Instagram" },
              { icon: <FaLinkedinIn size={16} />, label: "LinkedIn" },
            ].map(({ icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-[#b0b3d6]
                  flex
                  items-center
                  justify-center
                  text-[#4a4a6a]
                  hover:bg-primary
                  hover:text-white
                  hover:border-primary
                  transition-all
                  duration-200
                "
              >
                {icon}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ----------------------------------------
              BLOC 2 — Quick Links
           ----------------------------------------------- */}
        <div className="flex flex-col gap-5">
          {/* Heading */}
          <div>
            <h3 className="text-[1rem] font-bold text-[#1a1a3e] uppercase tracking-widest mb-2">
              Liens Rapides
            </h3>

            {/* Underline */}
            <div className="w-16 h-0.5 bg-primary" />
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-3 mt-8">
            {[
              "À Propos",
              "Notre Équipe",
              "FAQ",
              "Nos Services",
              "Contactez-nous",
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="
                    flex
                    items-center
                    gap-2
                    text-[0.875rem]
                    text-[#4a4a6a]
                    hover:text-primary
                    transition-colors
                    duration-150
                    group
                  "
                >
                  <ChevronRight
                    size={14}
                    className="
                      text-primary
                      group-hover:translate-x-1
                      transition-transform
                      duration-150
                    "
                  />

                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ----------------------------------------
              BLOC 3 — Contact Us
           ----------------------------------------------- */}
        <div className="flex flex-col gap-5">
          {/* Heading */}
          <div>
            <h3 className="text-[1rem] font-bold text-[#1a1a3e] uppercase tracking-widest mb-2">
              Contactez-nous
            </h3>

            {/* Underline */}
            <div className="w-16 h-0.5 bg-primary" />
          </div>

          {/* Contact items */}
          <div className="flex flex-col gap-6 mt-8">
            {[
              {
                icon: <Phone size={18} />,
                label: "TÉLÉPHONE",
                value: "+33 6 37 91 18 51",
              },
              {
                icon: <Mail size={18} />,
                label: "ADRESSE EMAIL",
                value: "contactsynexa7@gmail.com",
              },
              {
                icon: <MapPin size={18} />,
                label: "LOCALISATION",
                value: "Paris, France",
              },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                {/* Icon bubble */}
                <div
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    text-white
                    shrink-0
                    shadow-[0_0_12px_rgba(92,53,212,0.8),0_0_28px_rgba(92,53,212,0.45)]
                  "
                >
                  {icon}
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <span
                    className="
                      text-[0.7rem]
                      text-[#8888aa]
                      uppercase
                      tracking-wider
                      font-medium
                    "
                  >
                    {label}
                  </span>

                  <span className="text-[0.875rem] font-bold text-[#1a1a3e] mt-1">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ----------------------------------------
              BLOC 4 — Newsletter
           ----------------------------------------------- */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="flex flex-col gap-5"
        >
          {/* Heading */}
          <div>
            <h3 className="text-[1rem] font-bold text-[#1a1a3e] uppercase tracking-widest mb-2">
              Restez Informé !
            </h3>

            {/* Underline */}
            <div className="w-16 h-0.5 bg-primary" />
          </div>

          {/* Description */}
          <p className="sm:text-[16px] md:text-[16px] text-sm text-[#6b6b8a] leading-relaxed max-w-67.5 mt-8">
            Abonnez-vous à notre newsletter pour recevoir nos derniers articles,
            conseils tech et actualités IT directement dans votre boîte mail.
          </p>

          {/* Email input */}
          <div
            className="
              flex
              items-center
              rounded-md
              overflow-hidden
              bg-white
              
            "
          >
            <input
              type="email"
              placeholder="Votre adresse email"
              className="
                flex-1
                px-4
                py-3
                text-[0.85rem]
                text-[#1a1a3e]
                bg-transparent
                outline-none
                placeholder-[#aaaacc]
                min-w-0
              "
            />

            <button
              aria-label="S'abonner"
              className="
                w-12
                h-12
                bg-primary
                flex
                items-center
                justify-center
                text-white
                hover:bg-[#4826bb]
                transition-colors
                duration-200
                shrink-0
              "
            >
              <Send size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* ----------------------------------------
            Bottom Bar — Copyright
         ----------------------------------------------- */}
      <div className="w-full bg-primary">
        <div className="max-w-350 mx-auto px-6 sm:px-8 py-4">
          <p className="text-[0.8rem] text-white/90 text-center ml-0 md:ml-10 sm:text-center md:text-left font-medium">
            Copyright © 2025 SyneXa - All rights reserved |{" "}
            <a
              href="https://sam-dev-portfolio-one.vercel.app/"
              className="font-extrabold"
            >
              Sam Dev
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
