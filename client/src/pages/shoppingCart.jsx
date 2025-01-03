import React from "react";
import X from "../assets/icons/global/X.svg";
import img1 from "../assets/images/bestSellerImg1.svg";
import minus from "../assets/icons/global/Minus.svg";
import plus from "../assets/icons/global/Add.svg";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/product/:id')
  };
  return (
    <div className="flex item-center justify-center my-10">
      <div className="w-[416px] border">
        <div className="flex item-center justify-between py-[26px] px-8 bg-neutral-100 mb-12">
          <span className="text-[14px] font-semibold">shoppingCart</span>
          <button>
            <img src={X} alt="" />
          </button>
        </div>

        <div className="flex flex-col gap-8">
          <div className=" flex items-start gap-8 h-[112px] border-b">
            <div>
              <div className="bg-neutral-100 relative w-[80px] h-[80px] flex items-center justify-center">
                <img className="w-[44px]" src={img1} alt="" />
                <button className="absolute right-0 top-0 border bg-neutral-200">
                  <img src={X} alt="" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div>
                  <h3>Raw Black T-Shirt Lineup</h3>
                </div>
                <div className="flex items-center gap-1">
                  <div className=" w-3 h-3  rounded-full flex items-center justify-center">
                    <span className="w-3 h-3 bg-[#A3BEF8] rounded-full"></span>
                  </div>
                  <img src={minus} alt="" />
                  <p>M</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 border py-2 px-4 rounded">
                  <button>
                    <img src={minus} alt="" />
                  </button>
                  <span>1</span>
                  <button>
                    <img src={plus} alt="" />
                  </button>
                </div>
                <h3 className="text-[16px] font-medium">$75.00</h3>
              </div>
            </div>
          </div>
          <div className=" flex items-start gap-8 h-[112px] border-b">
            <div>
              <div className="bg-neutral-100 relative w-[80px] h-[80px] flex items-center justify-center">
                <img className="w-[44px]" src={img1} alt="" />
                <button className="absolute right-0 top-0 border bg-neutral-200">
                  <img src={X} alt="" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div>
                  <h3>Raw Black T-Shirt Lineup</h3>
                </div>
                <div className="flex items-center gap-1">
                  <div className=" w-3 h-3  rounded-full flex items-center justify-center">
                    <span className="w-3 h-3 bg-[#A3BEF8] rounded-full"></span>
                  </div>
                  <img src={minus} alt="" />
                  <p>M</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 border py-2 px-4 rounded">
                  <button>
                    <img src={minus} alt="" />
                  </button>
                  <span>1</span>
                  <button>
                    <img src={plus} alt="" />
                  </button>
                </div>
                <h3 className="text-[16px] font-medium">$75.00</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
