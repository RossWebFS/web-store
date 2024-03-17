import { NavLogo } from "../components/NavLogo";
import { Navbar } from "../components/Navbar";
import { BreadCrumbs } from "../components/BreadCrumbs";

export const Header = () => {
  return (
    <>
      <header className="flex px-5 justify-between mt-2 md:max-w-screen-xl md:mx-auto">
        <NavLogo />
        <Navbar />
      </header>
      <BreadCrumbs/>
    </>
  );
};
