import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ChevronRight from "../assets/icons/global/Chevron Right.svg";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { products } from "../data/productsListing";
import sellerImg2 from "../assets/images/bestSellerImg2.svg";
import share from "../assets/icons/global/Share.svg";
import star from "../assets/icons/global/star.svg";
import minus from "../assets/icons/global/Minus.svg";
import plus from "../assets/icons/global/Add.svg";
import heart from "../assets/icons/global/Heart.svg";
import more from "../assets/icons/global/More.svg";
import emptyStar from "../assets/icons/global/Empty Star.svg";

const ProductPage = () => {
  const { id } = useParams();
  console.log("useparams:", id);

  const product = products.find((item) => item.id === Number(id));
  console.log("products:", product);

  return (
    <>
      <Header />
      <div className="">
        <div className="h-[28px] flex items-center my-4 mb-2 ">
          <div className=" container mx-auto flex gap-1">
            <span className="font-medium text-neutral-500">Ecommerce </span>
            <img src={ChevronRight} alt="" />
            <span className="font-medium text-neutral-900">Search</span>
          </div>
        </div>

        <div className="container flex gap-[120px] mb-32">
          <div className="w-[534px] bg-neutral-100 flex flex-col gap-20 items-center py-6">
            <img className="h-[404px]" src={product.img} alt="" />
            <div className="flex items-center gap-2">
              <button className="bg-gray-400 focus:bg-black w-2 h-2 rounded-full"></button>
              <button className="bg-gray-400 focus:bg-black w-2 h-2 rounded-full"></button>
              <button className="bg-gray-400 focus:bg-black w-2 h-2 rounded-full"></button>
              <button className="bg-gray-400 focus:bg-black w-2 h-2 rounded-full"></button>
            </div>
          </div>

          <div className=" flex flex-col w-[440px] py-2">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <img src={share} alt="" />
            </div>

            <div className="flex items-center gap-2 mb-6">
              <span
                className="flex items-center gap-2 bg-neutral-100 py-[3px] px-4 rounded-2xl
              text-xs text-neutral-500 font-medium"
              >
                <img src={star} alt="" />
                4.2 — 54 Reviews
              </span>
              <span className="border py-[6px] font-medium text-neutral-500 px-4 rounded-2xl text-xs">
                IN STOCK
              </span>
            </div>

            <div className="flex gap-4 items-center mb-6">
              {product?.hasDiscount && (
                <p className="text-gray-400 text-[14px] line-through tracking-wider">
                  {product.beforePrice}
                </p>
              )}
              <p className="text-neutral-800 font-medium text-[16px] tracking-wide">
                {product.price}
              </p>
            </div>

            <div className="flex flex-col mb-4">
              <span className="text-[13px] text-neutral-500 font-medium tracking-wider">
                AVAILABLE COLORS
              </span>
              <div className="flex items-center gap-[10px]">
                <button className=" focus:border border-black w-7 h-7  rounded-full flex items-center justify-center">
                  <span className="w-5 h-5 bg-[#A3BEF8] rounded-full"></span>
                </button>
                <button className="focus:border border-black w-7 h-7  rounded-full flex items-center justify-center">
                  <span className="w-5 h-5 bg-[#FFD58A] rounded-full"></span>
                </button>
                <button className="focus:border border-black w-7 h-7  rounded-full flex items-center justify-center">
                  <span className="w-5 h-5 bg-[#83B18B] rounded-full"></span>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-8">
              <h3 className="text-[14px] font-medium text-neutral-500">
                SELECT SIZE
              </h3>
              <div className="flex items-center gap-2">
                {["S", "M", "L", "XL", "XXL"].map((size, index) => (
                  <button
                    key={size}
                    className="border w-10 h-10 text-xs font-medium rounded focus:border-black"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-10">
              <h3 className="text-[14px] font-medium text-neutral-500 tracking-wide">
                QUANTITIY
              </h3>
              <div className="flex items-center justify-center py-[10px] px-4 gap-10 border rounded w-[164px]">
                <button>
                  <img src={minus} alt="" />
                </button>
                <span>1</span>
                <button>
                  <img src={plus} alt="" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <button
                  className="text-[14px] text-white font-medium bg-black py-3 px-[104px] tracking-wide
                rounded"
                >
                  Add to cart
                </button>
                <button className="border py-[10px] px-[10px] rounded">
                  <img src={heart} alt="" />
                </button>
              </div>
              <span className="font-medium text-[13px] text-neutral-500">
                — FREE SHIPPING ON ORDERS $100+
              </span>
            </div>
          </div>
        </div>

        <div className=" container flex gap-8">
          <div className=" flex flex-col gap-4 mt-20">
            <NavLink
              to="details"
              className={({ isActive }) =>
                `flex gap-3 py-2 px-6 rounded-lg w-60 ${
                  isActive
                    ? "bg-neutral-100 font-medium text-neutral-900"
                    : "bg-white font-medium text-neutral-500"
                }`
              }
            >
              <img src={more} alt="" />
              Details
            </NavLink>
            <NavLink
              to="reviews"
              className={({ isActive }) =>
                `flex gap-3 py-2 px-6 rounded-lg w-60 ${
                  isActive
                    ? "bg-neutral-100 font-medium text-neutral-900"
                    : "bg-white font-medium text-neutral-500"
                }`
              }
            >
              <img src={emptyStar} alt="" />
              Reviews
            </NavLink>
          </div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
