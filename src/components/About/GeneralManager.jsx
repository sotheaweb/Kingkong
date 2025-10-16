import React from "react";
import logo from '../../assets/logo.png'
import manager from '../../assets/manager.png'

const GeneralManager = () => {
  return (
    <div
      id="gen"
      data-aos="fade-up"
      data-aos-delay="100"
      className="bg-cyan-600 py-12 px-6 sm:px-10 md:px-12 lg:px-24 lg:h-[520px]"
    >
      {/* Container with max-width for consistency */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Logo */}
        <div data-aos="fade-up" data-aos-delay="150" className="flex justify-center md:justify-start w-full md:w-auto">
          <img
            src={logo}
            alt="Company Logo"
            className="w-36 sm:w-40 md:w-48 h-auto object-contain mb-6 md:mb-0"
          />
        </div>

        {/* Text & Manager */}
        <div className="flex gap-10 flex-col md:flex-row w-full" data-aos="fade-up" data-aos-delay="150">
          <div className="flex flex-col gap-10">
            {/* Message Paragraph */}
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center md:text-left max-w-full md:max-w-xl">
              General Manager's Message
            </h2>
            <p className="text-gray-800 text-justify max-w-full md:max-w-3xl">
              Dear Valued Customers and business partners, I'm incredibly excited to officially introduce
              Kingkong Aviation, a new venture that launched originally in Cambodia. We're blending our global
              experience with a fresh, independent focus here in Cambodia. Our commitments are dedicated to
              providing not just excellent aviation services, but also a seamless and mutually beneficial partnership.
              Thank you for your continued support and trust. I'm confident we will achieve great things together.
            </p>

            <p className="text-gray-800 max-w-full md:max-w-3xl text-left">
              Sincerely,<br /> Mrs. Chanrynet YONG
            </p>
          </div>

          {/* Heading + Manager Image */}
          <div className="md:content-center mx-auto">
            <img
              src={manager}
              alt="Manager"
              className="w-60 md:w-110  lg:w-[20vw] rounded-md shadow-[0_35px_35px_rgba(0,0,0,0.20)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralManager;
