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
    <section className="w-full bg-[#e8eaf6]">
      {/*----------------------------------------------
           Main Content Grid 
        ----------------------------------------------------*/}
      <div className="max-w-[1400px] mx-auto px-8 py-16 grid grid-cols-[1fr_auto_auto_auto] gap-x-16 gap-y-0 items-start">
        {/* ----------------------------------------
              BLOC 1 — Brand / Description / Socials
           ----------------------------------------------- */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="NexSolve Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-[1.6rem] font-bold text-[#1a1a3e] leading-none tracking-tight">
              <span className="font-light">Nex</span>Solve
            </span>
          </div>

          {/* Tagline */}
          <p className="text-[0.875rem] text-[#6b6b8a] leading-relaxed max-w-[260px]">
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
                className="w-10 h-10 rounded-full border border-[#b0b3d6] flex items-center justify-center text-[#4a4a6a] hover:bg-[#5c35d4] hover:text-white hover:border-[#5c35d4] transition-all duration-200"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* ----------------------------------------
              BLOC 2 — Quick Links
           ----------------------------------------------- */}
        <div className="flex flex-col gap-5 min-w-[160px]">
          {/* Heading */}
          <div>
            <h3 className="text-[1rem] font-extrabold text-[#1a1a3e] uppercase tracking-widest mb-2">
              Liens Rapides
            </h3>
            {/* Underline decorator */}
            <div className="flex items-center gap-1">
              <div className="w-16 h-[2px] bg-[#5c35d4]" />
              <div className="w-2 h-2 rounded-full bg-[#5c35d4] -ml-1" />
            </div>
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-3">
            {[
              "À Propos",
              "Notre Équipe",
              "FAQ",
              "Nos Projets",
              "Contactez-nous",
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[0.875rem] text-[#4a4a6a] hover:text-[#5c35d4] transition-colors duration-150 group"
                >
                  <ChevronRight
                    size={14}
                    className="text-[#5c35d4] group-hover:translate-x-1 transition-transform duration-150"
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
        <div className="flex flex-col gap-5 min-w-[240px]">
          {/* Heading */}
          <div>
            <h3 className="text-[1rem] font-extrabold text-[#1a1a3e] uppercase tracking-widest mb-2">
              Contactez-nous
            </h3>
            <div className="flex items-center gap-1">
              <div className="w-16 h-[2px] bg-[#5c35d4]" />
              <div className="w-2 h-2 rounded-full bg-[#5c35d4] -ml-1" />
            </div>
          </div>

          {/* Contact items */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: <Phone size={18} />,
                label: "TÉLÉPHONE",
                value: "+225-07-00-000-000",
              },
              {
                icon: <Mail size={18} />,
                label: "ADRESSE EMAIL",
                value: "contact@nexsolve.io",
              },
              {
                icon: <MapPin size={18} />,
                label: "LOCALISATION",
                value: "Abidjan, Côte d'Ivoire",
              },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                {/* Icon bubble */}
                <div className="w-11 h-11 rounded-full bg-[#5c35d4] flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-[#5c35d4]/30">
                  {icon}
                </div>
                {/* Text */}
                <div className="flex flex-col">
                  <span className="text-[0.7rem] text-[#8888aa] uppercase tracking-wider font-medium">
                    {label}
                  </span>
                  <span className="text-[0.875rem] font-bold text-[#1a1a3e]">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ----------------------------------------
              BLOC 4 — Get In Touch / Newsletter
           ----------------------------------------------- */}
        <div className="flex flex-col gap-5 min-w-[280px]">
          {/* Heading */}
          <div>
            <h3 className="text-[1rem] font-extrabold text-[#1a1a3e] uppercase tracking-widest mb-2">
              Restez Informé !
            </h3>
            <div className="flex items-center gap-1">
              <div className="w-16 h-[2px] bg-[#5c35d4]" />
              <div className="w-2 h-2 rounded-full bg-[#5c35d4] -ml-1" />
            </div>
          </div>

          {/* Description */}
          <p className="text-[0.875rem] text-[#6b6b8a] leading-relaxed max-w-[270px]">
            Abonnez-vous à notre newsletter pour recevoir nos derniers articles,
            conseils tech et actualités IT directement dans votre boîte mail.
          </p>

          {/* Email input */}
          <div className="flex items-center rounded-md overflow-hidden border border-[#cccde8] bg-white shadow-sm">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 text-[0.85rem] text-[#1a1a3e] bg-transparent outline-none placeholder-[#aaaacc]"
            />
            <button
              aria-label="S'abonner"
              className="w-12 h-12 bg-[#5c35d4] flex items-center justify-center text-white hover:bg-[#4826bb] transition-colors duration-200 flex-shrink-0"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ----------------------------------------
            Bottom Bar — Copyright
         ----------------------------------------------- */}
      <div className="w-full bg-[#5c35d4]">
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <p className="text-[0.8rem] text-white/90 font-medium">
            Copyright © 2025 NexSolve. Tous droits réservés.
          </p>
        </div>
      </div>
    </section>
  );
};
