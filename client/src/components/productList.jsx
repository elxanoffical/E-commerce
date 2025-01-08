import React from "react";
import productimg1 from "../assets/images/productimg1.svg";
import productimg2 from "../assets/images/productimg2.svg";
import productimg3 from "../assets/images/productimg3.svg";
import productimg4 from "../assets/images/productimg4.svg";
import { productList } from "../data/products";

const ProductList = () => {
  return (
    <div className="flex flex-col mt-20">
      <div className="flex items-center justify-center gap-6 mb-20">
        <button className="text-neutral-800 font-medium border px-4 py-1 rounded-2xl">
          Featured
        </button>
        <button className="text-neutral-500">Latest</button>
      </div>
      <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-[168px]">
        {productList.map((item, index) => (
          <div
            onClick={() => prdocut(item.id)}
            key={index}
            className="px-2 py-4 flex flex-col gap-4 shadow-lg hover:scale-105 transition-all duration-300 rounded-lg"
          >
            <img className="bg-neutral-100 rounded" src={item.img} />
            <div className="flex flex-col gap-3 mt-4">
              <h4 className="text-[14px] font-medium">{item.name}</h4>
              <div className="flex items-center gap-7">
                <div className="flex gap-4 items-center">
                  <p className="text-neutral-600 text-[16px] tracking-wide">
                    ${item.price}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <label
                    className="text-xs font-medium border py-1 px-4 rounded-2xl"
                    htmlFor=""
                  >
                    IN STOCK
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
