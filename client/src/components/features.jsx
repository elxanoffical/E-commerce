import React from "react";
import delivery from "../assets/icons/global/Delivery.svg";
import starBadge from "../assets/icons/global/Star Badge.svg";
import shieldCehck from "../assets/icons/global/Shield Check.svg";

const Features = () => {
  return (
    <div className="">
      <div className=" container h-[266px] mx-auto mt-[91px] mb-[72px] flex items-center justify-center gap-14">
        <div className="w-[328px] h-[218px] py-3 flex flex-col items-start gap-3">
          <div className="bg-neutral-100 w-12 h-12 rounded-full flex items-center justify-center">
            <img className=" w-6 h-6" src={delivery} alt="" />
          </div>
          <h5 className="text-[18px] font-medium">Free Shipping</h5>
          <p className="text-neutral-500">
            Upgrade your style today and get FREE shipping on all orders! Don't
            miss out.
          </p>
        </div>
        <div className="w-[328px] h-[218px] py-3 flex flex-col items-start gap-3">
          <div className="bg-neutral-100 w-12 h-12 rounded-full flex items-center justify-center">
            <img className=" w-6 h-6" src={starBadge} alt="" />
          </div>
          <h5 className="text-[18px] font-medium">Satisfaction Guarantee</h5>
          <p className="text-neutral-500">
            Shop confidently with our Satisfaction Guarantee: Love it or get a
            refund.
          </p>
        </div>
        <div className="w-[328px] h-[218px] py-3 flex flex-col items-start gap-3">
          <div className="bg-neutral-100 w-12 h-12 rounded-full flex items-center justify-center">
            <img className=" w-6 h-6" src={shieldCehck} alt="" />
          </div>
          <h5 className="text-[18px] font-medium">Secure Payment</h5>
          <p className="text-neutral-500">
            Your security is our priority. Your payments are secure with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
