import React from "react";
import aboutImg from "../assets/images/aboutImg.jpg";

const About = () => {
  return (
    <div className="border flex flex-col items-center justify-center">
      <div className="">
        <img src={aboutImg} alt="About Us" className="about-img" />
      </div>

      <div className="text-section container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">About us</h2>
        <p className="text-lg text-gray-600 mb-6">
          We have a more interesting life if you wear impressive clothes.
          Sometimes the simplest things are the most profound. Attention to
          detail is of utmost importance when you want to look good.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Design and style should work toward making you look good and feel good
          without a lot of effort so you can get on with the things that matter.
          War taught me that not everything is glamorous.
        </p>

        <div className="hours-section">
          <h3 className="text-xl font-medium mb-4">Operating Hours</h3>
          <ul className="text-lg text-gray-600">
            <li className="flex justify-between mb-2">
              <span>Monday – Friday</span>
              <span>9:30 – 20:00</span>
            </li>
            <li className="flex justify-between mb-2">
              <span>Saturday</span>
              <span>11:00 – 18:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
