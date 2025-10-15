import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";
import news4 from "../assets/news4.jpg";
import news5 from "../assets/news5.jpg";
import news6 from "../assets/about2.jpg";
import news7 from "../assets/about3.jpg";

const SubBlog = () => {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const allNews = [
    { id: 1, image: news1, title: "Amcham Member", discription: "We are a leading freight forwarding company in Cambodia." },
    { id: 2, image: news2, title: "Top Cargo Awards from Cathay Cargo", discription: "We are a leading freight forwarding company in Cambodia." },
    { id: 3, image: news3, title: "Outstanding Award from Eva Air", discription: "We are a leading freight forwarding company in Cambodia." },
    { id: 4, image: news4, title: "Charity", discription: "We are a leading freight forwarding company in Cambodia." },
    { id: 5, image: news5, title: "Site visiting new cargo office at KTI", discription: "We are a leading freight forwarding company in Cambodia." },
    { id: 6, image: news6, title: "Site visiting new cargo office at KTI", discription: "We are a leading freight forwarding company in Cambodia." },
    { id: 7, image: news7, title: "Site visiting new cargo office at KTI", discription: "We are a leading freight forwarding company in Cambodia." },
  ];

  // State HeroContainer
  const getInitialHero = () => {
    if (location.state) return location.state; // ប្រសិនបើ navigate មកពី Home page
    if (id) return allNews.find(item => item.id === Number(id)); // ប្រសិនបើ URL /subblog/:id
    return allNews[0];
  };

  const [hero, setHero] = useState(getInitialHero());

  // Update URL
  useEffect(() => {
    if (hero) {
      navigate(`/subblog/${hero.id}`, { replace: true }); // update URL
    }
  }, [hero, navigate]);

  // Filter cards
  const otherNews = allNews.filter(item => item.id !== hero.id);

  // Handle click card → setHero + scroll top
  const handleCardClick = (item) => {
    setHero(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-10 mb-20">
      {/* Hero Container */}
      {hero && (
        <div className="mb-12 transition-all duration-500 ease-in-out">
          <img src={hero.image} alt={hero.title} className="w-full h-[400px] object-cover rounded-lg shadow-md" />
          <h1 className="text-3xl font-bold mt-6 text-cyan-600">{hero.title}</h1>
          <p className="text-gray-700 mt-4 leading-relaxed">{hero.discription}</p>
        </div>
      )}

      {/* Other Cards */}
      <h2 className="text-2xl font-semibold text-cyan-600 mb-6">More News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherNews.map(item => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item)}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:scale-105 cursor-pointer"
          >
            <img src={item.image} alt={item.title} className="w-full h-[200px] object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2 truncate">{item.discription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubBlog;
