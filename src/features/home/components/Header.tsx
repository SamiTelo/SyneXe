import { NavBar } from "./Navbar";


export const Header = () => {
  return (
    <header className=" top-8 w-full sticky md:top-6 inset-x-0 z-40 transition-all duration-300 ">
        <NavBar/>
    </header>
  );
};
