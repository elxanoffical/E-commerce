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

      <div className="flex gap-9">
        <div className=" flex flex-col gap-8 w-[30%] rounded bg-white p-6">
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
            <div className="flex flex-col gap-[10px]">
              <div className="border rounded-full flex items-center gap-1 px-2">
                <h1 className="text-[12px] font-medium text-neutral-500">Classic Monochrome Tees </h1>
                -
                <span className="text-neutral-900 font-semibold text-[10px]">$940 Sales</span>
              </div>
              <div className="border rounded-full flex items-center gap-1 px-2">
                <h1 className="text-[12px] font-medium text-neutral-500">Monochromatic Wardrobe </h1>
                -
                <span className="text-neutral-900 font-semibold text-[10px]">$790 Sales</span>
              </div>
              <div className="border rounded-full flex items-center gap-1 px-2">
                <h1 className="text-[12px] font-medium text-neutral-500">Essential Neutrals </h1>
                -
                <span className="text-neutral-900 font-semibold text-[10px]">$740 Sales</span>
              </div>
            </div>
          </div>
          <div>
            <img src={chartdiv} alt="" />
          </div>
        </div>

        <div class="  w-[618px] rounded bg-white">
          <div class="overflow-x-auto ">
            <div className="py-6 px-6 flex items-center gap-5">
              <h1 className="text-[16px] font-semibold text-neutral-900">
                Recent Orders
              </h1>
              <button className="px-4 py-[2px] bg-neutral-100 text-neutral-500 rounded-full text-[14px]">
                View All
              </button>
            </div>
            <table class="table-auto w-full bg-white">
              <thead>
                <tr class=" text-gray-600 text-sm leading-normal border-b border-t">
                  <th class="py-[20px] px-6 text-left ">Item</th>
                  <th class="py-[20px] px-6 text-left ">Date</th>
                  <th class="py-[20px] px-6 text-left ">Total</th>
                  <th class="py-[20px] px-6 text-left ">Status</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-medium">
                <tr class="border-b border-gray-300 hover:bg-gray-100">
                  <td class="py-[20px] px-6 text-left ">
                    Mens Black T-Shirts
                  </td>
                  <td class="py-[20px] px-6 ">20 Mar, 2023</td>
                  <td class="py-[20px] px-6 text-left ">$75.00</td>
                  <td className="py-[20px] px-6 text-left ">Processing</td>
                </tr>
                <tr class="border-b border-gray-300 hover:bg-gray-100">
                  <td class="py-[20px] px-6 text-left ">
                    Essential Neutrals{" "}
                  </td>
                  <td class="py-[20px] px-6 ">19 Mar, 2023</td>
                  <td class="py-[20px] px-6 text-left ">$22.00</td>
                  <td className="py-[20px] px-6 text-left ">Processing</td>
                </tr>
                <tr class="border-b border-gray-300 hover:bg-gray-100">
                  <td class="py-[20px] px-6 text-left ">
                    Sleek and Cozy Black{" "}
                  </td>
                  <td class="py-[20px] px-6 ">7 Feb, 2023</td>
                  <td class="py-[20px] px-6 text-left ">$57.00</td>
                  <td className="py-[20px] px-6 text-left ">Completed</td>
                </tr>
                <tr class="border-b border-gray-300 hover:bg-gray-100">
                  <td class="py-[20px] px-6 text-left ">MOCKUP Black</td>
                  <td class="py-[20px] px-6 ">29 Jan, 2023</td>
                  <td class="py-[20px] px-6 text-left ">$30.00</td>
                  <td className="py-[20px] px-6 text-left ">Completed</td>
                </tr>
                <tr class=" hover:bg-gray-100">
                  <td class="py-[20px] px-6 text-left ">
                    Monochromatic Wardrobe{" "}
                  </td>
                  <td class="py-[20px] px-6 ">27 Jan, 2023</td>
                  <td class="py-[20px] px-6 text-left ">$27.00</td>
                  <td className="py-[20px] px-6 text-left ">Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
