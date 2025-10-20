export default function Hero({ title, subtitle, image, desc }) {
  return (
    <section className="mt-10 md:mt-20 mb-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-screen-[1200px] mx-auto">
      {/* Header Section */}
      <div className="grid grid-cols-1 px-0 lg:grid-cols-2 gap-8 mb-10 max-w-[1200px] mx-auto">
        {/* Title */}
        <h1
          className="md:text-4xl text-xl font-bold text-cyan-600 sm:text-base leading-relaxed lg:w-[100%]" 
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="text-gray-700 lg:mt-5 text-start text-base sm:text-lg lg:text-xl lg:ml-12 max-w-2xl lg:mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {subtitle}
        </p>
      </div>

      {/* Image Section */}
      <div
        className="flex justify-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <img
          src={image}
          alt="Hero"
          className="w-full max-w-[1200px] h-[35vh] sm:h-[45vh] md:h-[40vh] lg:h-[55vh] object-cover rounded-lg duration-300 transition-transform hover:scale-[1.02]"
        />
      </div>

      {/* Description */}
      <p
        className="mt-8 text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed max-w-[1200px] mx-auto text-justify"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {desc}
      </p>
    </section>
  );
}
