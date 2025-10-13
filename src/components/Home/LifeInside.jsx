import React from "react";

// Assuming your images are in the src/assets folder
import image1 from "../../assets/news6.jpg";
import image2 from "../../assets/news7.jpg";
import image3 from "../../assets/news8.jpg";

const LifeInside = () => {
  return (
    <div className="bg-white px-4 mt-15 sm:px-6 lg:px-12 py-10">
      {/* Main Heading */}
      <h1 
        className="text-3xl md:text-4xl font-bold text-cyan-600 text-center mb-8"
        data-aos="fade-up" 
        data-aos-delay="50"
      >
        Life Inside King Kong Aviation Cambodia
      </h1>

      {/* Main Content Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* First Image */}
        <div className="p-5 hover:shadow-sm duration-300 hover:scale-105 transition delay-70 lg:h-[55vh]">
          <img
            src={image1}
            alt="Team photo in the office"
            className="w-full rounded-lg shadow-lg object-cover sm:h-[30vh] lg:h-[45vh]"
            data-aos="fade-up" 
            data-aos-delay="50"
          />
          <p 
            className="mt-5 font-medium"
            data-aos="fade-up" 
            data-aos-delay="50"
          >
            Drive The World With Passion!
          </p>
        </div>

        {/* Second Image */}
        <div className="p-3 hover:shadow-sm duration-300 hover:scale-105 transition delay-70">
          <img
            src={image2}
            alt="Team photo with flowers"
            className="w-full h-auto rounded-lg shadow-lg object-cover sm:h-[40vh] lg:h-[65vh]"
            data-aos="fade-up" 
            data-aos-delay="50"
          />
        </div>

        {/* Third Image & Text Block */}
        <div className="p-3 hover:shadow-sm duration-300 hover:scale-105 transition delay-70 flex flex-col lg:h-[50vh]">
          <img
            src={image3}
            alt="Team photo outdoors"
            className="w-full rounded-lg shadow-lg mb-4 object-cover sm:h-[30vh] lg:h-[30vh]"
            data-aos="fade-up" 
            data-aos-delay="50"
          />
          <div className="">
            <p 
              className="text-sm sm:text-base text-gray-700"
              data-aos="fade-up" 
              data-aos-delay="50"
            >
              We are a leading freight forwarding company in Cambodia,
              specializing in the import and export of various goods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeInside;
