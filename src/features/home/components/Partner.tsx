"use client";

import Image from "next/image";

const partners = [
  {
    id: 1,
    image: "/assets/dropbox.png",
    alt: "Dropbox",
    bgColor: "bg-[#dde3f5]",
    size: 120,
  },
  {
    id: 2,
    image: "/assets/mastercard.png",
    alt: "Google",
    bgColor: "bg-[#ecdff5]",
    size: 150,
  },
  {
    id: 3,
    image: "/assets/paypal-logo.png",
    alt: "Campfire",
    bgColor: "bg-[#dde3f5]",
    size: 100,
  },
  {
    id: 4,
    image: "/assets/netflix.png",
    alt: "Slack",
    bgColor: "bg-[#fad9d5]",
    size: 158,
  },
  {
    id: 5,
    image: "/assets/mastercard.png",
    alt: "PayPal",
    bgColor: "bg-[#dde3f5]",
    size: 120,
  },
];

export const PartnersSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden pb-46 pt-18 px-4 md:px-8 lg:px-16">
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
          Nos Meilleurs{" "}
          <span className="text-indigo-600">Partner</span>
        </h2>
      </div>

      {/*----------------------------------------------
           Decorative background dots
      ----------------------------------------------*/}
      {/* Top-left ghost circle */}
      <div className="absolute -left-10 top-[52%] w-25 h-25 rounded-full border border-gray-200 opacity-60" />
      {/* Bottom-right ghost circle */}
      <div className="absolute right-[6%] bottom-[10%] w-20 h-20 rounded-full bg-gray-100 opacity-50" />
      {/* Small purple dots */}
      <div className="absolute left-[23%] top-[38%] w-2.5 h-2.5 rounded-full bg-indigo-500 opacity-80" />
      <div className="absolute right-[20%] top-[30%] w-2 h-2 rounded-full bg-indigo-500 opacity-70" />
      {/* Small red/coral dots */}
      <div className="absolute right-[30%] top-[52%] w-3.5 h-3.5 rounded-full bg-rose-400 opacity-80" />
      <div className="absolute right-[8%] top-[48%] w-9.5 h-9.5 rounded-full bg-rose-400 opacity-80" />
      {/* Small blue dot */}
      <div className="absolute left-[42%] top-[68%] w-2.5 h-2.5 rounded-full bg-indigo-400 opacity-60" />
      {/* Ghost circle bottom center */}
      <div className="absolute left-[48%] bottom-[12%] w-13.75 h-13.75 rounded-full bg-gray-200 opacity-40" />
      {/* Ghost circle top left small */}
      <div className="absolute left-[5%] bottom-[18%] w-10 h-10 rounded-full bg-indigo-100 opacity-50" />
      {/* Ghost circle bottom right */}
      <div className="absolute -right-5 bottom-[5%] w-22.5 h-22.5 rounded-full bg-gray-100 opacity-40" />

 

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
          {partners.map(({ id, image, alt, bgColor, size }) => (
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