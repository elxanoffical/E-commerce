import React from "react";
import chevronDown from "../assets/icons/global/Chevron Down.svg";
import avatar from "../assets/images/AvatarReview.svg";
import starIcon from "../assets/icons/global/Star.svg";
import emptyStar from "../assets/icons/global/Empty Star.svg";
import { useOutletContext } from "react-router-dom";

const Reviews = () => {
  const { reviews } = useOutletContext();

  let sumOfStar = reviews.reduce((acc, review) => {
    return acc + review.stars;
  }, 0);

  let reviewsStarsAverage = (sumOfStar / reviews.length).toFixed(2);

  return (
    <div className=" flex flex-col gap-6 w-[727px]">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h3 className=" font-semibold">Reviews</h3>
          <span className="text-2xl font-bold flex gap-3">
            {reviewsStarsAverage}
            <p className="text-[14px] font-light text-neutral-500">
              — {reviews.length} Reviews
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
        {reviews.map((item, index) => {
          return (
            <div key={index} className="flex items-start gap-6 py-[39px] px-2">
              <img src={avatar} alt="" />
              <div className=" flex flex-col gap-4 w-[727px]">
                <div className=" flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[16px] font-medium">{item.author}</h3>
                    <div className="flex">
                      {Array.from({ length: item.stars }).map((star, index) => {
                        return <img key={index} src={starIcon} />;
                      })}
                      {Array.from({ length: 5 - item.stars }).map(
                        (star, index) => {
                          return <img key={index} src={emptyStar} />;
                        }
                      )}
                    </div>
                  </div>
                  <p className="text-[16px] font-medium text-neutral-500">
                    {item.createdAt.split('T')[0]}
                  </p>
                </div>
                <p className="font-normal text-[14px] text-neutral-500">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
