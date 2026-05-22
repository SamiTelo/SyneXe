import { Header } from "./components/Header"
import { HeroSection } from "./components/Hero"


export const HomeView = () => {
    return (
        <>
         {/* ---------------------------
        global Header
       ---------------------------- */}
        <Header/>
      {/* ---------------------------
        Main content
      ---------------------------- */}
        <HeroSection/>
        </>
    )
}