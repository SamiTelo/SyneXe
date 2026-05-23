import { ArrowUpRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="w-full bg-white px-6 py-16">
      {/*----------------------------------------------
           Main Content Grid
        ----------------------------------------------------*/}
      <div className="grid grid-cols-1 max-w-6xl mx-auto">
        {/* ----------------------------------------
              BLOC — CTA Card
           ----------------------------------------------- */}
        <div className="grid grid-cols-1 place-items-center bg-[#5B4EE8] rounded-3xl px-8 py-16 text-center gap-6">

          {/* Heading */}
          <h2 className="text-white text-4xl font-extrabold leading-tight max-w-2xl">
            Propulsez Votre Entreprise avec Nos Solutions IT !
          </h2>

          {/* Description */}
          <p className="text-white/80 text-base leading-relaxed max-w-2xl">
            Faites passer votre infrastructure au niveau supérieur grâce à nos solutions technologiques
            sur mesure. Que vous ayez besoin d&apos;une performance optimale, de ressources dédiées ou
            d&apos;une flexibilité totale pour piloter vos systèmes, nous avons la réponse adaptée à
            vos enjeux.
          </p>

          {/* CTA Button */}
          <button
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
            <ArrowUpRight className="w-4 h-4 text-red-500" />
          </button>

        </div>
      </div>
    </section>
  );
};