import React from "react";
import arrowRight from "../assets/icons/global/Arrow Right.svg";
import categoryImg from "../assets/images/categoryImage.svg";


const Catogories = () => {
  return (
    <div className="h-[304px] bg-neutral-100 mb-[152px]">
      <div className="container flex items-center justify-between">
        <div className="flex flex-col gap-3 items-start">
          <h3 className="text-neutral-900 text-2xl font-semibold">
          Browse Our Fashion Paradise!
          </h3>
          <p className="text-neutral-500 text-xs tracking-wide ">
          Step into a world of style and explore our diverse collection of 
          <span className=" block">clothing categories.</span>
          </p>
          <button
            className="bg-neutral-900 flex gap-1 items-center text-white px-5 py-3 rounded
                       mt-12 text-xs group"
          >
           Start Browsing
            <img
              className=" group-hover:translate-x-2 transition-all duration-300"
              src={arrowRight}
              alt=""
            />
          </button>
        </div>
        <div>
            <img src={categoryImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Catogories;
