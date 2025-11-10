import React from 'react'

const Hero = ({ image, title}) => {
  return (
    <section 
     className="relative w-full flex items-center justify-center"
     data-aos="fade-up"
     data-aos-delay="150"
    >
      {/* Image */}
      <img
        src={image}
        alt="Hero Background"
        className="w-full h-[50vh] lg:h-[65vh] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Text Content */}
      <div 
        className="absolute -left-2 w-full  md:w-[70%] lg:w-[60%] h-full flex items-center px-10 lg:px-20"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <h1 className="text-xl font-bold text-gray-100 md:text-4xl md:leading-snug lg:text-left">
          {title}
        </h1>
      </div>
    </section>
  )
}

export default Hero
