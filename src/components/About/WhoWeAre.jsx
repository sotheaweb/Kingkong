import React from 'react'
import about1 from '../../assets/about1.jpg'

const WhoWeAre = () => {
  return (
    <div 
     className='w-[100%] my-10 p-10 lg:w-[80%] mx-auto lg:mt-20' 
     id='who'
    >
      <h1 
        className='text-3xl md:text-4xl font-bold text-cyan-600'
        data-aos="fade-up" data-aos-delay="100"
      >
        Who Are We?
      </h1>
      <div className='w-[100%] mx-auto my-10 text-justify grid grid-cols-1 gap-5 md:grid md:grid-cols-2 md:gap-10 lg:grid lg:grid-cols-2 lg:gap-20'>
        <p 
          className='text-sm font-sans leading-relaxed w-[100%] lg:text-lg text-gray-800'
          data-aos="fade-up" data-aos-delay="100"
        >
            Kingkong Aviation Cambodia is a specialist, professional, 
            and expertise-driven aviation service provider. Our team, 
            consisting of seasoned professionals in Operations and Sales, 
            brings more than a decade of hands-on experience and a deep 
            understanding of standard operating procedures (SOPs) for handling 
            air exports. Our vision is to be the best aviation service provider 
            and integrator in the region, and we achieve this through our unwavering 
            commitment to being passionate, professional, and innovative in everything 
            we do. This approach ensures we always deliver maximum benefits to our
            customers. Our comprehensive suite of services includes acting as a CSA 
            (Cargo Sales Agent) and GSA (General Sales Agent), providing special 
            handling for complex cargo like live animals (AVI), dangerous goods 
            (DG), and perishables (PER), and offering efficient land-air mode 
            solutions via key hubs like Bangkok and Ho Chi Minh City. We also 
            provide streamlined re-documentation (REDOC) services through Singapore, 
            making us a one-stop solution for all your air freight needs.
        </p>
        <div 
          className='flex justify-center items-center md:h-[40vh] lg:h-[70vh] shadow-2xl'
          data-aos="fade-up" data-aos-delay="300"
        > 
            <img src={about1} alt="Loading image" className='w-[100%] h-[100%] rounded-lg mt-5 duration-300 transition delay-70 hover:scale-102'/>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
