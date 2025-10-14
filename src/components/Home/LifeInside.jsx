import React from "react";

// Assuming your images are in the src/assets folder
import image1 from "../../assets/news6.jpg";
import image2 from "../../assets/news7.jpg";
import image3 from "../../assets/news8.jpg";

const LifeInside = () => {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-12 py-12">
      {/* Main Heading */}
      <h1
        className="text-3xl sm:text-4xl font-bold text-cyan-600 text-center mb-12 max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Life Inside King Kong Aviation Cambodia
      </h1>

      {/* Main Content Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto justify-center">
        {/* First Image */}
        <div className="flex flex-col items-center p-3">
          <div className="w-full max-w-full rounded-lg shadow-lg overflow-hidden">
            <img
              src={image1}
              alt="Team photo in the office"
              className="w-full h-auto object-contain"
              data-aos="fade-up"
              data-aos-delay="50"
            />
          </div>
          <p
            className="mt-4 font-medium text-center sm:text-left max-w-xs"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Drive The World With Passion!
          </p>
        </div>

        {/* Second Image */}
        <div className="flex flex-col items-center p-3">
          <div className="w-full max-w-full rounded-lg shadow-lg overflow-hidden">
            <img
              src={image2}
              alt="Team photo with flowers"
              className="w-full h-auto object-contain"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
        </div>

        {/* Third Image & Text Block */}
        <div className="flex flex-col items-center p-3">
          <div className="w-full max-w-full rounded-lg shadow-lg overflow-hidden">
            <img
              src={image3}
              alt="Team photo outdoors"
              className="w-full h-auto object-contain"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
          <p
            className="text-sm sm:text-base text-gray-700 max-w-xs mt-4 text-justify"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We are a leading freight forwarding company in Cambodia,
            specializing in the import and export of various goods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LifeInside;
