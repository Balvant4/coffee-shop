import React from "react";
import Button from "../smallcomponents/Button";
import { coffee2 } from "../../public/index";

const Hero = () => {
  return (
    <>
      <div className="bg-body1  text-white grid md:grid-cols-2  items-center  sm:min-h-[600px] lg:px-10 px-5 ">
        {/* Left Section */}
        <div
          className="lg:order-1 order-2 items-center flex flex-col "
          data-aos="fade-right"
        >
          <h1 className="lg:text-[4rem] pb-5 text-[3rem] font-bold lg:leading-[5rem] leading-[4rem]">
            We serve the richest{" "}
            <span className="text-[#854D3D] font-cursive ">Coffee</span> in the
            city
          </h1>
          <Button text="Coffee And Code" />
        </div>
        {/* Right Section */}
        <div className="lg:order-2 order-1 flex items-center">
          <div className=" xl:absolute right-20 " data-aos="zoom-in">
            <img src={coffee2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
