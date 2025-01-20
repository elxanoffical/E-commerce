import React from "react";
import { Link } from "react-router-dom";

const TopAds = ({ data }) => {
  return (
    <div className="bg-neutral-900  h-10 flex items-center gap-2 justify-center">
      <span className="text-white font-light">
       {data?.title}
      </span>
      <Link to='/home' className=" text-white hover:border-b transition-all">
        {data?.btnTitle}
      </Link>
    </div>
  );
};

export default TopAds;
