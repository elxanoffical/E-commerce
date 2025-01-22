import React from "react";
import { useSelector } from "react-redux";

const MyBasket = () => {
  const value = useSelector((state) => state.basket.value);

  return (
    <div>
      <div className="container flex ">
        <div className="border w-full border-black p-6">
          <h1 className="text-xl font-semibold border-b border-b-neutral-300">
            Your cart
          </h1>
          {value.map((item) => {
            return (
              <div className=" flex gap-10 items-start py-2">
                <div className="flex items-start justify-between w-full  ">
                  <div className="flex">
                    <div>
                      <img
                        className="w-[100px] h-[100px] object-contain"
                        src={`http://localhost:1337${item.imgUrl}`}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1 className="text-xl font-medium text-neutral-700">
                        {item.name}
                      </h1>
                      <div className="flex items-center gap-3">
                        <h1 className="flex items-center gap-2 text-lg font-medium text-neutral-700">
                          color:
                          <span
                            className={`bg-[#${item.color}] w-4 h-4 inline-block rounded-full`}
                          ></span>
                        </h1>
                        -
                        <h1 className="flex items-center gap-2 text-lg font-medium text-neutral-700">
                          Size: <span>{item.sizes}</span>
                        </h1>
                      </div>
                      <h1 className="flex items-center gap-2 text-lg font-medium text-neutral-700">
                        Count: <span>{item.count}</span>
                      </h1>
                    </div>
                  </div>
                  <div className="px-4">
                    <span className="text-lg font-medium text-neutral-700 border-b border-b-neutral-400">
                      ${item.price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border rounded flex flex-col border-neutral-300 px-8 w-[340px] py-6">
          <h1 className="text-[18px] font-semibold mb-6">Order Summary</h1>
          <div className="flex flex-col gap-3">
            <h1 className="flex items-center justify-between text-neutral-600 font-medium">
              Subtotal: <span>$90</span>
            </h1>
            <h1 className="flex items-center justify-between text-neutral-600 font-medium">
              Shipping: <span>Free</span>
            </h1>
            <h1 className="flex items-center justify-between text-neutral-600 font-medium">
              Tax: <span>$3</span>
            </h1>
          </div>
          <div className="border-b border-b-neutral-300 my-6"></div>
          <div className="mb-8">
            <h1 className="flex items-center justify-between text-[16px] text-neutral-900 font-medium">
              Total <span>$100</span>
            </h1>
          </div>
          <div className="flex flex-col items-center gap-8">
            <button className="px-[105px] py-2 bg-black text-neutral-100 rounded text-[15px]">
              Checkout
            </button>
            <span className="border-b border-black text-[14px]">
              Continue Shopping
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBasket;
