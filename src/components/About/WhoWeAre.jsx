import React from 'react'
import about1 from '../../assets/about1.jpg'

const WhoWeAre = () => {
  return (
    <div
      id="who"
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
        p-4 
        sm:p-6 
        md:p-10 
        rounded-2xl 
      "
    >
      {/* Title */}
      <h1
        className="
          text-2xl 
          sm:text-3xl 
          md:text-4xl 
          lg:text-5xl 
          font-bold 
          text-cyan-600 
          text-center 
          md:text-left
        "
        data-aos="fade-up" data-aos-delay="100"
      >
        Who Are We?
      </h1>

      {/* Content Section */}
      <div
        className="
          mt-8 
          grid 
          grid-cols-1 
          md:grid-cols-2
          gap-8 
          md:gap-12 
          lg:gap-20 
          items-center
        "
        data-aos="fade-up" data-aos-delay="150"
      >
        {/* Left Text */}
        <p
          className="
            text-sm 
            sm:text-base 
            md:text-lg 
            leading-relaxed 
            text-gray-800 
            text-justify
            
          "
          data-aos="fade-up" data-aos-delay="200"
        >
          Kingkong Aviation Cambodia is a specialist, professional, and
          expertise-driven aviation service provider. Our team, consisting of
          seasoned professionals in Operations and Sales, brings more than a
          decade of hands-on experience and a deep understanding of standard
          operating procedures (SOPs) for handling air exports. Our vision is
          to be the best aviation service provider and integrator in the
          region, and we achieve this through our unwavering commitment to
          being passionate, professional, and innovative in everything we do.
          This approach ensures we always deliver maximum benefits to our
          customers. Our comprehensive suite of services includes acting as a
          CSA (Cargo Sales Agent) and GSA (General Sales Agent), providing
          special handling for complex cargo like live animals (AVI), dangerous
          goods (DG), and perishables (PER), and offering efficient land-air
          mode solutions via key hubs like Bangkok and Ho Chi Minh City. We
          also provide streamlined re-documentation (REDOC) services through
          Singapore, making us a one-stop solution for all your air freight
          needs.
        </p>

        {/* Right Image */}
        <div
          className="
            flex 
            justify-center 
            items-center 
            shadow-2xl 
            rounded-xl 
            overflow-hidden 
            h-[250px] 
            sm:h-[300px] 
            md:h-[400px] 
            lg:h-[450px] 
            xl:h-[500px]
          "
          data-aos="fade-up" data-aos-delay="300"
        >
          <img
            src={about1}
            alt="About us"
            className="
              w-full 
              h-full 
              object-cover 
              rounded-xl 
              transition-transform 
              duration-300 
              hover:scale-105
            "
          />
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
