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
    <div className="dark:bg-black">
      <div className="bg-neutral-100 dark:bg-neutral-900 h-[64px] flex items-center">
        <div className=" container mx-auto flex gap-1">
          <button
            onClick={handleClick}
            className="font-medium text-neutral-500 dark:text-neutral-300"
          >
            Honours
          </button>
          <img className="text-black" src={ChevronRight} alt="" />
          <span className="font-medium text-neutral-900  dark:text-neutral-100">Login</span>
        </div>
      </div>

      <div className="flex items-center justify-center py-24">
        <div className="">
          <button className="border border-gray-300 dark:border-neutral-600 dark:hover:bg-neutral-600 rounded py-[10px] px-[71px] flex items-center gap-2 mb-8 hover:bg-neutral-100 transition-all duration-300">
            <img src={google} alt="" />
            <p className="text-[14px] font-medium text-neutral-500 dark:text-neutral-100">
              Continue with Google
            </p>
          </button>
          <div className=" flex items-center justify-between mb-8">
            <div className="w-[136px] border dark:border-neutral-500"></div>
            <span className="font-medium text-xs text-neutral-500 dark:text-neutral-100">OR</span>
            <div className="w-[136px] border dark:border-neutral-500"></div>
          </div>
          <div className="flex flex-col gap-[15px] mb-4">
            <div className="flex flex-col ">
              <label className="text-neutral-600 font-medium text-[15px] dark:text-neutral-100">
                Email
              </label>
              <input
                className=" outline-none border dark:border-neutral-600 dark:placeholder:text-neutral-400 dark:bg-neutral-900 dark:text-neutral-100 rounded h-[45px] px-4 placeholder:text-neutral-500"
                type="text"
                placeholder="your Email"
              />
            </div>
            <div className="flex flex-col ">
              <label className="text-neutral-600 font-medium text-[15px] dark:text-neutral-100">
                Password
              </label>
              <input
                className=" outline-none border dark:border-neutral-600 dark:placeholder:text-neutral-400 dark:bg-neutral-900 dark:text-neutral-100 rounded px-4 h-[45px] placeholder:text-neutral-500"
                type="text"
                placeholder="your Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-end mb-6">
            <span className="text-xs text-neutral-600 dark:text-neutral-100 font-medium cursor-pointer">
              Forgot Password?
            </span>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <button className="bg-neutral-900 text-white border dark:border-neutral-600 hover:bg-neutral-800 transition-all duration-300 font-medium text-[14px] w-[320px] py-[10px] rounded">
              Login
            </button>
            <Link to='/signUp' className="text-[14px] text-neutral-500 font-normal dark:text-neutral-100">
              Don't have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
