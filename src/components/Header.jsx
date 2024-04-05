import React, { useState } from "react";
import logo from "../assets/images/logo.webp";
import { Star } from "./Icon";
const Header = () => {
  const [show, setshow] = useState(true);
  function view() {
    setshow(!show);
    if (show === true) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  }
  return (
    <div id="home">
      <div className="lg:h-screen md:min-h-[700px] h-[500px] bg-[url(./assets/images/herobg.webp)] relative after:absolute bg-center max-lg:after:w-full  after:h-full after:bg-white after:opacity-[0.8] after:z-[-1] z-[1] bg-left  lg:bg-center bg-no-repeat flex flex-col">
        <nav className="container max-w-[1140px] mx-auto  px-3">
          <div className="flex items-center  py-5 justify-between">
            <div className="flex items-center">
              <img src={logo} alt="logo" />
            </div>
            <ul
              className={`flex items-center gap-6 mb-0 justify-center mobileView ${
                show ? "right-[-100%]" : "right-0"
              }`}
            >
              <li>
                <a
                  href="#home"
                  onClick={view}
                  className="font-normal font-exo text-base text-[#5A594D] hover:text-black"
                >
                  Home
                </a>
              </li>
              <li onClick={view}>
                <a
                  href="#aboutus"
                  onClick={view}
                  className="font-normal text-base font-exo text-[#5A594D] hover:text-[#000]"
                >
                  About Us
                </a>
              </li>
              <li onClick={view}>
                <a
                  href="#services"
                  onClick={view}
                  className="font-normal text-base font-exo text-[#5A594D] hover:text-[#000]"
                >
                  Services
                </a>
              </li>
              <li onClick={view}>
                <a
                  href="#aboutus"
                  onClick={view}
                  className="font-normal text-base font-exo text-[#5A594D] hover:text-[#000]"
                >
                  Why Choose Us
                </a>
              </li>
              <li onClick={view}>
                <a
                  href="#blog"
                  onClick={view}
                  className="font-normal text-base font-exo text-[#5A594D] hover:text-[#000]"
                >
                  Blogs
                </a>
              </li>
              <li onClick={view}>
                <a
                  href="#faq"
                  onClick={view}
                  className="font-normal text-base font-exo text-[#5A594D] hover:text-[#000]"
                >
                  FAQ
                </a>
              </li>
              <li>
                <button className="py-[14px]  relative px-[24px] overflow-hidden font-exo rounded-[4px] text-white text-base bg-bg-gradient z-[1] after:z-[-1] before:z-[-1] font-semibold border-solid border border-white  duration-300 transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-black before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:-full after:bg-black after:duration-500 hover:text-white hover:before:h-2/4 hover:after:h-2/4">
                  Contact Us
                </button>
              </li>
            </ul>
            <label
              className="cursor-pointer lg:hidden w-[32px] sm:h-[26px] h-[22px] relative z-50 flex justify-between flex-col"
              onClick={view}
            >
              <span
                className={`${
                  show
                    ? ""
                    : " rotate-[50deg] translate-y-[16px] sm:translate-y-[20px]"
                } bg-[#000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
              <span
                className={`${
                  show ? "" : "hidden"
                } bg-[#000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
              <span
                className={`${
                  show ? "" : "rotate-[-50deg] translate-y-[-50%]"
                } bg-[#000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
            </label>
          </div>
        </nav>
        <div className="flex flex-grow items-center">
          <div
            className="container max-w-[1140px] mx-auto  px-3"
            data-aos="zoom-in"
          >
            <div className="flex items-center justify-center lg:justify-start">
              <Star />
              <p className="font-exo font-normal text-base text-[#131200] mb-0">
                AI With Noble Mind
              </p>
            </div>
            <p className="font-outfit font-light lg:text-[64px] md:text-[50px] sm:text-[35px] text-[30px] lg:leading-[76.8px] max-w-[584px] mb-0 text-center lg:text-start mx-auto  lg:mx-0">
              Inspiring Innovation, Elevating Solutions –
              <span className="font-Montserrat font-extrabold">
                {" "}
                Noble Mind"
              </span>
            </p>
            <p className="font-exo font-normal md:text-base text-sm max-w-[584px] text-[#4d4d4d] mb-0 text-center lg:text-start mx-auto lg:mx-0">
              At Noble Mind is a forward-thinking AI specialised company
              dedicated to reshaping the future of how we live, work, and learn.
              Our mission is to create ground-breaking AI solutions for
              Healthcare, Education, and beyond, aligning with Saudi Arabia’s
              Vision 2030.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
