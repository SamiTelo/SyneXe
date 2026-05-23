import { ArrowRight, CheckCircle2 } from "lucide-react";

const plans = [
  {
    id: 1,
    name: "Silver Package",
    description: "Plan tarifaire pour agence IT & solutions technologiques",
    price: "199.00",
    features: [
      "30 Jours d'essai gratuit",
      "Fonctionnalités illimitées",
      "Support multi-langues",
      "Sauvegarde & restauration des données",
      "Synchronisation Cloud Database",
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    description: "Plan tarifaire pour agence IT & solutions technologiques",
    price: "299.00",
    features: [
      "30 Jours d'essai gratuit",
      "Fonctionnalités illimitées",
      "Support multi-langues",
      "Sauvegarde & restauration des données",
      "Synchronisation Cloud Database",
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    description: "Plan tarifaire pour agence IT & solutions technologiques",
    price: "399.00",
    features: [
      "30 Jours d'essai gratuit",
      "Fonctionnalités illimitées",
      "Support multi-langues",
      "Sauvegarde & restauration des données",
      "Synchronisation Cloud Database",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
      {/*----------------------------------------------
           Main Content Grid
      ----------------------------------------------*/}
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-14">
        {/* ----------------------------------------
             Header Block
        ---------------------------------------- */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="text-[#5b4fcf] text-xs font-semibold uppercase tracking-[0.2em]">
            Nos Offres
          </span>
          <h2 className="text-[#0f0f2d] text-4xl font-extrabold leading-tight">
            Choisissez Votre Plan{" "}
            <span className="text-[#5b4fcf]">IT Idéal</span>
          </h2>
        </div>

        {/* ----------------------------------------
             Cards Grid Block
        ---------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-2xl overflow-hidden flex flex-col bg-[#eef0f8]"
            >
              {/* ----------------------------------------
                   Card Header Block (dark)
              ---------------------------------------- */}
              <div className="relative bg-[#111827] px-7 pt-8 pb-6 overflow-hidden">
                {/* Decorative purple blobs */}
                <div className="absolute -top-5 -left-3 w-20 h-20 rounded-full bg-[#5b4fcf] opacity-80" />
                <div className="absolute -top-2 left-10 w-10 h-10 rounded-full bg-[#7c6fe0] opacity-60" />

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="text-white text-xl font-bold mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
              </div>

              {/* ----------------------------------------
                   Price Block (dark)
              ---------------------------------------- */}
              <div className="bg-[#0f172a] border-t border-white/10 px-7 py-5">
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
              <div className="flex flex-col gap-6 px-7 py-7 flex-1">
                {/* Features list */}
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2
                        size={19}
                        className="text-[#5b4fcf] flex-shrink-0"
                        strokeWidth={2}
                      />
                      <span className="text-[#1e1e3a] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-auto pt-2">
                  <button className="flex items-center gap-0 bg-[#111827] text-white text-xs font-bold uppercase tracking-widest rounded-full overflow-hidden hover:bg-[#1e2a40] transition-colors duration-200 cursor-pointer">
                    <span className="flex items-center justify-center w-10 h-10 border-r border-white/20">
                      <ArrowRight size={15} strokeWidth={2.5} />
                    </span>
                    <span className="px-5 py-3">Souscrire Maintenant</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};