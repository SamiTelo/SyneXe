import Image from "next/image";
import { SheetSide } from "./NavbarMobile";

export const NavBar = () => {
  return (
    <nav className="max-w-7xl mx-6 md:mx-auto mb-16 md:mb-20 flex items-center justify-between rounded-full bg-foreground px-6 md:px-3 py-4 md:py-3 text-background backdrop-blur">
      
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold tracking-wider">
        <div className="-ml-6 md:ml-0 h-10 w-50 md:h-10 md:w-50 rounded-full relative">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm">
        
        <a
          href="#hero"
          className="text-primary font-medium transition-colors"
        >
          Home
        </a>

        <a
          href="#about"
          className="hover:text-primary transition-colors"
        >
          A propos
        </a>

        <a
          href="#competence"
          className="hover:text-primary transition-colors"
        >
          Services
        </a>

        <a
          href="#experience"
          className="hover:text-primary transition-colors"
        >
          Faqs
        </a>

        <a
          href="#project"
          className="hover:text-primary transition-colors"
        >
          Pricing
        </a>

        <a
          href="#contact"
          className="hover:text-primary transition-colors"
        >
          Contact
        </a>
      </div>

      {/* Desktop Button */}
      <a
        href="/assets/cv/cv-tiemtore-samuel.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold bg-primary text-primary-foreground hover:bg-background hover:text-foreground transition-all duration-300"
      >
        Demander un devis
      </a>

      {/* Mobile Menu */}
      <SheetSide />
    </nav>
  );
};