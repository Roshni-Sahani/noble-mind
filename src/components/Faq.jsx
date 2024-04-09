import React from "react";
import triangle1 from "../assets/images/triangle1.webp";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <div className="relative">
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        className={`${id === open ? "rotate-180" : ""}    transition-transform`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.7">
          <path
            d="M12.449 15.6904C12.3157 15.6904 12.1864 15.6654 12.061 15.6154C11.9357 15.5654 11.8317 15.4987 11.749 15.4154L7.14902 10.8154C6.96569 10.632 6.87402 10.3987 6.87402 10.1154C6.87402 9.83205 6.96569 9.59871 7.14902 9.41538C7.33236 9.23205 7.56569 9.14038 7.84902 9.14038C8.13236 9.14038 8.36569 9.23205 8.54902 9.41538L12.449 13.3154L16.349 9.41538C16.5324 9.23205 16.7657 9.14038 17.049 9.14038C17.3324 9.14038 17.5657 9.23205 17.749 9.41538C17.9324 9.59871 18.024 9.83205 18.024 10.1154C18.024 10.3987 17.9324 10.632 17.749 10.8154L13.149 15.4154C13.049 15.5154 12.9407 15.5864 12.824 15.6284C12.7074 15.6704 12.5824 15.691 12.449 15.6904Z"
            fill="#131200"
          />
        </g>
      </svg>

      {/* <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="absolute rotate-180"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.7">
          <path
            d="M12.0008 9.0252C11.8674 9.0252 11.7381 9.0502 11.6128 9.1002C11.4874 9.1502 11.3834 9.21686 11.3008 9.3002L6.70078 13.9002C6.51745 14.0835 6.42578 14.3169 6.42578 14.6002C6.42578 14.8835 6.51745 15.1169 6.70078 15.3002C6.88411 15.4835 7.11745 15.5752 7.40078 15.5752C7.68411 15.5752 7.91745 15.4835 8.10078 15.3002L12.0008 11.4002L15.9008 15.3002C16.0841 15.4835 16.3174 15.5752 16.6008 15.5752C16.8841 15.5752 17.1174 15.4835 17.3008 15.3002C17.4841 15.1169 17.5758 14.8835 17.5758 14.6002C17.5758 14.3169 17.4841 14.0835 17.3008 13.9002L12.7008 9.3002C12.6008 9.2002 12.4924 9.1292 12.3758 9.0872C12.2591 9.0452 12.1341 9.02453 12.0008 9.0252Z"
            fill="#131200"
          />
        </g>
      </svg> */}
    </div>
  );
}
const Faq = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="lg:pb-9 relative" id="faq">
      <div className="container max-w-[1140px] px-3 mx-auto" data-aos="zoom-in">
        <p className="font-light lg:leading-[57.6px] font-outfit text-center md:text-[48px] sm:text-[38px] text-[28px]">
          Frequently <sapn className="font-semibold"> Asked Questions</sapn>
        </p>
        <p className="font-normal md:text-base text-sm font-exo text-center max-w-[497px] mx-auto pt-4 md:pb-[52px] pb-3">
          Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu volutpat
          mi leo. Nibh nisl consequat metus.
        </p>
        <div className="max-w-[774px] mx-auto">
          <Accordion
            className={` border-[#A854E933] overflow-hidden border mb-[18px] rounded-[6px] py-6 px-6 shadow-[0px_4px_32px_0px_#00000014] relative after:absolute after:w-full after:h-[5px] after:bg-[#A854E9] after:bottom-0 after:left-0 after:right-0
             ${open === 1 ? "border-[#A854E9] !after:block" : "after:hidden"}
`}
            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`font-outfit text-base py-0 text-start font-medium  text-[#4d4d4d] ${
                open === 1 ? "opacity-100" : "opacity-70"
              } `}
            >
              What is Artificial Intelligence (AI)?
            </AccordionHeader>
            <AccordionBody className="font-exo md:text-base text-sm font-normal max-w-[680px]">
              Artificial Intelligence refers to the development of computer
              systems that can perform tasks that typically require human
              intelligence. These tasks include learning, reasoning,
              problem-solving, perception, and language understanding.
            </AccordionBody>
          </Accordion>
          <Accordion
            className={` border-[#A854E933] border mb-[18px] rounded-[6px] py-6 px-6 shadow-[0px_4px_32px_0px_#00000014] relative after:absolute after:w-full after:h-[5px] after:bg-[#A854E9] after:bottom-0 after:left-0 after:right-0
             ${open === 2 ? "border-[#A854E9] !after:block" : "after:hidden"}`}
            open={open === 2}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`font-outfit text-base py-0 text-start font-medium  text-[#4d4d4d] ${
                open === 2 ? "opacity-100" : "opacity-70"
              } `}
            >
              {" "}
              How does AI benefit our company?
            </AccordionHeader>
            <AccordionBody className="font-exo text-base font-normal max-w-[680px]">
              Artificial Intelligence refers to the development of computer
              systems that can perform tasks that typically require human
              intelligence. These tasks include learning, reasoning,
              problem-solving, perception, and language understanding.
            </AccordionBody>
          </Accordion>
          <Accordion
            className={`border-[#A854E933] border mb-[18px] rounded-[6px] py-6 px-6 shadow-[0px_4px_32px_0px_#00000014] relative after:absolute after:w-full after:h-[5px] after:bg-[#A854E9] after:bottom-0 after:left-0 after:right-0
             ${open === 3 ? "border-[#A854E9] !after:block" : "after:hidden"}`}
            open={open === 3}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`font-outfit text-base py-0 text-start font-medium  text-[#4d4d4d] ${
                open === 3 ? "opacity-100" : "opacity-70"
              } `}
            >
              {" "}
              What types of AI technologies are relevant to our industry?
            </AccordionHeader>
            <AccordionBody className="font-exo text-base font-normal max-w-[680px]">
              Artificial Intelligence refers to the development of computer
              systems that can perform tasks that typically require human
              intelligence. These tasks include learning, reasoning,
              problem-solving, perception, and language understanding.
            </AccordionBody>
          </Accordion>
          <Accordion
            className={` border-[#A854E933] border mb-[18px] rounded-[6px] py-6 px-6 shadow-[0px_4px_32px_0px_#00000014] relative after:absolute after:w-full after:h-[5px] after:bg-[#A854E9] after:bottom-0 after:left-0 after:right-0
             ${open === 4 ? "border-[#A854E9] !after:block" : "after:hidden"}`}
            open={open === 4}
            icon={<Icon id={4} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`font-outfit text-base py-0 text-start font-medium  text-[#4d4d4d] ${
                open === 4 ? "opacity-100" : "opacity-70"
              } `}
            >
              How can our employees adapt to AI integration?
            </AccordionHeader>
            <AccordionBody className="font-exo text-base font-normal !py-0 max-w-[680px]">
              Artificial Intelligence refers to the development of computer
              systems that can perform tasks that typically require human
              intelligence. These tasks include learning, reasoning,
              problem-solving, perception, and language understanding.
            </AccordionBody>
          </Accordion>
          <Accordion
            className={` border-[#A854E933] border mb-[18px] rounded-[6px] py-6 px-6 shadow-[0px_4px_32px_0px_#00000014] relative after:absolute after:w-full after:h-[5px] after:bg-[#A854E9] after:bottom-0 after:left-0 after:right-0
             ${open === 5 ? "border-[#A854E9] !after:block" : "after:hidden"}`}
            open={open === 5}
            icon={<Icon id={5} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className={`font-outfit text-base py-0 text-start font-medium  text-[#4d4d4d] ${
                open === 5 ? "opacity-100" : "opacity-70"
              } `}
            >
              How can our company ensure data security with AI?
            </AccordionHeader>
            <AccordionBody className="font-exo text-base font-normal max-w-[680px]">
              Artificial Intelligence refers to the development of computer
              systems that can perform tasks that typically require human
              intelligence. These tasks include learning, reasoning,
              problem-solving, perception, and language understanding.
            </AccordionBody>
          </Accordion>
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
        className="absolute bottom-0 left-[2%] hidden sm:block animate-pulse"
      />
      <img
        src={triangle1}
        alt="triangle1"
        className="absolute bottom-[15%] right-[5%] hidden sm:block animate-pulse"
      />
    </div>
  );
};

export default Faq;
