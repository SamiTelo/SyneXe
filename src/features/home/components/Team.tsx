import Image from "next/image";
import { Plus } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Marcus Diallo",
    role: "IT Solutions Architect",
    image: "/assets/team-1.png",
  },
  {
    id: 2,
    name: "Sarah Kowalski",
    role: "Desinger UI/UX",
    image: "/assets/team-2.png",
  },
  {
    id: 3,
    name: "Elena Moretti",
    role: "Cybersecurity Expert",
    image: "/assets/team.png",
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="relative w-full bg-white py-10 md:py-24 px-6 overflow-hidden">
      {/*----------------------------------------------
           Header
      ----------------------------------------------*/}
      <div className="text-center mb-22">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 bg-accent text-primary px-6 py-3 mb-4 rounded-full text-sm font-medium">
            Equipes
          </div>
        </div>
        <h2 className="mt-3 text-3xl md:text-[38px] font-bold text-gray-900">
         Notre Équipe <span className="text-indigo-600"> d’Experts</span>
        </h2>
      </div>

      {/*----------------------------------------------
           Background Decorative Shape
      ----------------------------------------------*/}
      <div className="absolute top-50 left-0 w-42 h-42 bg-gray-200/60 pointer-events-none"style={{
              borderRadius: "62% 38% 46% 54% / 60% 44% 56% 40%",
            }}
 />

      {/*----------------------------------------------
           Main Content Grid
      ----------------------------------------------*/}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 gap-16 px-0 md:px-6">
        {/* ----------------------------------------
             Cards Grid Block
        ---------------------------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col"
            >
              {/* ----------------------------------------
                   Image Block
              ---------------------------------------- */}
              <div className="relative w-full aspect-[4/4.2]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Plus button */}
                <button
                  aria-label={`Voir le profil de ${member.name}`}
                  className="
                    absolute bottom-4 right-4
                    w-10 h-10 rounded-full
                    bg-[#5b4fcf] text-white
                    flex items-center justify-center
                    shadow-lg
                    hover:bg-[#4a3fbf] transition-colors duration-200
                    cursor-pointer
                  "
                >
                  <Plus size={18} strokeWidth={2.5} />
                </button>
              </div>

              {/* ----------------------------------------
                   Info Block
              ---------------------------------------- */}
              <div className="py-8 px-4 flex flex-col items-center gap-2">
                <h3 className="text-[#0f0f2d] text-lg font-bold">
                  {member.name}
                </h3>
                <p className="text-[#5b4fcf] text-sm font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
