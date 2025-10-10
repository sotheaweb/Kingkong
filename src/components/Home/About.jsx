import React from "react";

const AboutUsSection = ({image}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto py-12 px-6 lg:px-15 gap-5">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left md:max-w-md">
        <h2 
          className="text-3xl md:text-4xl font-bold text-cyan-600 mb-4"
          data-aos="fade-up"
          data-aos-delay="200">
          About Us
        </h2>
        <p className="leading-relaxed text-gray-700 mb-6" data-aos="fade-up" data-aos-delay="100">
          We don't just move cargo; we craft the best solutions designed 
          specifically for your business.
        </p>
        <a
          href="/about"
          className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium bg-cyan-600 rounded-lg shadow-md hover:bg-cyan-700 transition-colors duration-300 cursor-pointer"
          data-aos="fade-up" data-aos-delay="200"
        >
          Read more
          <span className="text-lg">&rarr;</span>
        </a>
      </div>

      {/* Image Content */}
      <div className="flex-1 flex justify-end mt-8 md:mt-0 lg:h-[50vh] lg:w-[50vh] duration-300 transition delay-70 hover:scale-102">
        <img
          src={image}
          alt="A person standing next to the Kingkong logo."
          className="max-w-full h-auto rounded-lg lg:w-[30vw]"
          data-aos="fade-left" data-aos-delay="300"
        />
      </div>
    </div>
  );
};

export default AboutUsSection;
