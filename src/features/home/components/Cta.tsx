import { ArrowUpRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <section id="cta" className="w-full bg-white px-6 py-10 md:pt-36 md:pb-20">
      {/*----------------------------------------------
           Main Content Grid
        ----------------------------------------------------*/}
      <div className="grid grid-cols-1 max-w-7xl mx-auto px-0 md:px-6">
        {/* ----------------------------------------
              BLOC — CTA Card
           ----------------------------------------------- */}
        <div className="relative grid grid-cols-1 place-items-center bg-[#5B4EE8] rounded-4xl px-8 py-16 text-center gap-6">
          {/* ----------------------------------------
            Wavy SVG background texture
        ----------------------------------------------- */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-contan bg-no-repeat bg-center bg-[url('/assets/counter-bg.svg')]"></div>

          {/* Heading */}
          <h2 className="text-white text-3xl md:text-[38px] font-bold leading-tight w-fit">
            Propulsez Votre Entreprise avec Nos Solutions IT !
          </h2>

          {/* Description */}
          <p className="text-white/80 sm:text-[16px] md:text-[16px] text-sm leading-relaxed w-fit px-0 md:px-20">
            Faites passer votre infrastructure au niveau supérieur grâce à nos
            solutions technologiques sur mesure. Que vous ayez besoin d&apos;une
            performance optimale, de ressources dédiées ou d&apos;une
            flexibilité totale pour piloter vos systèmes, nous avons la réponse
            adaptée à vos enjeux.
          </p>

          {/* CTA Button */}
          <a
            href={`mailto:contactsynexa7@gmail.com?subject=${encodeURIComponent(
              "Demande de devis",
            )}&body=${encodeURIComponent(
              "Bonjour, je souhaite obtenir un devis ou un forfait pour vos services.",
            )}`}
            className="
              inline-flex items-center gap-2
              bg-white text-[#5B4EE8]
              font-bold text-sm tracking-wide
              px-8 py-4 rounded-full
              hover:bg-[#f0eeff] transition-colors duration-200
              shadow-sm
            "
          >
            Démarrer Avec Confiance
            <ArrowUpRight className="w-4 h-4 text-[#5B4EE8]" />
          </a>
        </div>
      </div>
    </section>
  );
};
