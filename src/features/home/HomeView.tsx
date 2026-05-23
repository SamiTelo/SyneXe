import { AboutSection } from "./components/about";
import { CounterSection } from "./components/counter";
import { Header } from "./components/Header";
import { HeroSection } from "./components/Hero";
import { PartnersSection } from "./components/Partner";
import { ServiceSection } from "./components/Service";

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
      </main>
         {/* ---------------------------
        global  Footer
      ---------------------------- */}
    
    </>
  );
};
