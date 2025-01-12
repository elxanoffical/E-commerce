import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProductCard = ({ item }) => {

 
  return (
    <Link
      to={`/products/${item.documentId}`}
      className="px-2 py-4 flex flex-col gap-4 shadow-lg rounded-lg"
    >
      <img
        className="bg-neutral-100 rounded h-[100%]"
        src={`http://localhost:1337${item?.images[0].url}`}
      />
      <div className="flex flex-col gap-3 mt-4">
        <h4 className="text-[14px] font-medium">{item?.name}</h4>
        <div className="flex items-center gap-7">
          <div className="flex gap-4 items-center">
            {item?.beforePrice && (
              <p className="text-gray-400 text-[14px] line-through tracking-wider">
                ${item.beforePrice}
              </p>
            )}
            <p className="text-neutral-600 text-[16px] tracking-wide">
              ${item.price}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <label
              className="text-xs font-medium border py-1 px-4 rounded-2xl"
              htmlFor=""
            >
              {item ? "IN STOCK" : "OUT OF STOCK"}
            </label>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
