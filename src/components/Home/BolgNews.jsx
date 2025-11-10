import React, { useState } from "react";
import { Link } from "react-router-dom";
import news1 from "../../assets/news1.jpg";
import news2 from "../../assets/news2.jpg";
import news3 from "../../assets/news3.jpg";
import news4 from "../../assets/news4.jpg";
import news5 from "../../assets/news5.jpg";
import news6 from "../../assets/about3.jpg";

const BlogNews = () => {

  const limit = 70;

  const cardData = [
    {
      id: 1,
      image: news1,
      title: "Amcham Member",
      discription:
        "We are glad to inform you that Kingkong Aviation Cambodia become AMCHAM Cambodia Member since 2025",
    },
    {
      id: 2,
      image: news2,
      title: "Top Cargo Awards from Cathay Cargo",
      discription: `KingKong Aviation Cambodia has been great honored to achieve the "Top Cargo Agent Award 2024" from Cathay Cargo
                    This prestigious award recognizes the outstanding performance in 2024 of KingKong aviation Cambodia  
                    for movement of cargo with Cathay Cargo Cambodia​. `,
    },
    {
      id: 3,
      image: news3,
      title: "Outstanding Award from Eva Air",
      discription: `KingKong Aviation Cambodia has been great honored to receive the "Outstanding Award 2024" from EVA Air Cargo
                    This prestigious award recognizes the outstanding performance in 2024 of KingKong aviation Cambodia  
                    for movement of cargo with Eva Cargo Cambodia​. `,
    },
    {
      id: 4,
      image: news4,
      title: "Charity",
      discription: `Happy Valentine’s Day ❤️ Sharing our love with our children ❤️ On 14th February 2025, 
                    KingKong Aviation Cambodia, together with our staff, brought donations to the Cambodia Kantha Bopha Foundation 
                    to support saving children’s lives and health.`,
    },
    {
      id: 5,
      image: news5,
      title: "GDCE Visiting",
      discription: `On March 19, 2025, Mrs Chanrynet Yong, KingKong Aviation Cambodia, Vice Chair of AmCham Trade and Logistics Committee, led by President Casey Barnett, met with H.E. Dr. Kun Nhem, Director General of GDCE, to strengthen collaboration on trade facilitation and customs modernization.`,
    },
    {
      id: 6,
      image: news6,
      title: "Trades & Logistics Networking Night",
      discription: `A night of connection and collaboration at AmCham Cambodia’s Trade and Logistics Networking Night on May 7, 2025, sponsored by KingKong Aviation Cambodia.`,
    },
  ];

  return (
    <div
      className="max-w-[1200px] mx-auto mb-16 sm:px-6 mt-20 md:mt-30"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-cyan-600 mb-6 text-center md:text-left">
        Blog & News
      </h1>

      {/* Card List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((item) => (
          <Link to={`/subblog/${item.id}`} state={item}>
            <div
              key={item.id}
              className="flex flex-col h-full p-4 shadow-md hover:shadow-lg rounded-lg duration-300 hover:scale-105 transition"
            >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[180px] md:h-[200px] object-cover rounded-lg mb-4"
                />
              
              <h2 className="text-xl font-semibold mb-2 text-cyan-600 truncate">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {item.discription.slice(0, limit) + "... "}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogNews;
