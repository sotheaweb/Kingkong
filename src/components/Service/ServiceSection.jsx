import React from "react";

export default function ServiceSection({ id, title, desc, img }) {
  return (
    <div 
      id={id} 
      className="max-w-6xl mx-auto mb-16 px-4 md:px-10 mt-20 md:mt-30"
      data-aos="fade-up" data-aos-delay="200"
    >
      {img ? (
        <div className="w-full flex flex-col items-center gap-6">
          <div className="w-full md:flex justify-between">
            <h2 className="text-2xl font-bold text-cyan-600 mb-5 md:w-[30%]">{title}</h2>
            <p className="text-gray-700 md:w-[60%] text-justify">{desc}</p>
          </div>
          <div className="w-full md:w-2/2">
            <img
              src={img}
              alt={title}
              className="w-full h-64 object-cover rounded-lg shadow"
            />
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-cyan-600 mb-3">{title}</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-justify">{desc}</p>
        </div>
      )}
    </div>
  );
}
