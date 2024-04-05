import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div className="conatiner max-w-[1140PX] px-3 lg:mx-auto bg-[url(./assets/images/formbg.webp)] rounded-[20px] sm:py-[60px] py-[30px] sm:translate-y-[35%] translate-y-[20%] mx-3 lg:mx-0 ">
        <div>
          <p
            className="text-white  md:text-[48px] sm:text-[38px] text-[28px] font-outfit lg:leading-[57.6px] text-center"
            data-aos="zoom-in"
          >
            Subscribe to our <sapn className="font-semibold">Newsletter!</sapn>
          </p>
          <p
            className="text-[#FDFDFF] font-exo font-normal md:text-base text-sm text-center pt-2"
            data-aos="zoom-in"
          >
            Be the first to get exclusive offers and the latest news.
          </p>
          <form
            class="flex justify-between rounded-md w-full border-[#FDFDFF33] border max-w-[448px] mx-auto sm:mt-[36px] mt-4"
            data-aos="zoom-in"
          >
            <input
              type="text"
              placeholder="Enter your email"
              class=" placeholder:text-white w-full font-outfit font-semibold text-base bg-transparent  py-[24px]  px-3 outline-none"
            />
            <input
              type="button"
              className="text-white border my-2 px-6 rounded font-outfit font-semibold mr-3 sm:text-base text-xs cursor-pointer transition-all duration-300 hover:border-black hover:text-black"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
