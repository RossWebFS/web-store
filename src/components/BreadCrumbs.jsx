import { NavLink } from "react-router-dom";

export const BreadCrumbs = () => {
  return (
    <ul className="mt-12 px-5 flex max-w-screen-sm md:max-w-screen-xl md:mx-auto">
      <li className="px-2 hove">
        <NavLink to="/" className="navlink mx-1">
          Home
        </NavLink>
      </li>
      <span className="text-gray-400">/</span>
      <li className="px-2">
        <NavLink to="/products" className="navlink mx-1">
          Products
        </NavLink>
      </li>
    </ul>
  );
};
