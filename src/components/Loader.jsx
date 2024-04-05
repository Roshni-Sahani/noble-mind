import React from "react";
import footlogo from "../assets/images/footlogo.webp";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div class="border-gray-300 h-[150px] w-[150px] animate-bounce rounded-full border-8 border-t-[#A854E9] flex justify-start items-center px-2">
        <img src={footlogo} alt="footlogo" />
      </div>
    </div>
  );
};

export default Loader;
