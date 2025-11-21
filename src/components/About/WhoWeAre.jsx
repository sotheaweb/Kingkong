import React from 'react'
import amcham from '../../assets/news6.jpg'

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
      {/* Left Image */}
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
          src={amcham}
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

      {/* Right Text */}
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
          Who Are We
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
          As the first outstanding aviation company in Cambodia under the
          globally connected brand from Taiwan, we brought a fresh and
          innovative approach to the market. Kingkong Aviation operates as an
          independent and specialized entity within Cambodia, with two local
          branches to serve our customers. Since our inception, we have been
          committed to providing exceptional aviation services, leveraging our
          strategic partnerships and the extensive global network of our parent
          brand. This foundation allows us to offer reliable and high-quality
          services, quickly earning us a reputation for excellence in the air
          freight industry.
        </p>
      </div>
    </div>
  )
}

export default WhoWeAre;
