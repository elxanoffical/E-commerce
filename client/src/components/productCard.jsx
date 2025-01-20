import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHeart, FaRegHeart } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

const ProductCard = ({ item }) => {
  const isFavorite = JSON.parse(
    localStorage.getItem("favorites").includes(item.documentId)
  );

  return (
    <Link
      to={`/products/${item.documentId}`}
      className="px-2 py-4 flex flex-col gap-4 shadow-lg rounded-lg relative"
    >
      <div className="absolute top-6 right-4 border rounded p-2 flex items-center justify-center">
        {isFavorite ? (
          <FaHeart className="" style={{ fill: "red" }} />
        ) : (
          <FaRegHeart />
        )}
      </div>
      <img
        className="bg-neutral-100 rounded h-[100%]"
        src={`http://localhost:1337${item?.images[0].url}`}
      />
      <div className="flex flex-col gap-3 mt-4">
        <h4 className="text-[14px] font-medium dark:text-neutral-100">{item?.name}</h4>
        <div className="flex items-center gap-4 sm:gap-7">
          <div className="flex gap-2 sm:gap-4 items-center">
            {item?.beforePrice && (
              <p className="text-gray-400 dark:text-neutral-400 text-[12px] sm:text-[14px] line-through tracking-wider">
                ${item.beforePrice}
              </p>
            )}
            <p className="text-neutral-600 text-[14px] dark:text-neutral-300 sm:text-[16px] tracking-wide">
              ${item.price}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <label
              className="text-[9px] sm:text-sm font-medium border py-1 px-4 rounded-2xl dark:text-neutral-100"
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
