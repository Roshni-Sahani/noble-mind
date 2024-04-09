import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import bigimg from "../assets/images/bigimg.webp";
import triangle1 from "../assets/images/triangle1.webp";
import "swiper/css";
import "swiper/css/pagination";

import { Star } from "./Icon";
const ChooseUs = () => {
  const Items = [
    {
      id: 1,
      title: "Customer-Centric",
      para: "Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.",
    },
    {
      id: 2,
      title: "Workplace Harmony",
      para: "Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are more than a team; we are a family..",
    },
    {
      id: 3,
      title: "Ethical Leadership",
      para: "Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.",
    },
    {
      id: 4,
      title: "Customer-Centric",
      para: "Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.",
    },
  ];
  return (
    <div className="lg:mb-[150px] mb-9 relative" id="services">
      <div className="container max-w-[1140px] mx-auto flex flex-col items-center justify-center overflow-hidden">
        <p className="flex items-center font-exo font-normal text-base pl-1">
          <Star />
          Why Choose Us
        </p>
        <p className="font-outfit font-light md:text-[48px] sm:text-[38px] text-[28px] lg:leading-[57.6px] text-center max-w-[521px] mx-auto">
          Driving Innovation &{" "}
          <sapn className="font-semibold">Transforming Industries</sapn>{" "}
        </p>
        <div className=" w-full mt-[52px]">
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            modules={[Pagination]}
            breakpoints={{
              567: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full"
          >
            {Items.map((items, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`border border-[#EEDDFB] rounded-xl overflow-hidden p-[18px] max-w-[368px] px-9 mx-auto  min-[1441px]:max-w-[424px] w-full min-h-[208px] `}
                >
                  <span className="border-[7px] text-sm font-bold font-Outfit flex items-center justify-center rounded-full overflow-hidden bg-gradient-to-tr from-[#A854E9] to-[#4F91FC] bg-clip-text text-transparent border-[#F4EAFC] h-9 w-9">
                    {items.id}
                  </span>
                  <p className="mt-3 text-xl font-normal font-outfit text-[#131200]">
                    {items.title}
                  </p>
                  <p className="mt-1 text-base font-exo font-normal text-[#5A594D]">
                    {items.para}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination">
            <span className="swiper-pagination-bullet"></span>
          </div>
        </div>
        <div data-aos="zoom-in">
          <img src={bigimg} alt="bigimg" className="rounded-[24px] mt-9" />
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
        className="absolute bottom-[15%] right-[5%] hidden sm:block animate-pulse max-sm:h-[200px] max-sm:object-cover"
      />
    </div>
  );
};
export default ChooseUs;
