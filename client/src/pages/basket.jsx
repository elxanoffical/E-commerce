import React from "react";
import { useSelector } from "react-redux";

const MyBasket = () => {
  const value = useSelector((state) => state.basket.value);
  const TotalPice = value.reduce((acc, item) => {
    return acc + item.price * item.count
  },0);
  const finalPrice = TotalPice + 3
 

  return (
    <div className="dark:bg-black py-4">
      <div className="container flex flex-col lg:flex-row ">
        <div className=" w-full flex flex-col pr-24">
          <h1 className="text-xl font-semibold dark:text-neutral-100">
            Your cart
          </h1>
          <div className="border-b border-b-neutral- my-4 dark:border-b-neutral-500"></div>
          {value.map((item) => {
            return (
              <div className=" ">
                <div className="flex border border-neutral-600a rounded mb-3 flex-col md:flex-row items-start justify-between w-[105%] md:w-full  ">
                  <div className="flex mb-4  gap-6 md:gap-6">
                    <div className="flex">
                      <img
                        className="w-[100px] h-[100px] object-contain border dark:bg-white rounded"
                        src={`http://localhost:1337${item.imgUrl}`}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1 className=" text-[16px] sm:text-xl font-medium text-neutral-700 dark:text-neutral-300">
                        {item.name}
                      </h1>
                      <div className="flex items-center gap-3 dark:text-neutral-100">
                        <h1 className="flex items-center gap-2 text-[16px] sm:text-xl font-medium text-neutral-700 dark:text-neutral-300">
                          color:
                          <span
                            className={`bg-[#${item.color}] w-4 h-4 inline-block rounded-full`}
                          ></span>
                        </h1>
                        -
                        <h1 className="flex items-center gap-2 text-[16px] sm:text-xl font-medium text-neutral-700 dark:text-neutral-300">
                          Size: <span>{item.sizes}</span>
                        </h1>
                      </div>
                      <h1 className="flex items-center gap-2 text-[16px] sm:text-xl font-medium text-neutral-700 dark:text-neutral-300">
                        Count: <span>{item.count}</span>
                      </h1>
                    </div>
                  </div>
                  <div className="md:px-4">
                    <span className="text-[16px] sm:text-xl font-medium text-neutral-700 border-b border-b-neutral-400 dark:text-neutral-300">
                      Price: ${item.price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border rounded flex flex-col dark:border-neutral-600 border-neutral-300 px-8 w-[340px] py-6">
          <h1 className="text-[18px] font-semibold mb-6 dark:text-neutral-300">Order Summary</h1>
          <div className="flex flex-col gap-3">
            <h1 className="flex items-center justify-between dark:text-neutral-300 text-neutral-600 font-medium">
              Subtotal: <span>${TotalPice}</span>
            </h1>
            <h1 className="flex items-center justify-between dark:text-neutral-300 text-neutral-600 font-medium">
              Shipping: <span>Free</span>
            </h1>
            <h1 className="flex items-center justify-between dark:text-neutral-300 text-neutral-600 font-medium">
              Tax: <span>$3</span>
            </h1>
          </div>
          <div className="border-b border-b-neutral-300 my-6 dark:border-b-neutral-500"></div>
          <div className="mb-8">
            <h1 className="flex items-center justify-between dark:text-neutral-300 text-[16px] text-neutral-900 font-medium">
              Total <span>${finalPrice}</span>
            </h1>
          </div>
          <div className="flex flex-col items-center gap-8">
            <button className="px-[105px] py-2 dark:bg-white dark:text-neutral-900 dark:font-semibold bg-black text-neutral-100 rounded text-[15px]">
              Checkout
            </button>
            <span className="border-b dark:text-neutral-100 dark:border-b-neutral-100 border-black text-[14px]">
              Continue Shopping
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBasket;
