export default function Hero({ title, subtitle, image, desc }) {
  return (
      <div className="w-[100vw] mt-10 md:mt-20 mx-auto mb-30 px-10 md:px-20 lg:px-35 ">
        {/* Text Top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-6 mb-6">
          {/* Left Title */}
          <h1 
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
            data-aos="fade-up" data-aos-delay="50"
          >
            {title}
          </h1>

          {/* Right Subtitle */}
          <p 
            className="text-gray-900 text-sm md:text-base lg:ml-40" 
            data-aos="fade-up" data-aos-delay="100"
          >
            {subtitle}
          </p>
        </div>

        {/* Image */}
        <div className="w-[100vw] mx-auto duration-300 transition delay-70 hover:scale-102">
          <img
            src={image}
            alt="Hero"
            className="w-[80%] h-[50vh] rounded-lg shadow-md object-cover"
            data-aos="fade-up" data-aos-delay="300"
          />
        </div>
        <p 
          className="mt-6 text-gray-800 text-sm md:text-base" 
          data-aos="fade-up" data-aos-delay="50"
        >
          {desc}
        </p>
      </div>
  );
}
