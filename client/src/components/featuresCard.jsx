import React from "react";

const FeaturesCard = ({ item }) => {
  return (
    <div className="w-[328px] h-[218px] py-3 flex flex-col items-start gap-3">
      <div className="bg-neutral-100 w-12 h-12 rounded-full flex items-center justify-center">
        <img
          className=" w-6 h-6"
          src={`http://localhost:1337${item.icon.url}`}
          alt=""
        />
      </div>
      <h5 className="text-[18px] font-medium">{item.title}</h5>
      <p className="text-neutral-500">{item.subTitle}</p>
    </div>
  );
};

export default FeaturesCard;
