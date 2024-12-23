import React from "react";
import arrowRight from "../assets/icons/global/Arrow Right.svg";
import heroImg from "../assets/images/Hero Image.svg";
import heroStars from "../assets/images/heroStars.svg";

const Hero = () => {
  return (
    <div className="h-[440px] bg-neutral-100 ">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex flex-col gap-3 items-start">
          <h3 className="text-neutral-800 text-3xl font-semibold">
            Fresh Arrivals Online
          </h3>
          <p className="text-neutral-600 text-xs tracking-wide">
            Discover Our Newest Collection Today.
          </p>
          <button
            className="bg-neutral-900 flex gap-1 items-center text-white px-5 py-3 rounded
           mt-12 text-xs group"
          >
            View Collection
            <img
              className=" group-hover:translate-x-2 transition-all duration-300"
              src={arrowRight}
              alt=""
            />
          </button>
        </div>

        <div className=" relative">
          <img className=" absolute top-20 right-80" src={heroStars} alt="" />
          <div className="w-[340px] h-[340px] bg-neutral-200 opacity-45 rounded-full absolute bottom-2 right-2 z-0"></div>
          <img className="pt-[66px] relative z-10" src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
