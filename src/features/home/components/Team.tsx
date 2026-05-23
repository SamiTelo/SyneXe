import Image from "next/image";
import { Plus } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Kowalski",
    role: "IT Solutions Architect",
    image: "/images/team/sarah.jpg",
  },
  {
    id: 2,
    name: "Marcus Diallo",
    role: "Cloud & DevOps Engineer",
    image: "/images/team/marcus.jpg",
  },
  {
    id: 3,
    name: "Elena Moretti",
    role: "Cybersecurity Expert",
    image: "/images/team/elena.jpg",
  },
];

export const TeamSection = () => {
  return (
    <section className="relative w-full bg-[#f5f6fa] py-24 px-6 overflow-hidden">
      {/*----------------------------------------------
           Background Decorative Shape
      ----------------------------------------------*/}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-200/60 rounded-br-[120px] pointer-events-none" />

      {/*----------------------------------------------
           Main Content Grid
      ----------------------------------------------*/}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 gap-16">
        {/* ----------------------------------------
             Header Block
        ---------------------------------------- */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="text-[#5b4fcf] text-xs font-semibold uppercase tracking-[0.2em]">
            Notre Équipe
          </span>
          <h2 className="text-[#0f0f2d] text-4xl font-extrabold leading-tight">
            Découvrez Nos Experts{" "}
            <span className="text-[#5b4fcf]">Technologiques</span>
          </h2>
        </div>

        {/* ----------------------------------------
             Cards Grid Block
        ---------------------------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="py-5 px-4 flex flex-col items-center gap-1">
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