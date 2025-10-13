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
      className="lg:max-w-7xl mx-auto mb-16 px-4 lg:px-10 mt-20 md:mt-30"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {/* Title */}
      <h1
        className="text-3xl md:text-4xl font-bold text-cyan-600 mb-4 mx-5 lg:mx-1"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Blog & News
      </h1>

      {/* Top Section (Left + Right boxes) */}
      <div className="flex flex-col lg:flex-row gap-10 p-4 rounded-lg">
        {/* Left Box */}
        <Link
          to="/subblog/3"
          state={{
            image: news1,
            title: "Amcham Member",
            discription:
              "We are a leading freight forwarding company in Cambodia, specializing in the import and export of various goods.",
          }}
          className="flex-1"
        >
          <div className="h-full md:w-[50vw] flex flex-col justify-between p-4 shadow-md hover:shadow-lg duration-300 hover:scale-105 transition delay-70 rounded-lg bg-white">
            <img
              src={news1}
              alt="News loading"
              className="w-full h-[220px] object-cover rounded-lg"
            />
            <div className="flex flex-col flex-grow justify-between mt-4">
              <h2 className="text-xl font-semibold">Amcham Member</h2>
              <p className="text-gray-600 text-sm lg:text-md mt-2">
                We are a leading freight forwarding company in Cambodia,
                specializing in the import and export of various goods.
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
          className="flex-1"
        >
          <div className="h-full flex flex-col justify-between p-4 shadow-md hover:shadow-lg duration-300 hover:scale-105 transition delay-70 rounded-lg bg-white">
            <img
              src={news2}
              alt="News loading"
              className="w-full h-[220px] object-cover rounded-lg"
            />
            <div className="flex flex-col flex-grow justify-between mt-4">
              <h2 className="text-xl font-semibold">
                Top Cargo Awards from Cathay Cargo
              </h2>
              <p className="text-gray-600 text-sm lg:text-md mt-2">
                We are a leading freight forwarding company in Cambodia.
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Bottom Section (3 cards) */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {cardData.map((item, index) => (
          <Link key={index} to={`/subblog/${index}`} state={item}>
            <div className="p-4 shadow-md hover:shadow-lg duration-300 hover:scale-105 transition delay-70 rounded-lg bg-white flex flex-col h-full">
              <img
                src={item.image}
                alt=""
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm">
                {item.discription.length > 50
                  ? item.discription.slice(0, 50) + "..."
                  : item.discription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Related;
