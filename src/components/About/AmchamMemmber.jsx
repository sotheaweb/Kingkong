import React from 'react'
import amcham from '../../assets/about2.jpg'

const AmchamMemmber = () => {
  return (
    <div 
    className='w-[90%] my-15 p-2 md:p-3 lg:w-[75%] mx-auto lg:mt-20 md:flex justify-around bg-cyan-600'
    data-aos="fade-up" data-aos-delay="100"
    id='amch'
    >
      <div 
        className='w-[100%] md:w-[50%] mb-5 rounded-lg'
        data-aos="fade-up" data-aos-delay="150"
      >
        <img src={amcham} alt="loading image"  className='w-full h-[100%] rounded-lg duration-300 transition delay-70 hover:scale-90'/>
      </div>
      <div className='text-white space-y-5 md:h-[100%] md:w-[45%]' data-aos="fade-up" data-aos-delay="150">
        <h1 
          className='text-gray-800 text-2xl md:text-3xl font-bold'
        >
          “ Amcham Member ”
        </h1>
        <p className='text-sm lg:text-lg text-gray-900'>
            As the first outstanding aviation company in 
            Cambodia under the globally conections brand 
            from Taiwan, we brought a fresh and innovative 
            approach to the market. Kingkong Aviation operates 
            as an independent and specialized entity within 
            Cambodia, with two local branches to serve our 
            customers. Since our inception, we have been 
            committed to providing exceptional aviation 
            services, leveraging our strategic partnerships 
            and the extensive global network of our parent 
            brand. This foundation allows us to offer reliable 
            and high-quality services, quickly earning us a 
            reputation for excellence in the air freight industry.
        </p>
      </div>
    </div>
  )
}

export default AmchamMemmber
