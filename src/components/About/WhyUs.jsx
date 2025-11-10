import React from 'react'
import about1 from '../../assets/about1.jpg'

const WhoWeAre = () => {
  return (
    <div
      id="amch"
      data-aos="fade-up"
      data-aos-delay="100"
      className="
        w-full 
        max-w-[95%] 
        sm:max-w-[90%] 
        md:max-w-[1000px] 
        lg:max-w-[1200px] 
        xl:max-w-[1200px] 
        mx-auto 
        my-10 
        sm:my-14 
        md:my-16 
        lg:my-20 
        bg-cyan-600 
        rounded-2xl 
        p-4 
        sm:p-6 
        md:p-10 
        flex 
        flex-col 
        md:flex-row 
        items-center 
        justify-between 
        gap-8 
        shadow-xl
      "
    >
      {/* left Text */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="
          text-white 
          md:w-[48%] 
          space-y-4 
          md:space-y-6 
          text-center 
          md:text-left
        "
      >
        <h1
          className="
            text-2xl 
            sm:text-3xl 
            lg:text-4xl 
            font-bold 
            text-gray-200
          "
        >
          Why Us
        </h1>
        <p
          className="
            text-sm 
            sm:text-base 
            md:text-lg 
            leading-relaxed 
            text-gray-200
            text-justify
          "
        >
          Kingkong Aviation Cambodia is a specialist, professional, 
          and expertise-driven aviation service provider. Our team, 
          consisting of seasoned professionals in Operations and Sales, 
          brings more than a decade of hands-on experience and a deep 
          understanding of standard operating procedures (SOPs) for 
          handling air exports. Our vision is to be the best aviation 
          service provider and integrator in the region, and we achieve 
          this through our unwavering commitment to being passionate, 
          professional, and innovative in everything we do. This approach 
          ensures we always deliver maximum benefits to our customers. Our 
          comprehensive suite of services includes acting as a CSA (Cargo Sales Agent) 
          and GSA (General Sales Agent), providing special handling for complex cargo 
          like live animals (AVI), dangerous goods (DG), and perishables (PER), and 
          offering efficient land-air mode solutions via key hubs like Bangkok 
          and Ho Chi Minh City. We also provide streamlined re-documentation (REDOC) 
          services through Singapore, making us a one-stop solution for all your air freight needs.
        </p>
      </div>

      {/* right Image */}
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="
          w-full 
          md:w-[48%] 
          rounded-xl 
          overflow-hidden 
          shadow-lg
        "
      >
        <img
          src={about1}
          alt="AmCham Member"
          className="
            w-full 
            h-[250px] 
            sm:h-[300px] 
            md:h-[350px] 
            lg:h-[400px] 
            xl:h-[450px] 
            object-cover 
            rounded-xl 
            transition-transform 
            duration-300 
            hover:scale-105
          "
        />
      </div>
    </div>
  )
}

export default WhoWeAre;
