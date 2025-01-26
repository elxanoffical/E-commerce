import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import dashboard from "../assets/images/layoutAdmin/Dashboard.svg";
import products from "../assets/images/layoutAdmin/Product.svg";
import cart from "../assets/images/layoutAdmin/Cart.svg";
import users from "../assets/images/layoutAdmin/Users.svg";
import star from "../assets/images/layoutAdmin/Empty Star.svg";
import settings from "../assets/images/layoutAdmin/Settings.svg";
import add from "../assets/images/layoutAdmin/Add.svg";
import logo from "../assets/images/footerLogo.svg";

const AdminPage = () => {
  return (
    <section className="flex container ">
      <div className="flex flex-col  w-[260px] py-4">
        <div className="flex items-center gap-3 mb-14">
          <img className="" src={logo} alt="" />
          <h1 className="text-[20px]">Admin</h1>
        </div>

        <div className=" flex flex-col gap-4">
          <div className="flex items-center gap-[10px] py-2  hover:bg-neutral-200 cursor-pointer transition-all duration-300 rounded-md">
            <img src={dashboard} alt="" />
            <NavLink>Dashboard</NavLink>
          </div>
          <div className="flex items-center gap-[10px] py-2  hover:bg-neutral-200 cursor-pointer transition-all duration-300 rounded-md">
            <img src={products} alt="" />
            <NavLink to="products">Products</NavLink>
          </div>
          <div className="flex items-center gap-[10px] py-2  hover:bg-neutral-200 cursor-pointer transition-all duration-300 rounded-md">
            <img src={cart} alt="" />
            <NavLink to="orders">Orders</NavLink>
          </div>
          <div className="flex items-center gap-[10px] py-2  hover:bg-neutral-200 cursor-pointer transition-all duration-300 rounded-md">
            <img src={users} alt="" />
            <NavLink to="customers">Customers</NavLink>
          </div>
          <div className="flex items-center gap-[10px] py-2  hover:bg-neutral-200 cursor-pointer transition-all duration-300 rounded-md">
            <img src={star} alt="" />
            <NavLink to="reviewsAdmin">Reviews</NavLink>
          </div>
          <div className="flex items-center gap-[10px] py-2  hover:bg-neutral-200 cursor-pointer transition-all duration-300 rounded-md">
            <img src={settings} alt="" />
            <NavLink to="settings">Settings</NavLink>
          </div>
          <div className="flex items-center gap-[10px] py-2  mt-20 hover:bg-neutral-200 cursor-pointer transition-all duration-300 rounded-md">
            <img src={add} alt="" />
            <p>Extras</p>
          </div>
        </div>
      </div>

      <div className=" w-full pl-8 bg-neutral-100 py-4">
        <Outlet />
      </div>
    </section>
  );
};

export default AdminPage;
