import React, { useState } from "react";

const Subscribe = () => {
    const [formData, setFormData] = useState({
      email: "",
    });
    const [formErrors, setFormErrors] = useState({
email:""
    });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
   const regex = {
     email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/,
   };
   const errors = {};
   if (!regex.email.test(formData.email)) {
     errors.email = "email is invalid.";
   }
      setFormErrors(errors);
      if (Object.keys(errors).length === 0) {
        setShowSuccessPopup(true);
      }
    };
    const handlePopupClose = () => {
      setShowSuccessPopup(false);
      setFormData({
        email: "",
      });
      setFormErrors({
        email: "",
      });
    };
  return (
    <div className="px-3">
      <div className="conatiner max-w-[1140PX] px-3 mx-auto bg-[url(./assets/images/formbg.webp)]  bg-no-repeat bg-cover bg-center rounded-[20px] sm:py-[60px] py-[30px] sm:translate-y-[35%] translate-y-[20%]">
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
            onSubmit={handleSubmit}
            class="flex justify-between rounded-md w-full border-[#FDFDFF33] border max-w-[448px] mx-auto sm:mt-[36px] mt-4"
            data-aos="zoom-in"
          >
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Enter your email"
              class=" placeholder:text-white w-full font-outfit font-semibold text-base bg-transparent  py-[24px]  px-3 outline-none"
            />

            <input
              type="submit"
              className="text-white border my-2 px-6 rounded font-outfit font-semibold mr-3 sm:text-base text-xs cursor-pointer transition-all duration-300 hover:border-black hover:text-black"
              value="Subscribe"
            />
          </form>
          {formErrors.email && (
            <p className="text-white pt-1 font-exo text-center">{formErrors.email}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
