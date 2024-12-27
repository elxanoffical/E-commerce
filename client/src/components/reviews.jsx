import React from "react";
import chevronDown from "../assets/icons/global/Chevron Down.svg";
import avatar from "../assets/images/AvatarReview.svg";
import star from "../assets/icons/global/Star.svg";
import emptyStar from "../assets/icons/global/Empty Star.svg";

const Reviews = () => {
  return (
    <div className=" flex flex-col gap-6 w-[727px]">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h3 className=" font-semibold">Reviews</h3>
          <span className="text-3xl font-bold flex gap-3">
            4.2
            <p className="text-[14px] font-light text-neutral-500">
              — 54 Reviews
            </p>
          </span>
        </div>
        <div className=" flex justify-between">
          <button className="font-medium border-black border rounded py-3 px-6">
            Write a review
          </button>
          <span className="text-[13px] font-medium flex items-center gap-[6px] text-neutral-500 mt-6">
            SORT BY
            <img src={chevronDown} alt="" />
          </span>
        </div>
      </div>

      <div className="">
        <div className="border flex items-start gap-6 py-[39px] px-2">
          <img src={avatar} alt="" />
          <div className=" flex flex-col gap-4 w-[727px]">
            <div className=" flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-medium">Emily Davis</h3>
                <div className="flex">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={emptyStar} alt="" />
                </div>
              </div>
              <p className="text-[16px] font-medium text-neutral-500">1 Week ago</p>
            </div>
            <p className="font-normal text-[14px] text-neutral-500">
              This company always goes above and beyond to satisfy their
              customers.
            </p>
          </div>
        </div>
        <div className="border flex items-start gap-6 py-[39px] px-2">
          <img src={avatar} alt="" />
          <div className=" flex flex-col gap-4 w-[727px]">
            <div className=" flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-medium">Daniel Smith</h3>
                <div className="flex">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={emptyStar} alt="" />
                </div>
              </div>
              <p className="text-[16px] font-medium text-neutral-500">2 Month ago</p>
            </div>
            <p className="font-normal text-[14px] text-neutral-500">
            I can't believe how affordable and high-quality this item is!.
            </p>
          </div>
        </div>
        <div className="border flex items-start gap-6 py-[39px] px-2">
          <img src={avatar} alt="" />
          <div className=" flex flex-col gap-4 w-[727px]">
            <div className=" flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-medium">Benjamin Clark</h3>
                <div className="flex">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={emptyStar} alt="" />
                </div>
              </div>
              <p className="text-[16px] font-medium text-neutral-500">23 April</p>
            </div>
            <p className="font-normal text-[14px] text-neutral-500">
            These guys know their stuff, and it shows in their products..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
