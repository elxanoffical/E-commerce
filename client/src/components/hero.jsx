import React from "react";
import arrowRight from "../assets/icons/global/Arrow Right.svg";

const Hero = ({ title, subTitle, btnText, img }) => {
  return (
    <div className="h-[440px] bg-neutral-100 ">
      <div className="container sm:pt-6 pt-[20px] flex flex-col sm:flex-row sm:items-center sm:justify-between ">
        <div className="flex flex-col gap-3 items-start py-2">
          <h3 className="text-neutral-800 text-2xl sm:text-3xl font-semibold">
            {title}
          </h3>
          <p className="text-neutral-600 text-sm tracking-wide text-start w-[80%] sm:w-[90%]">
            {subTitle}
          </p>
          <button
            className="bg-neutral-900 flex gap-1 items-center text-white px-3 py-[6px] sm:px-5 sm:py-3 rounded
           mt-8 text-xs group"
          >
            {btnText}
            <img
              className=" group-hover:translate-x-2 transition-all duration-300"
              src={arrowRight}
              alt=""
            />
          </button>
        </div>

        <img
          className="sm:mt-[42px] max-w-[238px] sm:max-w-[100%] sm:max-h-[100%] mx-auto sm:mx-0"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
