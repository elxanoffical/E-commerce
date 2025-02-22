import React from "react";
import { useOutletContext } from "react-router-dom";

const Details = () => {
  const {detail} = useOutletContext()
  return (
    <div className=" flex flex-col gap-14">
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold">Detail</h3>
        <p className="text-neutral-600 leading-8 text-[14px] dark:text-neutral-100 font-normal">
          Elevate your everyday style with our Men's Black T-Shirts, the
          ultimate wardrobe essential for modern men.
          <span className="block">
            Crafted with meticulous attention to detail and designed for
            comfort, these versatile black tees are a must-
            <span className="block">have addition to your collection.</span>
          </span>
          The classic black color never goes out of style. Whether you're
          dressing up for a special occasion or keeping
          <span className="block">
            it casual, these black t-shirts are the perfect choice, effortlessly
            complementing any outfit.
          </span>
        </p>
      </div>

      <ul className="  ml-4 list-disc flex flex-col gap-2 ">
        <li className="text-[15px] dark:text-neutral-100 text-neutral-600 font-normal">
          Premium Quality
        </li>
        <li className="text-[15px]  dark:text-neutral-100 text-neutral-600 font-normal">
          Versatile Wardrobe Staple
        </li>
        <li className="text-[15px]  dark:text-neutral-100 text-neutral-600 font-normal">
          Available in Various Sizes
        </li>
        <li className="text-[15px]  dark:text-neutral-100 text-neutral-600 font-normal">
          Tailored Fit
        </li>
      </ul>
    </div>
  );
};

export default Details;
