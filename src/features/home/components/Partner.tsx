"use client";

import Image from "next/image";

const partners = [
  {
    id: 1,
    name: "Dropbox",
    image: "/images/partners/dropbox.png",
    alt: "Dropbox - Partenaire Stockage Cloud",
    bgColor: "bg-[#dde3f5]",
    size: 120,
  },
  {
    id: 2,
    name: "Google Calendar",
    image: "/images/partners/google-calendar.png",
    alt: "Google Calendar - Partenaire Productivité",
    bgColor: "bg-[#ecdff5]",
    size: 140,
  },
  {
    id: 3,
    name: "Campfire",
    image: "/images/partners/campfire.png",
    alt: "Campfire - Partenaire Communication",
    bgColor: "bg-[#fdf5dc]",
    size: 130,
  },
  {
    id: 4,
    name: "Slack",
    image: "/images/partners/slack.png",
    alt: "Slack - Partenaire Collaboration",
    bgColor: "bg-[#fad9d5]",
    size: 150,
  },
  {
    id: 5,
    name: "PayPal",
    image: "/images/partners/paypal.png",
    alt: "PayPal - Partenaire Paiement",
    bgColor: "bg-[#dde3f5]",
    size: 120,
  },
];

export const PartnersSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-20 px-4 md:px-8 lg:px-16">
      {/*----------------------------------------------
           Decorative background dots
      ----------------------------------------------*/}
      {/* Top-left ghost circle */}
      <div className="absolute left-[-40px] top-[52%] w-[100px] h-[100px] rounded-full border border-gray-200 opacity-60" />
      {/* Bottom-right ghost circle */}
      <div className="absolute right-[6%] bottom-[10%] w-[80px] h-[80px] rounded-full bg-gray-100 opacity-50" />
      {/* Small purple dots */}
      <div className="absolute left-[23%] top-[38%] w-[10px] h-[10px] rounded-full bg-indigo-500 opacity-80" />
      <div className="absolute right-[20%] top-[30%] w-[8px] h-[8px] rounded-full bg-indigo-500 opacity-70" />
      {/* Small red/coral dots */}
      <div className="absolute right-[30%] top-[52%] w-[14px] h-[14px] rounded-full bg-rose-400 opacity-80" />
      <div className="absolute right-[8%] top-[48%] w-[38px] h-[38px] rounded-full bg-rose-400 opacity-80" />
      {/* Small blue dot */}
      <div className="absolute left-[42%] top-[68%] w-[10px] h-[10px] rounded-full bg-indigo-400 opacity-60" />
      {/* Ghost circle bottom center */}
      <div className="absolute left-[48%] bottom-[12%] w-[55px] h-[55px] rounded-full bg-gray-200 opacity-40" />
      {/* Ghost circle top left small */}
      <div className="absolute left-[5%] bottom-[18%] w-[40px] h-[40px] rounded-full bg-indigo-100 opacity-50" />
      {/* Ghost circle bottom right */}
      <div className="absolute right-[-20px] bottom-[5%] w-[90px] h-[90px] rounded-full bg-gray-100 opacity-40" />

      {/*----------------------------------------------
           Header
      ----------------------------------------------*/}
      <div className="text-center mb-16 relative z-10">
        <span className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
          Partenaires
        </span>
        <h2 className="mt-3 text-4xl font-extrabold text-gray-900">
          Intégration Avec Nos{" "}
          <span className="text-indigo-600">Apps Partenaires</span>
        </h2>
      </div>

      {/*----------------------------------------------
           Main Content Grid — wave + logos
      ----------------------------------------------*/}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ----------------------------------------
            SVG Wave connector line
        ---------------------------------------- */}
        <svg
          className="absolute top-[50%] left-0 w-full -translate-y-1/2 pointer-events-none"
          height="100"
          viewBox="0 0 1200 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 C150 10, 250 90, 400 55 C550 20, 650 80, 800 50 C950 20, 1050 75, 1200 45"
            stroke="#e0e4f5"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* ----------------------------------------
            BLOCS — partner logo circles grid
        ---------------------------------------- */}
        <div className="grid grid-cols-5 items-center justify-items-center gap-4 relative">
          {partners.map(({ id, name, image, alt, bgColor, size }) => (
            <div
              key={id}
              className="flex items-center justify-center group cursor-pointer"
            >
              <div
                className={`
                  relative flex items-center justify-center rounded-full
                  ${bgColor}
                  transition-transform duration-300 group-hover:scale-110
                  group-hover:shadow-lg
                `}
                style={{ width: size, height: size }}
              >
                <Image
                  src={image}
                  alt={alt}
                  width={size * 0.52}
                  height={size * 0.52}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};