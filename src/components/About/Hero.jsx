import React from 'react'

const Hero = ({ image, title, description }) => {
  return (
    <section
      className="max-h-[800px] w-full flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '65vh'
      }}
      data-aos="fade-up" data-aos-delay="300"
    >
      {/* Overlay background only */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div 
        className="relative w-full mx-auto flex flex-col px-5 mt-10 h-[200px] items-center lg:grid lg:grid-cols-2 lg:justify-between lg:px-20"
        data-aos="fade-up" data-aos-delay="100"
      >
        <h1 className="text-xl w-full font-bold mb-4 md:-ml-30 lg:ml-0 text-gray-100 md:text-4xl md:leading-snug md:w-[60vw] lg:w-[50vw]">
          {title}
        </h1>
      </div>
    </section>
  )
}

export default Hero
