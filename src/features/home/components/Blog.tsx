import Image from "next/image";
import { Calendar, MessageCircle, ArrowRight, LayoutGrid } from "lucide-react";

const articles = [
  {
    id: 1,
    image: "/images/blog/blog-1.jpg",
    date: "14 Mar, 2024",
    comments: 5,
    title: "Comment optimiser l'infrastructure Cloud de votre entreprise ?",
    excerpt:
      "Découvrez les meilleures pratiques pour migrer vers le cloud, réduire vos coûts d'exploitation et garantir la haute disponibilité de vos systèmes critiques.",
    author: "Par SolTech",
  },
  {
    id: 2,
    image: "/images/blog/blog-2.jpg",
    date: "02 Avr, 2024",
    comments: 8,
    title: "Cybersécurité : Quels sont les défis du secteur IT en 2024 ?",
    excerpt:
      "Les cybermenaces évoluent rapidement. Nos experts analysent les nouvelles vulnérabilités et les stratégies de défense adaptées aux PME et grandes entreprises.",
    author: "Par SolTech",
  },
  {
    id: 3,
    image: "/images/blog/blog-3.jpg",
    date: "18 Avr, 2024",
    comments: 3,
    title: "Intégration ERP & automatisation des processus métiers",
    excerpt:
      "L'automatisation intelligente transforme la productivité des organisations. Découvrez comment nos solutions ERP sur mesure s'adaptent à vos flux de travail.",
    author: "Par SolTech",
  },
];

export const BlogSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 relative overflow-hidden">

      {/*----------------------------------------------
           Main Content Grid
        ----------------------------------------------------*/}
      <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">

        {/* ----------------------------------------
              BLOC — Section Header
           ----------------------------------------------- */}
        <div className="grid grid-cols-1 text-center gap-3">
          <span className="text-[#5B4EE8] text-xs font-semibold tracking-[0.2em] uppercase">
            Actualités & Articles
          </span>
          <h2 className="text-gray-900 text-4xl font-extrabold leading-tight">
            Restez Informé de Toutes Nos Actualités IT
          </h2>
        </div>

        {/* ----------------------------------------
              BLOC — Articles Grid (3 colonnes)
           ----------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="grid grid-rows-[auto_1fr] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* ---- Image ---- */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
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
                  <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-800 hover:text-[#5B4EE8] tracking-wide uppercase transition-colors duration-200">
                    Lire Plus
                    <ArrowRight className="w-3.5 h-3.5" />
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