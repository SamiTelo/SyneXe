import { AboutSection } from "./components/about";
import { CounterSection } from "./components/counter";
import { Header } from "./components/Header";
import { HeroSection } from "./components/Hero";

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
      </main>
         {/* ---------------------------
        global  Footer
      ---------------------------- */}
    
    </>
  );
};
