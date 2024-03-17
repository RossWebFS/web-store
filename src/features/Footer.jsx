import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const Footer = () => {
    const linkStyles = "hover:text-orange-500 transition-all duration-200 ease-in-out"
  return (
    <footer className="bg-gray-50 h-56 px-20 mt-16 flex flex-col justify-center">
      <section className="flex justify-between">
        <div className="w-96">
          <h1 className="orbitron-font font-black text-2xl">Outfit</h1>
          <p className="rubik-font leading-4 mt-3">
            Discover Your Distinctive Look: Feshioned with Precision. Worn with
            Confidence
          </p>
        </div>

        <div className="rubik-font flex flex-col items-end w-96">
          <ul className="flex text-lg">
            <li className="px-5">
              <NavLink to="/" className={linkStyles}>Home</NavLink>
            </li>
            <li className="px-5">
              <NavLink to="/products" className={linkStyles}>Products</NavLink>
            </li>
            <li className="px-5">
            <NavLink to="/sale" className={linkStyles}>Sale</NavLink>
            </li>
            <li className="px-5">
            <NavLink to="/cart" className={linkStyles}>Cart</NavLink>
            </li>
            <li className="px-5">
            <NavLink to="/checkout" className={linkStyles}>Checkout</NavLink>
            </li>
          </ul>

          <ul className="flex text-lg mt-5">
            <li className="px-3">
              <a href="">
              <FaFacebook cursor={"pointer"} size={32} />
              </a>
            </li>
            <li className="px-3">
              <a className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <FaInstagram cursor={"pointer"} color="white" radius={100} size={24} />
              </a>
            </li>
            <li className="px-3">
              <a className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                <FaSnapchat cursor={"pointer"} color="white" radius={100} size={24} />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="my-12 self-center w-11/12 h-0.5 bg-gray-300"></div>

      <ul className="pb-4 flex justify-between items-center rubik-font">
        <li>
          <a className={linkStyles} href="">Privacy Policy</a>
        </li>
        <li>
          <a className={linkStyles} href="">2023 Mugna Technologies, Inc.</a>
        </li>
        <li>
          <a className={linkStyles} href="">Terms & Conditions</a>
        </li>
      </ul>
    </footer>
  );
};
