import React, { useEffect, useRef } from "react";

const FeaturesCard = ({ item }) => {
 
  return (
    <div className="md:w-[328px] md:h-[218px] py-3 flex flex-col items-center md:items-start gap-3">
      <div className="bg-neutral-100 w-12 h-12 rounded-full flex items-center justify-center">
        <img
          className=" w-6 h-6"
          src={`http://localhost:1337${item.icon.url}`}
          alt=""
        />
      </div>
      <h5 className="text-[18px] font-medium dark:text-neutral-100">{item.title}</h5>
      <p className="text-neutral-500 text-sm text-center md:text-start w-[80%] dark:text-neutral-400">{item.subTitle}</p>
    </div>
  );
};

export default FeaturesCard;
