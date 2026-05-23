import { AboutSection } from "./components/about";
import { CounterSection } from "./components/counter";
import { FaqSection } from "./components/Faq";
import { Header } from "./components/Header";
import { HeroSection } from "./components/Hero";
import { PartnersSection } from "./components/Partner";
import { PricingSection } from "./components/Pricing";
import { ServiceSection } from "./components/Service";
import { TeamSection } from "./components/Team";
import { TestimonialSection } from "./components/Testimonial";

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
        <TestimonialSection/>
        <FaqSection/>
      </main>
         {/* ---------------------------
        global  Footer
      ---------------------------- */}
    
    </>
  );
};
