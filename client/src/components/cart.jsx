import React from "react";
import X from "../assets/icons/global/X.svg";
import img1 from "../assets/images/bestSellerImg1.svg";
import minus from "../assets/icons/global/Minus.svg";
import plus from "../assets/icons/global/Add.svg";

const Cart = () => {
  return (
    <div className="flex item-center justify-center bg-white">
      <div className="w-[360px] border flex flex-col gap-4 border-black py-2 px-4">
        {/* <div className="flex item-center justify-between py-[26px] px-8 bg-neutral-100 mb-5">
          <span className="text-[14px] font-semibold">shoppingCart</span>
          <button>
            <img src={X} alt="" />
          </button>
        </div> */}
        <div className="flex flex-col">
          <div className=" flex items-center gap-4 h-[100px] border-b">
            <div className="bg-neutral-100 relative w-[60px] h-[80px] flex items-center justify-center">
              <img className="w-[40px]" src={img1} alt="" />
              <button className="absolute right-[-6px] top-[-6px] w-6 border bg-neutral-200">
                <img src={X} alt="" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h3 className="text-[14px] font-semibold">
                  Raw Black T-Shirt Lineup
                </h3>
                <div className="flex items-center gap-1">
                  <div className=" w-3 h-3  rounded-full flex items-center justify-center">
                    <span className="w-3 h-3 bg-[#A3BEF8] rounded-full"></span>
                  </div>
                  <img src={minus} alt="" />
                  <p className="text-sm">M</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-neutral-500">Quantity: 1 * $75</p>
                <h3 className="text-[16px] font-medium text-neutral-500">
                  $75
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" flex items-center gap-4 h-[100px] border-b">
            <div className="bg-neutral-100 relative w-[60px] h-[80px] flex items-center justify-center">
              <img className="w-[40px]" src={img1} alt="" />
              <button className="absolute right-[-6px] top-[-6px] w-6 border bg-neutral-200">
                <img src={X} alt="" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h3 className="text-[14px] font-semibold">
                  Raw Black T-Shirt Lineup
                </h3>
                <div className="flex items-center gap-1">
                  <div className=" w-3 h-3  rounded-full flex items-center justify-center">
                    <span className="w-3 h-3 bg-[#A3BEF8] rounded-full"></span>
                  </div>
                  <img src={minus} alt="" />
                  <p className="text-sm">M</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-neutral-500">Quantity: 1 * $75</p>
                <h3 className="text-[16px] font-medium text-neutral-500">
                  $75
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="border flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[17px] text-neutral-500 font-semibold">
              Subtotal:
            </h3>
            <span className="text-[18px] font-medium text-neutral-600 mr-[10px]">
              $75
            </span>
          </div>
          <div className="flex items-center justify-between">
            <button className="border border-black py-2 px-10 text-neutral-500">
              View Cart
            </button>
            <button className="border border-black bg-black text-white py-2 px-10">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
