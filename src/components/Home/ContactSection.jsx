import React from 'react'
import { Link } from 'react-router-dom'

const ContactSection = () => {
  return (
    <div className='mt-20 bg-cyan-600 flex flex-col justify-between lg:h-[50vh]'>
      <div className='text-white text-center py-12 flex items-center justify-around gap-4 flex-col lg:flex-row'>
        <h1 
          className='text-3xl md:text-4xl text-start font-bold text-white mb-4 mx-10 lg:mx-1'
          data-aos="fade-up" 
          data-aos-delay="50"
        >
          Make sure you choose<br /> the right expedition for <br /> your delivery
        </h1>
        <Link 
          to="/contact"
          data-aos="fade-up" 
          data-aos-delay="50"
        >
          <button 
            className="inline-flex items-center gap-2 px-6 py-3 text-gray-800 font-medium bg-gray-100 rounded-lg shadow-md hover:bg-cyan-700 transition-colors duration-300 cursor-pointer"
          >
            Contact Us
            <span className="text-lg">&rarr;</span>
          </button>
        </Link>
      </div>
      <div className='h-1 bg-white'></div>
    </div>
  )
}

export default ContactSection;
