import React from "react";
import logo from '../../assets/logo.png'
import manager from '../../assets/manager.png'

const GeneralManager = () => {
  return (
      <div 
        className="bg-cyan-600 md:flex justify-center items-center gap-20 p-10"
        data-aos="fade-up" data-aos-delay="100"
        id="gen"
      >
        <div data-aos="fade-up" data-aos-delay="150"  >
          <img src={logo} alt="Company Logo" className="w-50 h-50 object-contain mb-8 ml-10 md:-ml-10" />
        </div>
        <div className="flex flex-col gap-6 max-w-1xl" data-aos="fade-up" data-aos-delay="150">
          <div className="md:flex items-center md:justify-between justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              General Manager's Message <br /> to our - allies 
            </h2>
            <img src={manager} alt="Image loading" className="md:w-[15vw] rounded-lg shadow-[0_35px_35px_rgba(0,0,0,0.20)]"/>
          </div>
          <p className="text-gray-800 max-w-3xl">
            Dear Valued Customers and businuess partners, 
            I'm incredibly excited to officially introduce 
            Kingkong Aviation, a new venture that launched 
            orignally in Cambodia. We're blending our global 
            experience with a fresh, independent focus here in Cambodia.
            Our commitments are dedicated to providing not just 
            excellent aviation services, but also a seamless and 
            mutually beneficial partnership. Thank you for your 
            continued support and trust. I'm confident we will achieve great things together.
          </p>
          <p className="text-gray-800 max-w-3xl">
            Sincerely,<br /> Mrs. Chanrynet YONG
          </p>
        </div>
      </div>
  );
};

export default GeneralManager;
