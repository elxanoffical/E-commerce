import React from "react";
import Logomark from "../assets/images/Logomark.svg";
import cart from "../assets/icons/global/cart.svg";
import AdminUser from "../assets/icons/global/Admin user.svg";
import search from "../assets/icons/global/Search.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" flex flex-col">
      <div className="bg-neutral-900 h-10 flex items-center justify-center">
        <span className="text-white font-light">
          Get 25% OFF on your first order. Order Now
        </span>
      </div>

      <nav className="flex justify-between items-center h-[84px] container  mx-auto">
        <div className="flex items-center justify-between gap-24">
          <div className="flex items-center gap-3">
            <img src={Logomark} alt="" />
            <h1 className="text-xl font-semibold">Ecommerce</h1>
          </div>

          <ul className="flex items-center gap-8">
            <Link to="/" className="text-neutral-500">Home</Link>
            <select className="text-neutral-500" name="" id="">
              <option value="">Categories</option>
            </select>
            <li className="text-neutral-500">About</li>
            <li className="text-neutral-500">Contact</li>
          </ul>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex border rounded-md px-4 py-3 space-x-2">
            <img src={search} alt="" />
            <input
              className="outline-none"
              type="text"
              placeholder="Search products"
            />
          </div>
          <div>
            <img src={cart} alt="" />
          </div>
          <div>
            <img src={AdminUser} alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
