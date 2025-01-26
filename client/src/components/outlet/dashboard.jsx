import React from "react";
import totalChart from "../../assets/images/adminPage/total.svg";
import chart from "../../assets/images/adminPage/Chart.svg";
import bar from "../../assets/images/adminPage/Bar.svg";
import chartdiv from "../../assets/images/adminPage/Doughnut Chart.svg";

const Dashbord = () => {
  return (
    <div className=" flex flex-col gap-6">
      <div className=" flex gap-9">
        <div className=" flex flex-col gap-11 bg-white rounded p-6 w-[30%]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[6px]">
              <p className="text-[15px] font-semibold">Total Sales</p>
              <span className="text-[10px] tracking-wide font-medium text-neutral-500">
                THIS MONTH
              </span>
            </div>
            <div>
              <p className="text-xl font-bold">$ 4,235</p>
            </div>
          </div>
          <img src={totalChart} alt="" />
        </div>

        <div className=" flex flex-col gap-11 bg-white rounded p-6 w-[30%]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[6px]">
              <p className="text-[15px] font-semibold">Customers</p>
              <span className="text-[10px] tracking-wide font-medium text-neutral-500">
                THIS MONTH
              </span>
            </div>
            <div>
              <p className="text-xl font-bold">$ 2,571</p>
            </div>
          </div>
          <img src={chart} alt="" />
        </div>

        <div className=" flex flex-col gap-16 bg-white rounded p-6 w-[30%]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[6px]">
              <p className="text-[15px] font-semibold">Orders</p>
              <span className="text-[10px] tracking-wide font-medium text-neutral-500">
                Monthly GOALS : 1,000
              </span>
            </div>
            <div>
              <p className="text-xl font-bold">734</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-neutral-500 font-medium">266 Left</p>
            <img src={bar} alt="" />
          </div>
        </div>
      </div>

      <div className="border flex flex-col gap-8 w-[30%] bg-white p-6">
        <div className="flex flex-col">
          <h1 className="text-[15px] font-semibold">Best Selling</h1>
          <p className="text-[10px] tracking-wide font-medium text-neutral-500">
            THIS MONTH
          </p>
        </div>
        <div className="border-b"></div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            <p className="text-xl font-bold">$2,400</p> -
            <span className="text-[16px] text-neutral-500 font-medium">
              Total Sales
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="border text-[14px] px-2 flex font-medium text-neutral-500 rounded-full">
              Classic Monochrome Tees -
              <span className="text-neutral-900 text-[14px]">$940 Sales</span>
            </h1>
            <h1 className="border text-[14px] px-2 flex font-medium text-neutral-500 rounded-full">
            Monochromatic Wardrobe -
              <span className="text-neutral-900 text-[14px]">$790 Sales</span>
            </h1>
            <h1 className="border text-[14px] px-2 flex font-medium text-neutral-500 rounded-full">
            Essential Neutrals -
              <span className="text-neutral-900 text-[14px]">$740 Sales</span>
            </h1>
          </div>
        </div>
        <div>
          <img src={chartdiv} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
