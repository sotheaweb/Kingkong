import React from "react";
import { Link } from "react-router-dom";
import news1 from "../../assets/news1.jpg";
import news2 from "../../assets/news2.jpg";
import news3 from "../../assets/news3.jpg";
import news4 from "../../assets/news4.jpg";
import news5 from "../../assets/news5.jpg";
import news6 from "../../assets/news6.jpg";
import news7 from "../../assets/news7.jpg";
import news8 from "../../assets/news8.jpg";
import news9 from "../../assets/news9.jpg";

const Related = () => {
  const limit = 70;

  const cardData = [
    {
      id: 2,
      image: news2,
      title: "Top Cargo Awards from Cathay Cargo",
      discription: `KingKong Aviation Cambodia has been great honored to achieve the "Top Cargo Agent 
                    Award 2024" from Cathay Cargo This prestigious award recognizes the outstanding 
                    performance in 2024 of KingKong aviation Cambodia  for movement of cargo with 
                    Cathay Cargo Cambodia​. `,
    },
    {
      id: 3,
      image: news3,
      title: "Outstanding Award from Eva Air",
      discription: `KingKong Aviation Cambodia has been great honored to receive the "Outstanding Award 
                    2024" from EVA Air Cargo This prestigious award recognizes the outstanding 
                    performance in 2024 of KingKong aviation Cambodia  for movement of cargo with 
                    Eva Cargo Cambodia​. `,
    },
    {
      id: 4,
      image: news4,
      title: "Charity",
      discription: `Happy Valentine’s Day ❤️Sharing our love with our children ❤️On 14th February 2025, 
                    KingKong Aviation Cambodia, the company and together with our staffs has bring 
                    sharing our donation to the Cambodia Kantha Bopha Foundation in the aim contribution 
                    support Saving children lives and health, and a part of social responsibility in 
                    Cambodia`,
    },
    {
      id: 5,
      image: news5,
      title: "GDCE Visiting",
      discription: `On March 19, 2025, Mrs Chanrynet Yong ,KingKong Aviation Cambodia, Vice Chair of 
                    AmCham Trade and Logistics Committee, led by President Casey Barnett, met with H.E. 
                    Dr. Kun Nhem, Minister Attached to the Prime Minister, Director General of the General 
                    Department of Customs and Excise (GDCE), to strengthen collaboration on trade 
                    facilitation and customs modernization. The discussion highlighted GDCE’s ongoing 
                    reforms under the Customs Reform and Modernization Strategy 2024-2028, including 
                    E-Customs, the National Single Window, and the Authorized Economic Operator (AEO) 
                    program.`,
    },
    {
      id: 6,
      image: news6,
      title: "Trades & Logistics Networking Night",
      discription: `A night of connection, collaboration, and strategic AmCham Cambodia’s Trade and 
                    Logistics Networking Night on May 7, 2025, at Duong Chan Hotel Phnom Penh. 
                    ✨ Chanrynet Yong, Vice-Chair & General Manager at  Kingkong Aviation Cambodia 
                    Sponsored by Kingkong Aviation Cambodia`,
    },
    {
      id: 7,
      image: news7,
      title:
        "KTI officially grand opening by Samdech Thipadei Hun Manet, Prime Minister of Cambodia.",
      discription: `Today, October 20, 2025, KingKong Aviation Cambodia had the honor of attending the 
                    inauguration of Techo International Airport✈️, officially opened by Samdech Thipadei 
                    Hun Manet, Prime Minister of Cambodia.As proud Cambodians, we are delighted to 
                    witness this historic milestone, which will enhance air connectivity and drive 
                    growth in Cambodia’s aviation and logistics sector.`,
    },
    {
      id: 8,
      image: news8,
      title:
        "Air Cambodia Launches New Phnom Penh–Fuzhou–Tokyo Route, Marking a Milestone in Cambodia’s Aviation Sector",
      discription: `Phnom Penh, [Date] – Air Cambodia has officially inaugurated its new international 
                    route connecting Phnom Penh, Fuzhou, and Tokyo, marking a significant milestone in 
                    the nation’s growing aviation network.The new service, operating three flights weekly 
                    on Wednesdays, Fridays, and Sundays, includes the first-ever direct flight from Techo 
                    International Airport (KTI) to Tokyo Narita (NRT) — a major step forward in strengthening 
                    Cambodia’s connectivity with East Asia.This expansion represents more than just a new 
                    route; it symbolizes Cambodia’s increasing role in regional trade, tourism, and 
                    international cooperation. The new link is expected to foster stronger economic 
                    ties and create fresh opportunities for both business and leisure travelers.KingKong 
                    Aviation Cambodia expressed pride in witnessing this important achievement, noting 
                    that the new route reflects a shared vision of progress, partnership, and growth for 
                    Cambodia’s aviation future.`,
    },
    {
      id: 9,
      image: news9,
      title: "KingKong Cambodia-Air Cargo Forum in Miami Florida 2024",
      discription: `KingKong Aviation Cambodia is proudly participating the Air Cargo Forum in Miami, 
                    Florida from 11-14th November 2024, a world class event under the arrangement of TIACA 
                    (The International Air Cargo Association) that bring the entire air cargo community 
                    together which aim  to add value to the industry at large. Through out this international 
                    level conference, we aim to expand our partnership with global allies, expand  our 
                    connection on Air cargo  networks, sharing and discussion the outlook of Air Cargo 
                    Market in 2025, and sharing the key notes by the Air Cargo top Leaders around the 
                    world 🌍 KingKong Aviation Cambodia, the best aviation service provider with a 
                    passionate and professional orientation ✈️✈️`,
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
            to={`/news/subblog/${item.id}`}
            state={item} // 👈 send data to SubBlog page
          >
            <div className="flex flex-col h-full p-4 shadow-md hover:shadow-lg rounded-lg bg-white duration-300 hover:scale-105 transition">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[180px] md:h-[200px] object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-cyan-700 mb-2 truncate">
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

export default Related;
