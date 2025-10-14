import React from "react";
import { Link } from "react-router-dom";
import news1 from "../../assets/news1.jpg";
import news2 from "../../assets/news2.jpg";
import news3 from "../../assets/news3.jpg";
import news4 from "../../assets/news4.jpg";
import news5 from "../../assets/news5.jpg";

const Related = () => {
  const cardData = [
    {
      image: news3,
      title: "Outstanding Award from Eva Air",
      discription:
        "We are a leading freight forwarding company in Cambodia.",
    },
    {
      image: news4,
      title: "Charity",
      discription:
        "We are a leading freight forwarding company in Cambodia.",
    },
    {
      image: news5,
      title: "Site visiting new cargo office at KTI",
      discription:
        "We are a leading freight forwarding company in Cambodia.",
    },
  ];

  return (
    <div
      className="max-w-[1200px] mx-auto mb-16 mt-20 md:mt-30"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {/* Title */}
      <h1
        className="text-3xl sm:text-4xl font-bold text-cyan-600 mb-6 text-center md:text-left"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Blog & News
      </h1>

      {/* Top Section (Left + Right boxes) */}
      <div className="flex flex-col md:flex-row gap-6 lg:h-[320px] md:gap-8 lg:gap-5 px-3">
        {/* Left Box */}
        <Link
          to="/subblog/3"
          state={{
            image: news1,
            title: "Amcham Member",
            discription:
              "We are a leading freight forwarding company in Cambodia, specializing in the import and export of various goods.",
          }}
          className="md:w-[57%]"
        >
          <div className="flex flex-col justify-between p-4 shadow-md hover:shadow-lg rounded-lg bg-white h-full duration-300 hover:scale-102 transition">
            <img
              src={news1}
              alt="News loading"
              className="w-full h-[220px] md:h-[250px] lg:h-[200px] object-cover rounded-lg"
            />
            <div className="flex flex-col flex-grow mt-4">
              <h2 className="text-xl font-semibold">{`Amcham Member`}</h2>
              <p className="text-gray-600 text-sm sm:text-base mt-2 truncate">
                We are a leading freight forwarding company in Cambodia,
                specializing in the import and export of various goods. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maxime expedita repellat repellendus nostrum unde cum recusandae eaque ducimus doloribus.
              </p>
            </div>
          </div>
        </Link>

        {/* Right Box */}
        <Link
          to="/subblog/4"
          state={{
            image: news2,
            title: "Top Cargo Awards from Cathay Cargo",
            discription:
              "We are a leading freight forwarding company in Cambodia.",
          }}
          className="md:w-[42%]"
        >
          <div className="flex flex-col justify-between p-4 shadow-md hover:shadow-lg rounded-lg bg-white h-full duration-300 hover:scale-102 transition">
            <img
              src={news2}
              alt="News loading"
              className="w-full h-[220px] md:h-[200px] object-cover rounded-lg"
            />
            <div className="flex flex-col flex-grow mt-4">
              <h2 className="text-xl font-semibold">
                Top Cargo Awards from Cathay Cargo
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-2 truncate">
                We are a leading freight forwarding company in Cambodia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, in.
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Bottom Section (3 cards) */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-3">
        {cardData.map((item, index) => (
          <Link key={index} to={`/subblog/${index}`} state={item}>
            <div className="flex flex-col h-full p-4 shadow-md hover:shadow-lg rounded-lg bg-white duration-300 hover:scale-105 transition">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[180px] md:h-[200px] lg:h-[200px] object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm sm:text-base truncate">
                {item.discription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Related;
