import React, { useState } from "react";
import Logomark from "../assets/images/Logomark.svg";
import cart from "../assets/icons/global/cart.svg";
import AdminUser from "../assets/icons/global/Admin user.svg";
import search from "../assets/icons/global/Search.svg";
import { Link } from "react-router-dom";
import Cart from "./cart";
import TopAds from "./topAds";
import menu from "../assets/icons/global/Menu.svg";

const Header = () => {
  const [isHover, setIsHover] = useState();

  return (
    <header className=" flex flex-col">
      <TopAds 
      text=" Get 25% OFF on your first order."
      btnText={"Order Now"} />

      <nav className="flex justify-between items-center h-[84px] container mx-auto">
        <div className="flex items-center justify-between gap-10 xl:gap-24">
          <Link to="/" className="flex items-center gap-3">
            <img src={Logomark} alt="" />
            <h1 className="text-xl font-semibold">Ecommerce</h1>
          </Link>

          <ul className="lg:flex hidden items-center gap-8">
            <Link
              to="/"
              className="text-neutral-500 hover:text-neutral-700 transition-all duration-200"
            >
              Home
            </Link>
            <Link
              to="/listingPage"
              className="text-neutral-500 hover:text-neutral-700 transition-all duration-200"
            >
              Categories
            </Link>
            <li className="text-neutral-500 hover:text-neutral-700 transition-all duration-200 cursor-pointer">
              About
            </li>
            <li className="text-neutral-500 hover:text-neutral-700 transition-all duration-200 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-8 ">
          <div className="hidden relative overflow-hidden md:block border border-neutral-100 rounded-md py-2">
            <img
              src={search}
              className=" cursor-pointer absolute top=[50%] left-2 w-6 h-6"
              alt=""
            />
            <input
              className="outline-none text-sm pl-9"
              type="text"
              placeholder="Search products"
            />
          </div>

          <div
            className=" relative"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <img className=" cursor-pointer" src={cart} alt="" />
            <div
              className={`absolute top-full right-0 shadow-lg transition-all duration-300 ease-in-out transform ${
                isHover
                  ? "opacity-100 "
                  : "opacity-0 scale-100 pointer-events-none duration-300"
              }`}
            >
              <Cart />
            </div>
          </div>

          <Link to="/login">
            <img src={AdminUser} alt="" />
          </Link>

          <img className="sm:hidden" src={menu} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
