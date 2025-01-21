import React from "react";
import aboutImg from "../assets/images/aboutImg.jpg";

const About = () => {
  return (
    <div className=" flex flex-col items-center dark:bg-black justify-center">
      <div className=" container relative">
        <img src={aboutImg} className="w-[1568px]" />
        <h2 className="text-[23px] font-light text-white absolute bottom-8 left-20">
          About us
        </h2>
      </div>

      <div className="  flex flex-col lg:flex-row gap-10 lg:gap-28 container mx-auto md:px-20 my-12">
        <div className=" w-[100%] sm:w-[90%] lg:w-[60%]">
          <p className="text-[15px] font-normal text-neutral-500 mb-6 leading-7 dark:text-neutral-100">
            We have a more interesting life if you wear impressive clothes.
            Sometimes the simplest things are the most profound. Attention to
            detail is of utmost importance when you want to look{" "}
            <span className="block">good.</span>
          </p>
          <p className="text-[15px] font-normal text-neutral-500 mb-6 leading-7 dark:text-neutral-100">
            Design and style should work toward making you look good and feel
            good without a lot of effort so you can get on with the things that
            matter. War taught me that not everything is glamorous.
          </p>
        </div>

        <div className="  md:w-[335px] flex flex-col items-start pt-2">
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-[60px] md:gap-[96px]">
              <span className=" text-[17px] font-medium text-black dark:text-neutral-100">Monday – Friday</span>
              <span className="text-[17px] text-neutral-500 dark:text-neutral-400">9:30 - 20:00</span>
            </li>
            <li className="flex items-center gap-[120px] md:gap-[156px]">
              <span className=" text-[17px] font-medium text-black dark:text-neutral-100">Saturday</span>
              <span className="text-[17px] text-neutral-500 dark:text-neutral-400">11:00 - 18:00</span>
            </li>
            <li className="flex items-center gap-[132px] md:gap-[168px]">
              <span className=" text-[17px] font-medium text-black dark:text-neutral-100">Sunday</span>
              <span className="text-[17px] text-neutral-500 dark:text-neutral-400">Closed</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
