// src/components/CoreSection.jsx
import React from "react";
import bgImage from '../../assets/about3.jpg';

export default function CoreSection() {
  return (
    <div
      className="relative w-full h-[65vh] sm:h-[65vh] md:h-[600px] lg:h-[70vh] xl:h-[75vh] 2xl:h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Semi-Circle Overlay */}
      <div
        id="core"
        data-aos="fade-up"
        data-aos-delay="150"
        className="absolute bottom-30 md:bottom-50 left-1/2 transform -translate-x-1/2
                   w-full px-4 sm:px-6 md:px-10
                   flex flex-col justify-center items-center"
      >
        {/* Container with max-width for responsiveness */}
        <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 2xl:gap-10 text-center text-white">
          {/* Mission */}
          <div className="px-2 sm:px-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Mission</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-left">
              Creating the maximum benefit and best solution for the client.
            </p>
          </div>

          {/* Vision */}
          <div className="px-2 sm:px-4 relative">
            {/* Divider lines */}
            <div className="hidden md:block absolute top-0 left-0 h-full border-l border-white/40"></div>
            <div className="hidden md:block absolute top-0 right-0 h-full border-l border-white/40"></div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Vision</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-left">
              To be a Passionate, Professional, and Innovative Aviation Service Provider.
            </p>
          </div>

          {/* Core */}
          <div className="px-2 sm:px-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Core</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-left">
              Best customer centric, Professional & Experienced Sales, Excellence Operation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
