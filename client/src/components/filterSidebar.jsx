import React from "react";
import { useState } from "react";

const FilterSidebar = () => {
  const [price, setPrice] = useState(200); // Başlanğıc qiymət

  const handleSliderChange = (e) => {
    setPrice(e.target.value);
  };
  return (
    <div className="flex flex-col border  rounded-lg w-[248px]  py-6 px-[18px] gap-10">
      <div className="flex flex-col">
        <h3 className="text-[14px] font-medium mb-4">Categories</h3>
        <div className="flex items-center gap-2 py-3 px-1 border-b">
          <input className="" type="checkBox" />
          <p className="text-[14px] tracking-wider font-normal text-neutral-600">
            Perfume
          </p>
        </div>
        <div className="flex items-center gap-2 py-3 px-1 border-b">
          <input className="" type="checkBox" />
          <p className="text-[14px] tracking-wider font-normal text-neutral-600">
            Trousers
          </p>
        </div>
        <div className=" flex items-center gap-2 py-3 px-1 border-b">
          <input className=" border outline-none" type="checkBox" />
          <p className="text-[14px] tracking-wider font-normal text-neutral-600">
            Shoe
          </p>
        </div>
        <div className="flex items-center gap-2 py-3 px-1 border-b">
          <input className=" " type="checkBox" />
          <p className="text-[14px] tracking-wider font-normal text-neutral-600">
            Handbag
          </p>
        </div>
        <div className="flex items-center gap-2 py-3 px-1 border-b">
          <input className="" type="checkBox" />
          <p className="text-[14px] tracking-wider font-normal text-neutral-600">
            Hat
          </p>
        </div>
        <div className="flex items-center gap-2 py-3 px-1 border-b">
          <input className=" " type="checkBox" />
          <p className="text-[14px] tracking-wider font-normal text-neutral-600">
            Thermos
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 ">
        <h3 className="text-xs font-medium">Color</h3>
        <div className="flex item-center gap-3">
          <button className=" focus:border border-black w-7 h-7  rounded-full flex items-center justify-center">
            <span className="w-5 h-5 bg-[#A3BEF8] rounded-full"></span>
          </button>
          <button className="focus:border border-black w-7 h-7  rounded-full flex items-center justify-center">
            <span className="w-5 h-5 bg-[#FFD58A] rounded-full"></span>
          </button>
          <button className="focus:border border-black w-7 h-7  rounded-full flex items-center justify-center">
            <span className="w-5 h-5 bg-[#83B18B] rounded-full"></span>
          </button>
          <button className="focus:border border-black w-7 h-7  rounded-full flex items-center justify-center">
            <span className="w-5 h-5 bg-[#4078FF] rounded-full"></span>
          </button>
        </div>
      </div>

      <div className=" flex flex-col gap-3">
        <h3 className="text-[14px] font-medium">Size</h3>
        <div className="flex items-center gap-2 flex-wrap">
          {["S", "M", "L", "XL", "XXL"].map((size, index) => (
            <button
              key={size}
              className="border w-10 h-10 text-xs font-medium rounded focus:border-black"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="">
        <h3 className="block text-lg font-medium text-gray-700 mb-4">Price</h3>
        <div className="relative">
          <input
            id="price-slider"
            type="range"
            min="0"
            max="1000"
            value={price}
            onChange={handleSliderChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div
            className="absolute top-8 transform -translate-x-1/2 text-white bg-black px-2 py-1 text-xs rounded shadow-lg"
            style={{ left: `${(price / 1000) * 100}%` }}
          >
            ${price}.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
