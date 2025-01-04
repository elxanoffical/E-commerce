import React from "react";
import ChevronRight from "../assets/icons/global/Chevron Right.svg";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
import share from "../assets/icons/global/Share.svg";
import star from "../assets/icons/global/star.svg";
import minus from "../assets/icons/global/Minus.svg";
import plus from "../assets/icons/global/Add.svg";
import heart from "../assets/icons/global/Heart.svg";
import more from "../assets/icons/global/More.svg";
import emptyStar from "../assets/icons/global/Empty Star.svg";
import ScrollToTop from "../hooks/useScrollToTop";
import { getData } from "../hooks/useFetch";

const ProductPage = () => {
  const { documentId } = useParams();
  const navigate = useNavigate();

  const { data, error, loading } = getData("products", documentId);

  const handleClick = () => {
    navigate("/listingPage");
  };
  return (
    <>
      <ScrollToTop />
      <div className="">
        <div className="h-[28px] flex items-center my-4 mb-2 ">
          <div className=" container mx-auto flex gap-1">
            <button
              onClick={handleClick}
              className="font-medium text-neutral-500"
            >
              Ecommerce{" "}
            </button>
            <img src={ChevronRight} alt="" />
            <span className="font-medium text-neutral-900">{data?.name}</span>
          </div>
        </div>

        <div className="container flex gap-[120px] mb-32">
          <div className="w-[534px] bg-neutral-100 flex flex-col gap-20 items-center py-6">
            <img
              className="h-[404px]"
              src={`http://localhost:1337${data?.img.url}`}
              alt=""
            />
            <div className="flex items-center gap-2">
              <button className="bg-gray-400 focus:bg-black w-2 h-2 rounded-full"></button>
              <button className="bg-gray-400 focus:bg-black w-2 h-2 rounded-full"></button>
              <button className="bg-gray-400 focus:bg-black w-2 h-2 rounded-full"></button>
              <button className="bg-gray-400 focus:bg-black w-2 h-2 rounded-full"></button>
            </div>
          </div>

          <div className=" flex flex-col w-[440px] py-2">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-2xl font-bold">{data?.name}</h2>
              <div>
                <img src={share} alt="" />
              </div>
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
              {data?.beforePrice && (
                <p className="text-gray-400 text-[14px] line-through tracking-wider">
                  ${data?.beforePrice}
                </p>
              )}
              <p className="text-neutral-800 font-medium text-[16px] tracking-wide">
                ${data?.price}
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
                    className="border w-10 h-10 text-xs font-medium rounded focus:border-black
                    hover:bg-neutral-100"
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
                `flex gap-3 py-2 px-6 rounded-lg w-60
               ${
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
    </>
  );
};

export default ProductPage;
