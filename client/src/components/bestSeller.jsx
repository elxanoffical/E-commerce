import React from "react";
import sellerImg1 from "../assets/images/bestSellerImg1.svg";
import sellerImg2 from "../assets/images/bestSellerImg2.svg";
import sellerImg3 from "../assets/images/bestSellerImg3.svg";
import sellerImg4 from "../assets/images/bestSellerImg4.svg";
import { Link } from "react-router-dom";

const BestSeller = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-2 mb-20">
        <p className="text-xs text-neutral-400">Shop Now</p>
        <h3 className="text-2xl font-bold">Best Selling</h3>
      </div>
      <div className="container flex items-center justify-center gap-5  mb-[168px]">
        <Link to="/listingPage">
          <div className=" px-2 py-4 flex flex-col gap-6 shadow-lg hover:scale-105 transition-all duration-300">
            <img className="bg-neutral-100 rounded" src={sellerImg1} alt="" />
            <div className="flex flex-col gap-3">
              <h4 className="text-[14px] font-medium">
                Classic Monochrome Tees
              </h4>
              <div className="flex items-center gap-4">
                <label
                  className="text-xs font-medium border py-1 px-4 rounded-2xl"
                  htmlFor=""
                >
                  IN STOCK
                </label>
                <span className="text-[14px] font-normal text-neutral-600">
                  $35.00
                </span>
              </div>
            </div>
          </div>
        </Link>

        <div className=" px-2 py-4 flex flex-col gap-6 shadow-lg hover:scale-105 transition-all duration-300">
          <img className="bg-neutral-100 rounded" src={sellerImg2} alt="" />
          <div className="flex flex-col gap-3">
            <h4 className="text-[14px] font-medium">Monochromatic Wardrobe</h4>
            <div className="flex items-center gap-4">
              <label
                className="text-xs font-medium border py-1 px-4 rounded-2xl"
                htmlFor=""
              >
                IN STOCK
              </label>
              <span className="text-[14px] font-normal text-neutral-600">
                $35.00
              </span>
            </div>
          </div>
        </div>
        <div className=" px-2 py-4 flex flex-col gap-6 shadow-lg hover:scale-105 transition-all duration-300">
          <img className="bg-neutral-100 rounded" src={sellerImg3} alt="" />
          <div className="flex flex-col gap-3">
            <h4 className="text-[14px] font-medium">Essential Neutrals</h4>
            <div className="flex items-center gap-4">
              <label
                className="text-xs font-medium border py-1 px-4 rounded-2xl"
                htmlFor=""
              >
                IN STOCK
              </label>
              <span className="text-[14px] font-normal text-neutral-600">
                $35.00
              </span>
            </div>
          </div>
        </div>
        <div className=" px-2 py-4 flex flex-col gap-6 shadow-lg hover:scale-105 transition-all duration-300">
          <img className="bg-neutral-100 rounded" src={sellerImg4} alt="" />
          <div className="flex flex-col gap-3">
            <h4 className="text-[14px] font-medium">UTRAANET Black</h4>
            <div className="flex items-center gap-4">
              <label
                className="text-xs font-medium border py-1 px-4 rounded-2xl"
                htmlFor=""
              >
                IN STOCK
              </label>
              <span className="text-[14px] font-normal text-neutral-600">
                $35.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
