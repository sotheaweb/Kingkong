import React from 'react'

const Hero = ({ image, title, description }) => {
  return (
    <section
      className="h-[70vh] w-full flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '65vh'
      }}
      data-aos="fade-up" data-aos-delay="300"
    >
      {/* Overlay background only */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div 
        className="relative w-full mx-auto flex flex-col px-5 pt-25 md:mt-50 h-[70vh] items-center lg:grid lg:grid-cols-2 lg:justify-between lg:px-20"
        data-aos="fade-up" data-aos-delay="100"
      >
        <h1 className="text-xl w-[100%] font-bold mb-4 text-gray-100 md:text-4xl md:leading-snug md:w-[70vw] lg:w-[40vw]">
          {title}
        </h1>
        <p className="text-gray-50 w-[100%] md:w-[70vw] md:text-lg lg:w-[30vw] lg:text-xl lg:ml-40">
          {description}
        </p>
      </div>
    </section>
  )
}

export default Hero
