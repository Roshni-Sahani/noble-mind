import React from "react";
import missionimg from "../assets/images/missionimg.webp";
import { Star } from "./Icon";
import triangle1 from "../assets/images/triangle1.webp";

const Mission = () => {
  return (
    <div className="lg:py-[150px] py-9 relative" id="aboutus">
      <div className="container max-w-[1140px] mx-auto">
        <div className="flex flex-row flex-wrap">
          <div className="lg:w-1/2 px-3 w-full flex justify-center">
            <div className="lg:pr-6" data-aos="zoom-in">
              <img
                src={missionimg}
                alt="missionimg"
                className=" rounded-tr-[50px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2 px-3 w-full" data-aos="zoom-in">
            <div className="flex items-center justify-center lg:justify-start pt-2 pt-lg-0">
              <Star />
              <p className=" mb-0 font-exo font-normal text-base">About Us</p>
            </div>
            <p className=" font-outfit md:text-[48px] sm:text-[38px] text-[28px] lg:leading-[57.6px] max-w-[521px] text-center lg:text-start lg:mx-0 mx-auto lg:pt-2">
              Pioneering Vision & Mission-
              <sapn className=" font-semibold">Driven Sectoral Innovation</sapn>
            </p>
            <p className="font-exo md:text-base text-sm font-normal text-[#4d4d4d] lg:max-w-[491px] lg:pt-4 text-center lg:text-start mx-auto lg:mx-0">
              Imagine a future in Saudi Arabia influenced by the potential of
              Al, with Noble Mind at the forefront of this transformation.
              Healthcare stands to gain with the promise of enhanced data
              precision. In education, there's the potential for individualized
              learning experiences. Finance could witness seamless transactions,
              and entertainment may revel in customized experiences. Through
              Al's promise, transportation could innovate and cities might adapt
              smarter infrastructures. In every domain, the vision of Noble Mind
              hints at a brighter, more efficient nation.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="py-[14px]  relative px-[24px] overflow-hidden font-exo rounded-[4px] text-white text-base bg-bg-gradient z-[1] after:z-[-1] before:z-[-1] font-semibold border-solid border border-white transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-black before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:-full after:bg-black after:duration-500 hover:text-white hover:before:h-2/4 hover:after:h-2/4 duration-300 lg:mt-10 mt-3">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={triangle1}
        alt="triangle1"
        className="absolute top-0 left-[2%] hidden sm:block animate-pulse"
      />
      <img
        src={triangle1}
        alt="triangle1"
        className="absolute bottom-[15%] right-[5%] hidden sm:blockanimate-pulse"
      />
    </div>
  );
};

export default Mission;
