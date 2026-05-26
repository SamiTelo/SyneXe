import { AboutSection } from "./components/About";
import { BlogSection } from "./components/Blog";
import { CounterSection } from "./components/Counter";
import { CtaSection } from "./components/Cta";
import { FaqSection } from "./components/Faq";
import { Footer } from "./components/Footer";
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
        <HeroSection/>
        <AboutSection/>
        <CounterSection/>
        <ServiceSection/>
        <PartnersSection/>
        <TeamSection/>
        <PricingSection/>
        <TestimonialSection/>
        <FaqSection/>
        <CtaSection/>
        <BlogSection/>
      </main>
         {/* ---------------------------
        global  Footer
      ---------------------------- */}
        <Footer/>
    </>
  );
};
