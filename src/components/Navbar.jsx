import { useState } from "react";
import { Button } from "./Button";
import { useProductContext } from "../contexts/ProductProvider";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const [searchValue, setSearchvalue] = useState("");
  const { productsData, cartProducts } = useProductContext();

  return (
    <nav className="flex items-center show-nav">
      <ul className="flex">
        <li>
          <NavLink to="/products" className="navlink mx-2">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/sale" className="navlink mx-2">
            Sale
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="navlink mx-2">
            Cart
          </NavLink>
          <span className=" text-white bg-orange-500 px-3 py-1 mr-3 rounded-full">
            {cartProducts.length}
          </span>
        </li>
      </ul>

      <div>
        <input
          className="py-0.5 px-3 border border-gray-300 rounded outline-orange-500"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchvalue(e.target.value)}
        />

        <ul
          className={`${
            searchValue ? "" : "hidden"
          } flex flex-col scrollbar h-36 overflow-hidden overflow-y-scroll bg-white w-52 absolute z-10 p-2 shadow-lg rounded-lg`}
        >
          {productsData.filter((i) =>
            i.title.toLowerCase().includes(searchValue.toLowerCase())
          ).length ? (
            productsData
              .filter((i) =>
                i.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((i) => (
                <li
                  key={i.id}
                  className="py-2 hover:bg-gray-300 cursor-pointer"
                >
                  {i.title}
                </li>
              ))
          ) : (
            <li className="h-full flex justify-center items-center">
              <span>"No suggestion"</span>
            </li>
          )}
        </ul>

        <Button className={"shadow-lg bg-orange-500 shadow-gray-300 ml-3 hover:bg-blue-500"}>Search</Button>
      </div>
    </nav>
  );
};
