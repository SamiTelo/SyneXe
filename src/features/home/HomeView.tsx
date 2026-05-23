import { AboutSection } from "./components/about";
import { CounterSection } from "./components/counter";
import { Header } from "./components/Header";
import { HeroSection } from "./components/Hero";
import { PartnersSection } from "./components/Partner";
import { PricingSection } from "./components/Pricing";
import { ServiceSection } from "./components/Service";
import { TeamSection } from "./components/Team";

export const HomeView = () => {
  return (
    <>
      {/* ---------------------------
        global Header
       ---------------------------- */}
      <Header />
      {/* ---------------------------
        Main content
      ---------------------------- */}
      <main>
        <HeroSection />
        <AboutSection />
        <CounterSection/>
        <ServiceSection/>
        <PartnersSection/>
        <TeamSection/>
        <PricingSection/>
      </main>
         {/* ---------------------------
        global  Footer
      ---------------------------- */}
    
    </>
  );
};
