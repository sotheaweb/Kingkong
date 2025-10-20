import React from "react";
import { Link } from "react-router-dom";
import news1 from "../../assets/news1.jpg";
import news2 from "../../assets/news2.jpg";
import news3 from "../../assets/news3.jpg";
import news4 from "../../assets/news4.jpg";
import news5 from "../../assets/news5.jpg";
import news6 from "../../assets/about3.jpg"

const Related = () => {
  const cardData = [
    {
      id: 1,
      image: news1,
      title: "Amcham Member",
      discription: "We are a leading freight forwarding company in Cambodia.",
    },
    {
      id: 2,
      image: news2,
      title: "Top Cargo Awards from Cathay Cargo",
      discription: `KingKong Aviation Cambodia has been great honored to achieve the "Top Cargo Agent Award 
                    2024" from Cathay CargoThis prestigious award recognizes the outstanding performance in 
                    of cargo with Cathay Cargo Cambodia​. `,
    },
    {
      id: 3,
      image: news3,
      title: "Outstanding Award from Eva Air",
      discription: `KingKong Aviation Cambodia has been great honored to receive the "Outstanding Award 2024" 
                    from EVA Air CargoThis prestigious award recognizes the outstanding performance in 
                    2024 of KingKong aviation Cambodia  for movement of cargo with Eva Cargo Cambodia​.`,
    },
    {
      id: 4,
      image: news4,
      title: "Charity",
      discription: `On 14th February 2025, KingKong Aviation Cambodia, the company and together with our 
                    staffs has bring sharing our donation to the Cambodia Kantha Bopha Foundation in the aim 
                    contribution support Saving children lives and health, and a part of social responsibility 
                    in CambodiaHappy Valentine’s Day ❤️Sharing our love with our children ❤️`,
    },
    {
      id: 5,
      image: news5,
      title: "Site visiting new cargo office at KTI",
      discription: `15 Aug 2025- Today, we are thrilled to be visiting our new King Kong Cargo Office and Cargo 
                    Terminal at Techo International Airport.This space marks an exciting new chapter for our company, 
                    and signals growth in the aviation industry in Cambodia`,
    },
    {
      id: 6,
      image: news6,
      title: "Site visiting new cargo office at KTI",
      discription: "We are a leading freight forwarding company in Cambodia.",
    },
  ];

  return (
    <div 
     className="max-w-[1200px] mx-auto mb-16 sm:px-6 mt-20 md:mt-30"
     data-aos="fade-up"
     data-aos-delay="200"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-cyan-600 mb-6 text-center md:text-left">
        Related Article -
      </h1>

      {/* Card List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((item) => (
          <Link
            key={item.id}
            to={`/subblog/${item.id}`}
            state={item} // 👈 send data to SubBlog page
          >
            <div className="flex flex-col h-full p-4 shadow-md hover:shadow-lg rounded-lg bg-white duration-300 hover:scale-105 transition">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[180px] md:h-[200px] object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-cyan-700 mb-2 truncate">{item.title}</h2>
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
