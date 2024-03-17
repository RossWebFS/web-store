import { NavLink } from "react-router-dom";

export const NavLogo = () => {
  return (
    <NavLink
      to="/"
      className="p-2 orbitron-font font-black text-lg outline-none focus:bg-gray-200"
    >
      SHOPLY
    </NavLink>
  );
};
