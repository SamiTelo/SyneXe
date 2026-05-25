"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const plans = [
  {
    id: 1,
    name: "Starter Pack",
    description:
      "Idéal pour les petites entreprises, startups et projets de lancement.",
    price: "249",
    features: [
      "Site vitrine moderne et responsive",
      "Jusqu’à 5 pages incluses",
      "Optimisation SEO de base",
      "Design UI/UX personnalisé",
      "Formulaire de contact sécurisé",
      "Intégration WhatsApp & réseaux sociaux",
      "Hébergement & nom de domaine inclus (1 an)",
      "Support technique pendant 30 jours",
    ],
  },

  {
    id: 2,
    name: "Business Pack",
    description: "Solution complète pour développer votre présence digitale.",
    price: "499",
    features: [
      "Application web ou site professionnel",
      "Jusqu’à 10 pages dynamiques",
      "Tableau de bord administrateur",
      "Optimisation SEO avancée",
      "Performance & sécurité renforcées",
      "Intégration API & base de données",
      "Responsive mobile & tablette",
      "Support technique pendant 3 mois",
    ],
  },

  {
    id: 3,
    name: "Enterprise Pack",
    description:
      "Offre premium pour entreprises et plateformes à grande échelle.",
    price: "999",
    features: [
      "Développement web & mobile sur mesure",
      "Architecture scalable et sécurisée",
      "Système d’authentification avancé",
      "Intégration Cloud & services tiers",
      "Optimisation SEO & performances premium",
      "Maintenance et monitoring inclus",
      "Support prioritaire 24/7",
      "Accompagnement technique personnalisé",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="w-full bg-white py-28 px-6">
      {/*----------------------------------------------
           Header
      ----------------------------------------------*/}
      <div className="text-center mb-22">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 bg-accent text-primary px-6 py-3 mb-4 rounded-full text-sm font-medium">
            Prix
          </div>
        </div>
        <h2 className="mt-3 text-3xl md:text-[38px] font-bold text-gray-900">
          Nos Différents <span className="text-indigo-600">Offres</span>
        </h2>
      </div>

      {/*----------------------------------------------
           Main Content Grid
      ----------------------------------------------*/}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-14 px-O md:px-6">
        {/* ----------------------------------------
             Cards Grid Block
        ---------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-2xl overflow-hidden flex flex-col bg-[#eef0f8] hover:shadow-lg"
            >
              {/* ----------------------------------------
                   Card Header Block (dark)
              ---------------------------------------- */}
              <div className="relative bg-[#111827] px-7 pt-8 pb-6 overflow-hidden">
                {/* Decorative purple blobs */}
                <div className="absolute -top-5 right-0 w-20 h-20 rounded-full bg-[#5b4fcf] opacity-80" />
                <div className="absolute top-7 -right-3 w-10 h-10 rounded-full bg-[#7c6fe0] opacity-60" />

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="text-white text-xl font-bold mb-4">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
              </div>

              {/* ----------------------------------------
                   Price Block (dark)
              ---------------------------------------- */}
              <div className="bg-[#0f172a] border-t border-white/10 px-7 py-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-white text-3xl font-extrabold">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400 text-sm font-medium">
                    /Par Mois
                  </span>
                </div>
              </div>

              {/* ----------------------------------------
                   Features & CTA Block (light)
              ---------------------------------------- */}
              <div className="flex flex-col gap-6 px-7 py-12 flex-1">
                {/* Features list */}
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2
                        size={19}
                        className="text-[#5b4fcf] shrink-0"
                        strokeWidth={2}
                      />
                      <span className="text-gray-500 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-auto pt-2">
                  <a
                    href={`mailto:contactsynexa7@gmail.com?subject=${encodeURIComponent(
                      "Demande de devis",
                    )}&body=${encodeURIComponent(
                      "Bonjour, je souhaite obtenir un devis ou un forfait pour vos services.",
                    )}`}
                    className="inline-flex items-center gap-3 text-white text-sm px-6 py-4 rounded-full transition hover:opacity-90 active:scale-95"
                    style={{ background: "#111827" }}
                  >
                    <ArrowUpRight size={18} className="shrink-0" />
                    <span className="border-l border-white pl-3">
                      Souscrire Maintenant
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
