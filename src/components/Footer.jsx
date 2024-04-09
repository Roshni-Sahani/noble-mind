import React from "react";  
import { Facebook, Instagram, Linkedin, Logo1, Twitter } from "./Icon";

const Footer = () => {
  return (
    <div
      className="bg-[url(./assets/images/footerbg.webp)] bg-cover bg-no-repeat"
      id="blog"
    >
      <div className="max-w-[1140px] container mx-auto">
        <div className="flex flex-row flex-wrap sm:pt-[140px] pt-[100px]">
          <div className="md:w-1/2 w-full px-3">
            <Logo1/>
            <p className="text-white font-normal text-base font-exo sm:pt-[28px] pt-3 pb-2">
              Follow Us
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="hover:scale-105 transition-all duration-300"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/accounts/login/"
                target="_blank"
                className="hover:scale-105 transition-all duration-300"
              >
                <Instagram />
              </a>
              <a
                href="https://twitter.com/login"
                target="_blank"
                className="hover:scale-105 transition-all duration-300"
              >
                <Twitter />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                className="hover:scale-105 transition-all duration-300"
              >
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 w-full px-3 ">
            <div className="flex flex-row flex-wrap mb-9 mt-3 lg:mt-0">
              <div className="w-1/2 lg:px-3 flex lg:justify-end">
                <ul>
                  <li className="font-outfit font-semibold text-base text-white">
                    Maine
                  </li>
                  <li className="pt-4">
                    <a
                      href="#home"
                      className="font-exo font-normal text-base text-[#b7b7b4] hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#fff]"
                    >
                      Home
                    </a>
                  </li>
                  <li className="pt-[14px]">
                    <a
                      href="#aboutus"
                      className="font-exo font-normal text-base text-[#b7b7b4] hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#fff]"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="pt-[14px]">
                    <a
                      href="#services"
                      className="font-exo font-normal text-base text-[#b7b7b4] hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#fff]"
                    >
                      services
                    </a>
                  </li>
                  <li className="pt-[14px]">
                    <a
                      href="#aboutus"
                      className="font-exo font-normal text-base text-[#b7b7b4] hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#fff]"
                    >
                      Why Choose Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 px-3 flex lg:justify-end">
                <ul>
                  <li className="font-outfit font-semibold text-base text-white">
                    Legal
                  </li>
                  <li className="pt-4">
                    <a
                      href="#home"
                      className="font-exo font-normal text-nowrap text-base text-[#b7b7b4] hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#fff]"
                    >
                      Term & Conduction
                    </a>
                  </li>
                  <li className="pt-[14px]">
                    <a
                      href="#aboutus"
                      className="font-exo font-normal text-base text-[#b7b7b4] hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#fff]"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="pt-[14px]">
                    <a
                      href="#services"
                      className="font-exo font-normal text-base text-[#b7b7b4] hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#fff]"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="pt-[14px]">
                    <a
                      href=""
                      className="font-exo font-normal text-base text-[#b7b7b4] hover:text-[#fff] after:rounded-[10px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#fff]"
                    >
                      (629) 555-0129
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border border-[#5A5A50]"></div>
      <p className="font-exo font-normal text-[14px] leading-5 py-4 text-center text-[#B8B8B4]">
        © Copyright 2023 Noble Mind | All rights reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
