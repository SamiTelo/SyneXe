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
    question: "Comment puis-je obtenir une assistance technique IT ?",
    answer:
      "Notre équipe d'experts est disponible 24h/24 et 7j/7 pour vous accompagner. Nous proposons un support multi-canal : ticketing, téléphone et intervention sur site. Chaque demande est traitée selon un SLA défini pour garantir une résolution rapide et efficace de vos incidents.",
  },
  {
    id: "faq-2",
    question: "Quels types de solutions cloud proposez-vous ?",
    answer:
      "Nous déployons des infrastructures cloud hybrides, privées et publiques sur AWS, Azure et GCP. Nos architectes conçoivent des solutions scalables et sécurisées adaptées à la taille et aux enjeux de votre organisation.",
  },
  {
    id: "faq-3",
    question: "Comment sécurisez-vous les données de mon entreprise ?",
    answer:
      "Nous appliquons une approche Zero Trust combinée à des audits de sécurité réguliers, du chiffrement bout en bout et une surveillance continue. Nos solutions sont conformes aux normes ISO 27001, RGPD et aux meilleures pratiques du secteur.",
  },
];

export const FaqSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-20">
      {/*----------------------------------------------
           Background: Circuit Board SVG
      ----------------------------------------------*/}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
       
      </div>

      {/*----------------------------------------------
           Main Content Grid — Left | Right
      ----------------------------------------------*/}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ----------------------------------------
             LEFT BLOC — Header + Accordion
        ---------------------------------------- */}
        <div className="grid grid-rows-[auto_auto] gap-8">

          {/* Header */}
          <div className="grid gap-3">
            <p className="text-[#6C4EF6] text-xs font-bold tracking-[0.2em] uppercase">
              Questions Fréquentes
            </p>
            <h2 className="text-[#0F0A2A] text-4xl font-extrabold leading-tight">
              Parlez-Nous de{" "}
              <span className="text-[#6C4EF6] font-normal">
                Vos Besoins IT ?
              </span>
            </h2>
          </div>

          {/* Accordion */}
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
                    group px-5 py-4 text-sm font-bold text-left no-underline hover:no-underline
                    data-[state=open]:bg-[#6C4EF6] data-[state=open]:text-white
                    data-[state=closed]:bg-white data-[state=closed]:text-[#0F0A2A]
                    data-[state=closed]:border-b data-[state=closed]:border-[#E5E7EB]
                    transition-colors duration-200 rounded-none
                    [&>svg]:hidden
                  "
                >
                  <span className="flex-1">{faq.question}</span>
                  {/* Custom icon: − when open, + when closed */}
                  <span
                    className="
                      ml-4 w-6 h-6 flex items-center justify-center rounded
                      text-lg font-light leading-none shrink-0
                      group-data-[state=open]:text-white
                      group-data-[state=closed]:text-[#0F0A2A]
                    "
                  >
                    <span className="group-data-[state=open]:block hidden">−</span>
                    <span className="group-data-[state=closed]:block hidden">+</span>
                  </span>
                </AccordionTrigger>

                <AccordionContent className="px-5 pt-4 pb-5 text-sm text-[#6B7280] leading-relaxed border-b border-[#E5E7EB]">
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
          <div
            className="
              relative w-[420px] h-[420px] rounded-full
              bg-[#6C4EF6] overflow-hidden shrink-0
            "
          >
            <Image
              src="/images/faq/advisor.png"
              alt="Conseillère IT"
              fill
              className="object-cover object-top"
              sizes="420px"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};