import React from "react";

const AboutUsSection = ({ image }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-w-[1200px] mx-auto py-12 px-4 sm:px-6 md:px-8 lg:px-12 gap-8">
      
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left md:max-w-[550px]">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-600 mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          About Us
        </h2>
        <p
          className="text-sm sm:text-base md:text-lg leading-relaxed text-cyan-600 mb-6 text-justify"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We don't just move cargo; we craft the best solutions designed 
          specifically for your business. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, delectus adipisci. Earum obcaecati in vitae voluptas aspernatur. Vitae, nulla eaque ratione minima adipisci aliquam aperiam sit, ipsam rem distinctio nisi!
        </p>
        <a
          href="/about"
          className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium bg-cyan-600 rounded-lg shadow-md hover:bg-cyan-700 transition-colors duration-300 cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Read more
          <span className="text-lg">&rarr;</span>
        </a>
      </div>

      {/* Image Content */}
      <div 
       className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0"
       data-aos="fade-left"
       data-aos-delay="300"
      >
        <img
          src={image}
          alt="A person standing next to the Kingkong logo."
          className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[420px] h-auto rounded-lg duration-300 transition-transform hover:scale-105"
          
        />
      </div>
    </div>
  );
};

export default AboutUsSection;
