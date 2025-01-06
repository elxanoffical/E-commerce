import React from "react";
import google from "../assets/icons/colored/Google.svg";
import ChevronRight from "../assets/icons/global/Chevron Right.svg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/");
  };
  return (
    <div>
      <div className="bg-neutral-100 h-[64px] flex items-center">
        <div className=" container mx-auto flex gap-1">
          <button
            onClick={handleClick}
            className="font-medium text-neutral-500"
          >
            Ecommerce{" "}
          </button>
          <img className="text-black" src={ChevronRight} alt="" />
          <span className="font-medium text-neutral-900">Login</span>
        </div>
      </div>
      <div className="flex items-center justify-center border border-black py-24">
        <div className="">
          <button className="border border-gray-300 rounded py-[10px] px-[71px] flex items-center gap-2 mb-8 hover:bg-neutral-100 transition-all duration-300">
            <img src={google} alt="" />
            <p className="text-[14px] font-medium text-neutral-500">
              Continue with Google
            </p>
          </button>
          <div className=" flex items-center justify-between mb-8">
            <div className="w-[136px] border"></div>
            <span className="font-medium text-xs text-neutral-500">OR</span>
            <div className="w-[136px] border"></div>
          </div>
          <div className="flex flex-col gap-[15px] mb-4">
            <div className="flex flex-col ">
              <label className="text-neutral-600 font-medium text-[15px]">
                Email
              </label>
              <input
                className=" outline-none border rounded h-[45px] px-4 placeholder:text-neutral-500"
                type="text"
              />
            </div>
            <div className="flex flex-col ">
              <label className="text-neutral-600 font-medium text-[15px]">
                Password
              </label>
              <input
                className=" outline-none border rounded h-[45px] placeholder:text-neutral-500"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center justify-end mb-6">
            <span className="text-xs text-neutral-600 font-medium cursor-pointer">
              Forgot Password?
            </span>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <button className="bg-neutral-900 text-white font-medium text-[14px] w-[320px] py-[10px] rounded">
              Login
            </button>
            <Link to='/signUp' className="text-[14px] text-neutral-500 font-normal">
              Don't have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
