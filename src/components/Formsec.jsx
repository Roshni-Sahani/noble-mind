import { useState } from "react";
import girlimg from "../assets/images/girlimg.webp";

const Formsec = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    number: "",
    password: "",
    confirmPassword: "",
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
      name: /^[a-zA-Z\s]+$/,
      number: /^\d{10}$/,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
      confirmPassword:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
    };
    const errors = {};
    if (!regex.name.test(formData.name)) {
      errors.name = "Name is invalid.";
    }
    if (!regex.number.test(formData.number)) {
      errors.number = "Last Name is invalid.";
    }
    if (!regex.password.test(formData.password)) {
      errors.password = "Email is invalid.";
    }
    if (!regex.confirmPassword.test(formData.confirmPassword)) {
      errors.confirmPassword = "Confirm password is invalid.";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.Message = "Passwords do not match.";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowSuccessPopup(true);
    }
  };
  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: "",
      number: "",
      password: "",
      confirmPassword: "",
    });
    setFormErrors({
      name: "",
      number: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <div className="lg:pb-[150px] pb-9" id="formsec">
      <div className="conatiner max-w-[1140px] px-3 mx-auto">
        <div className="row flex lg:flex-row flex-wrap flex-col-reverse justify-center items-center">
          <div
            className="lg:w-1/2 px-3 w-full max-w-[478px]"
            data-aos="zoom-in"
          >
            <p className="font-outfit font-semibold md:text-[48px] sm:text-[38px] text-[28px] leading-[57.6px] text-center lg:text-start">
              Contact <span className="font-light">Us</span>
            </p>
            <p className="font-exo font-normal text-center lg:text-start md:text-base text-sm max-w-[409px] text-[#5A594D] md:pb-4 md:pt-4">
              Feel free to contact us any time . We will get back to you as soon
              as we can!
            </p>
            <form className="registration-form" onSubmit={handleSubmit}>
              <div className="sm:flex gap-3 w-full">
                <div className="form-group font-exo  w-full font-normal text-base text-[#5A594D]">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full "
                  />
                  {formErrors.name && (
                    <p className="error-message">{formErrors.name}</p>
                  )}
                </div>
                <div className="form-group  w-full font-exo font-normal text-base text-[#5A594D]">
                  <label htmlFor="number">Last Name</label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className={
                      formErrors.number ? "error" : "w-full sm:w-[233px]"
                    }
                  />
                  {formErrors.number && (
                    <p className="error-message">{formErrors.number}</p>
                  )}
                </div>
              </div>
              <div className="form-group font-exo font-normal text-base text-[#5A594D] w-full lg:w-[478px]">
                <label htmlFor="password">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full lg:w-[454px]  border border-solid border-[#D0D0CC]  h-[48px] rounded-[8px] ${
                    formErrors.password ? "error" : ""
                  }`}
                />
                {formErrors.password && (
                  <p className="error-message">{formErrors.password}</p>
                )}
              </div>
              <div className="form-group font-exo font-normal text-base text-[#5A594D] w-full lg:w-[478px]">
                <label htmlFor="confirmPassword">Message</label>
                <textarea
                  name=""
                  id=""
                  rows="10"
                  className="w-full border lg:max-w-[454px] border-solid border-[#D0D0CC]  h-[135px] rounded-[8px] resize-none"
                ></textarea>
              </div>
              <div className="flex justify-center lg:justify-start">
                <button className="py-[14px]  relative px-[24px] overflow-hidden font-exo rounded-[4px] text-white text-base bg-bg-gradient z-[1] after:z-[-1] before:z-[-1] font-semibold border-solid border border-white  duration-300 transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-black before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:-full after:bg-black after:duration-500 hover:text-white hover:before:h-2/4 hover:after:h-2/4">
                  Submit
                </button>
              </div>
            </form>
            {showSuccessPopup && (
              <div className="success-popup">
                <p>Form submitted successfully!</p>
                <button onClick={handlePopupClose}>Close</button>
              </div>
            )}
          </div>
          <div
            className="lg:w-1/2 px-3 w-full flex justify-center lg:justify-start lg:pl-10"
            data-aos="zoom-in"
          >
            <img src={girlimg} alt="girl" className="rounded-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formsec;
