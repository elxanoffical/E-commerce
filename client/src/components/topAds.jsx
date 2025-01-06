import React from "react";
import { Link } from "react-router-dom";

const TopAds = ({ text, btnText }) => {
  return (
    <div className="bg-neutral-900 h-10 flex items-center gap-2 justify-center">
      <span className="text-white font-light">
       {text}
      </span>
      <Link to='/' className=" text-white hover:border-b transition-all">
        {btnText}
      </Link>
    </div>
  );
};

export default TopAds;
