// src/components/CoreSection.jsx
import React from "react";
import bgImage from '../../assets/about3.jpg';

export default function CoreSection() {
  return (
    <div
      className="relative w-full h-[700px] md:h-[600px] bg-cover "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Semi-Circle Overlay */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[140%] md:w-[100%] lg:w-[60%] lg:h-[68vh] aspect-[2/1] md:bg-cyan-700 opacity-75 lg:rounded-t-full flex flex-col justify-center items-center px-6"
        data-aos="fade-up" data-aos-delay="150"
        id="core"
      >
        <div className="p-30 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white relative w-full">
          {/* Vision */}
          <div className="px-4">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Mission</h3>
            <p className="text-sm md:text-lg leading-relaxed text-left">
              Creating the maximum benefit and best solution for the client.
            </p>
          </div>

          {/* Core */}
          <div className="px-4 relative">
            {/* Divider lines */}
            <div className="hidden md:block absolute top-0 left-0 h-full border-l border-white/40"></div>
            <div className="hidden md:block absolute top-0 right-0 h-full border-l border-white/40"></div>

            <h3 className="text-xl md:text-2xl font-bold mb-2">Vission</h3>
            <p className="text-sm md:text-sm leading-relaxed text-left">
              To be a Passionate, Professional, and Innovative Aviation Service Provider.
            </p>
          </div>

          {/* Mission */}
          <div className="px-4">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Core</h3>
            <p className="text-sm md:text-sm leading-relaxed text-left">
              Best customer centric, Professional & Experience Sales, Excellence Operation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
