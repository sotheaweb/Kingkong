import React from 'react'

const Hero = () => {
  return (
    <div 
     className='bg-cyan-600 w-full text-center py-20 px-4 mt-1.5 md:flex justify-around items-end'
     data-aos="fade-up" data-aos-delay="100"
    >
        <h1 
         className='md:w-[30%] text-3xl md:text-4xl text-start font-bold text-gray-200 mb-4 mx-5 lg:mx-1'
         data-aos="fade-up" data-aos-delay="150"
        >
            Our Services-
            Together, we offer you global service.
        </h1>
        <p 
         className='md:w-[30%] text-gray-200 text-sm lg:text-md mt-10 md:mt-20 text-justify'
         data-aos="fade-up" data-aos-delay="150"
        > 
            “Ship on Board” is a shipping term that means a 
            package has been loaded onto a ship or aircraft 
            and is ready to be transported.
        </p>
    </div>
  )
}

export default Hero
