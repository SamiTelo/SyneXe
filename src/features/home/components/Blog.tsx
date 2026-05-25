import Image from "next/image";
import { Calendar, MessageCircle, LayoutGrid, ArrowUpRight } from "lucide-react";

const articles = [
  {
    id: 1,
    image: "/assets/blog-3.png",
    date: "14 Dec, 2025",
    comments: 5,
    title: "Comment optimiser l'infrastructure Cloud de votre entreprise ?",
    excerpt:
      "Découvrez les meilleures pratiques pour migrer vers le cloud, réduire vos coûts d'exploitation et garantir la haute disponibilité de vos systèmes critiques.",
    author: "Par SyneXa",
  },
  {
    id: 2,
    image: "/assets/blog-2.png",
    date: "02 Janv, 2026",
    comments: 8,
    title: "Cybersécurité : Quels sont les défis du secteur IT en 2024 ?",
    excerpt:
      "Les cybermenaces évoluent rapidement. Nos experts analysent les nouvelles vulnérabilités et les stratégies de défense adaptées aux PME et grandes entreprises.",
    author: "Par SyneXa",
  },
  {
    id: 3,
    image: "/assets/blog-1.png",
    date: "18 Avr, 2026",
    comments: 3,
    title: "Intégration ERP & automatisation des processus métiers",
    excerpt:
      "L'automatisation intelligente transforme la productivité des organisations. Découvrez comment nos solutions ERP sur mesure s'adaptent à vos flux de travail.",
    author: "Par SyneXa",
  },
];

export const BlogSection = () => {
  return (
    <section id="blog " className="w-full pt-30 pb-40 md:pt-42 md:pb-56 px-6 relative overflow-hidden bg-contain bg-no-repeat bg-center bg-[url('/assets/blog-background.png')]">
       {/*----------------------------------------------
           Header
      ----------------------------------------------*/}
      <div className="text-center mb-22">
        {/* Badge */}
            <div
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-3 bg-accent text-primary px-6 py-3 mb-4 rounded-full text-sm font-medium">
                Blog
              </div>
            </div>
        <h2 className="mt-3 text-3xl md:text-[38px] font-bold text-gray-900">
          Nos Récent{" "}
          <span className="text-indigo-600">Blog</span>
        </h2>
      </div>

      {/*----------------------------------------------
           Main Content Grid
        ----------------------------------------------------*/}
      <div className="grid grid-cols-1 gap-12 max-w-7xl mx-auto px-0 md:px-6">

        {/* ----------------------------------------
              BLOC — Articles Grid (3 colonnes)
           ----------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="grid grid-rows-[auto_1fr] bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden"
            >
              {/* ---- Image ---- */}
              <div className="relative w-full h-72 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover p-4 md:p-6 rounded-3xl md:rounded-4xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* ---- Card Body ---- */}
              <div className="grid grid-rows-[auto_auto_1fr_auto] gap-3 p-5">

                {/* Meta — date & comments */}
                <div className="flex items-center gap-4 text-gray-400 text-xs">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#5B4EE8]" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-[#5B4EE8]" />
                    {article.comments} Commentaires
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-gray-900 text-base font-bold leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Footer — author & read more */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-1">
                  <span className="flex items-center gap-2 text-xs text-gray-500">
                    <LayoutGrid className="w-4 h-4 text-[#5B4EE8]" />
                    {article.author}
                  </span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-gray-400 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all duration-300 cursor-pointer">
                  <ArrowUpRight size={15} />
                </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};