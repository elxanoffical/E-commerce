import React from "react";
import productimg1 from "../assets/images/productimg1.svg";
import productimg2 from "../assets/images/productimg2.svg";
import productimg3 from "../assets/images/productimg3.svg";
import productimg4 from "../assets/images/productimg4.svg";

const ProductList = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-6 mb-20">
        <button className="text-neutral-800 font-medium border px-4 py-1 rounded-2xl">
          Featured
        </button>
        <button className="text-neutral-500">Latest</button>
      </div>
      <div className="container flex items-center justify-center gap-5  mb-[192px]">
        <div className=" px-2 py-4 flex flex-col gap-6 shadow-lg hover:scale-105 transition-all duration-300">
          <img className="bg-neutral-100 rounded" src={productimg1} alt="" />
          <div className="flex flex-col gap-3">
            <h4 className="text-[14px] font-medium">
              Elegant Ebony Sweatshirts
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
        <div className=" px-2 py-4 flex flex-col gap-6 shadow-lg hover:scale-105 transition-all duration-300">
          <img className="bg-neutral-100 rounded" src={productimg2} alt="" />
          <div className="flex flex-col gap-3">
            <h4 className="text-[14px] font-medium">Sleek and Cozy Black</h4>
            <div className="flex items-center gap-4">
              <label
                className="text-xs font-medium border py-1 px-4 rounded-2xl"
                htmlFor=""
              >
                IN STOCK
              </label>
              <span className="text-[14px] font-normal text-neutral-600">
                $57.00
              </span>
            </div>
          </div>
        </div>
        <div className=" px-2 py-4 flex flex-col gap-6 shadow-lg hover:scale-105 transition-all duration-300">
          <img className="bg-neutral-100 rounded" src={productimg3} alt="" />
          <div className="flex flex-col gap-3">
            <h4 className="text-[14px] font-medium">Raw Black Tees</h4>
            <div className="flex items-center gap-4">
              <label
                className="text-xs font-medium border py-1 px-4 rounded-2xl"
                htmlFor=""
              >
                IN STOCK
              </label>
              <span className="text-[14px] font-normal text-neutral-600">
                $19.00
              </span>
            </div>
          </div>
        </div>
        <div className=" px-2 py-4 flex flex-col gap-6 shadow-lg hover:scale-105 transition-all duration-300">
          <img className="bg-neutral-100 rounded" src={productimg4} alt="" />
          <div className="flex flex-col gap-3">
            <h4 className="text-[14px] font-medium">MOCKUP Black</h4>
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

export default ProductList;
