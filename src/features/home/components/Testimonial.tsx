"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Une équipe professionnelle et réactive qui a su transformer notre vision en une solution digitale moderne et performante. Le résultat a largement dépassé nos attentes.",
    name: "Sarah Foster",
    role: "CEO at TechVentures",
    image: "/assets/client-2.png",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Nous avons apprécié leur expertise technique, leur accompagnement et la qualité du développement réalisé. Une collaboration fluide avec un véritable sens du détail.",
    name: "David Farnandes",
    role: "CTO at Innovatech",
    image: "/assets/client-1.png",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={i < rating ? "#6C4EF6" : "#E2DCFD"}
        className="w-5 h-5"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.062 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
      </svg>
    ))}
  </div>
);

export const TestimonialSection = () => {
  return (
    <section id="testimonial" className="relative w-full bg-white py-16 md:py-38 overflow-hidden">
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
            <div
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-3 bg-accent text-primary px-6 py-3 mb-4 rounded-full text-sm font-medium">
                Témoignages
              </div>
            </div>
        <h2 className="mt-3 text-3xl md:text-[38px] font-bold text-gray-900">
          Nos Avis{" "}
          <span className="text-primary">Clients</span>
        </h2>
      </motion.div>

      {/* -----------------------------------------------
           Background Decorative Elements
      ----------------------------------------------- */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Dot grid pattern */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dot-pattern"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#6C4EF6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>

        {/* Squiggle top-right */}
        <svg
          className="absolute top-8 right-8 w-14 h-24 text-primary"
          viewBox="0 0 56 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48 4 C20 20, 52 40, 20 56 C-12 72, 40 88, 20 96"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Diagonal lines bottom-left */}
        <svg
          className="absolute bottom-12 left-8 w-36 h-28 text-[#C4B5FD] opacity-40"
          viewBox="0 0 144 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[0, 12, 24, 36, 48, 60].map((offset) => (
            <line
              key={offset}
              x1={offset}
              y1="112"
              x2={offset + 80}
              y2="0"
              stroke="currentColor"
              strokeWidth="2"
            />
          ))}
        </svg>
      </div>

      {/* -----------------------------------------------
           Main Content Grid
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
      className="relative z-10 max-w-7xl mx-auto px-6 grid grid-rows-[auto_1fr] gap-12">

        {/* -----------------------------------------------
             Cards Grid
        ----------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative bg-white rounded-2xl shadow-[0_4px_32px_rgba(108,78,246,0.08)] border border-[#F0ECFF] px-6 py-8 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 items-start overflow-visible"
            >
              {/* -----------------------------------------------
                   Photo Block
              ----------------------------------------------- */}
              <div className="relative self-stretch">
                <div className="relative w-45 h-41 rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover object-top"
                    sizes="180px"
                  />
                </div>
              </div>

              {/* -----------------------------------------------
                   Content Block
              ----------------------------------------------- */}
              <div className="grid grid-rows-[1fr_auto] gap-4 py-1">
                <StarRating rating={t.rating}/>
                {/* Quote text */}
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {t.quote}
                </p>

                {/* Divider + author + stars */}
                <div className="grid gap-2">
                  <hr className="border-[#F0ECFF]" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#0F0A2A] font-bold text-base leading-tight">
                        {t.name}
                      </p>
                      <p className="text-[#9CA3AF] text-xs mt-0.5">{t.role}</p>
                    </div>
                     {/* Quote badge overlapping bottom-left of photo */}
                <div className="absolute right-8 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Quote className="w-4 h-4 text-white fill-white" strokeWidth={0} />
                </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};