import React from "react";
import totalChart from "../../assets/images/adminPage/total.svg";
import chart from "../../assets/images/adminPage/Chart.svg";
import bar from "../../assets/images/adminPage/Bar.svg";


const Dashbord = () => {
  return (
    <div className="border flex flex-col">
      <div className="border border-black flex gap-9">

        <div className="border flex flex-col gap-11 bg-white rounded p-6 w-[30%]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[6px]">
              <p className="text-[15px] font-semibold">Total Sales</p>
              <span className="text-[10px] tracking-wide font-medium text-neutral-500">THIS MONTH</span>
            </div>
            <div>
              <p className="text-xl font-bold">$ 4,235</p>
            </div>
          </div>
          <img src={totalChart} alt="" />
        </div> 

        <div className="border flex flex-col gap-11 bg-white rounded p-6 w-[30%]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[6px]">
              <p className="text-[15px] font-semibold">Customers</p>
              <span className="text-[10px] tracking-wide font-medium text-neutral-500">THIS MONTH</span>
            </div>
            <div>
              <p className="text-xl font-bold">$ 2,571</p>
            </div>
          </div>
          <img src={chart} alt="" />
        </div> 

        <div className="border flex flex-col gap-16 bg-white rounded p-6 w-[30%]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[6px]">
              <p className="text-[15px] font-semibold">Orders</p>
              <span className="text-[10px] tracking-wide font-medium text-neutral-500">Monthly GOALS : 1,000</span>
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
    </div>
  );
};

export default Dashbord;
