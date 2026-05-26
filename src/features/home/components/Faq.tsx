"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "Quels services propose votre agence IT ?",
    answer:
      "Nous accompagnons les entreprises dans leur transformation digitale à travers le développement web et mobile, l’optimisation SEO, la création d’interfaces modernes ainsi que la mise en place de solutions digitales performantes et sécurisées.",
  },

  {
    id: "faq-2",
    question: "Combien de temps prend la réalisation d’un projet ?",
    answer:
      "La durée dépend de la complexité du projet et des fonctionnalités demandées. Un site vitrine peut être livré en quelques semaines, tandis qu’une application web ou mobile plus avancée nécessite généralement plusieurs phases de conception, développement et tests.",
  },

  {
    id: "faq-3",
    question: "Proposez-vous un support après la livraison ?",
    answer:
      "Oui, nous assurons un accompagnement après la mise en ligne de votre projet. Cela inclut la maintenance, les mises à jour, l’assistance technique ainsi que l’optimisation continue des performances et de la sécurité.",
  },

  {
    id: "faq-4",
    question: "Comment démarre une collaboration avec votre équipe ?",
    answer:
      "Nous commençons par une analyse de vos besoins et objectifs afin de proposer une solution adaptée. Après validation du cahier des charges, notre équipe lance les phases de design, développement et déploiement du projet.",
  },
];

export const FaqSection = () => {
  return (
    <section id="faq" className="relative w-full bg-white overflow-hidden py-20">
      {/*----------------------------------------------
           Background: Circuit Board SVG
      ----------------------------------------------*/}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      ></div>

      {/*----------------------------------------------
           Main Content Grid — Left | Right
      ----------------------------------------------*/}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-30 md:gap-10 items-center">
        {/* ----------------------------------------
             LEFT BLOC — Header + Accordion
        ---------------------------------------- */}
        <div className="grid grid-rows-[auto_auto] gap-10 md:gap-8">
        {/*----------------------------------------------
           Header
      ----------------------------------------------*/}
          <div className="grid gap-3">
           {/* Badge */}
            <div
              className="flex justify-start"
            >
              <div className="inline-flex items-center gap-3 bg-accent text-primary px-6 py-3 mb-0 rounded-full text-sm font-medium">
                Services
              </div>
            </div>
        <h2 className="mt-3 text-3xl md:text-[38px] font-bold text-gray-900">
          Réponses à vos{" "}
          <span className="text-primary">Questions</span>
        </h2>
            {/* Description */}
          <p className="text-gray-500 sm:text-[16px] md:text-[16px] text-sm leading-relaxed max-w-lg">
            Nous concevons des architectures numériques robustes et évolutives
            pour accompagner la transformation digitale de votre entreprise.
            Notre expertise couvre l&apos;intégration cloud et
            le développement
          </p>
          </div>

          {/*-----------------------------------------------
              Accordion
          ----------------------------------------------------*/}
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-1"
            className="grid gap-3"
          >
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-0 rounded-none data-[state=open]:rounded-none"
              >
                <AccordionTrigger
                  className="
                    group px-5 py-5 text-sm font-bold text-left no-underline hover:no-underline
                    data-[state=open]:bg-primary data-[state=open]:text-white
                    data-[state=closed]:bg-white data-[state=closed]:text-[#0F0A2A]
                    data-[state=closed]:border-b data-[state=closed]:border-[#E5E7EB]
                    transition-colors duration-200 rounded-none
                    [&>svg]:hidden
                  "
                >
                  <span className="flex-1 text-[18px]">{faq.question}</span>
                  {/* Custom icon: − when open, + when closed */}
                  <span
                    className="
                      ml-4 w-6 h-6 flex items-center justify-center rounded
                      text-lg font-light leading-none shrink-0
                      group-data-[state=open]:text-white
                      group-data-[state=closed]:text-[#0F0A2A]
                    "
                  >
                    <span className="group-data-[state=open]:block hidden">
                      −
                    </span>
                    <span className="group-data-[state=closed]:block hidden">
                      +
                    </span>
                  </span>
                </AccordionTrigger>

                <AccordionContent className="px-5 pt-4 pb-6 text-sm text-[#6B7280] leading-relaxed border border-[#E5E7EB]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* ----------------------------------------
             RIGHT BLOC — Circle Image
        ---------------------------------------- */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative flex justify-center ">
            <div className="w-full max-w-3xl">
              <Image
                src="/assets/faq-img.png"
                alt="faq"
                width={600}
                height={600}
                className="w-145 h-auto sm:sm:w-120 md:w-126 md:h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
