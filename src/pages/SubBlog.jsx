import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Related from "../components/news/Related";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";
import news4 from "../assets/news4.jpg";
import news5 from "../assets/news5.jpg";

// Data array
const cardData = [
  { id: 0, image: news1, title: "Marine Cargo Services 1", discription: "We are a leading freight forwarding company in Cambodia." },
  { id: 1, image: news2, title: "Marine Cargo Services 2", discription: "We are a leading freight forwarding company in Cambodia." },
  { id: 2, image: news3, title: "Marine Cargo Services 3", discription: "We are a leading freight forwarding company in Cambodia." },
  { id: 3, image: news4, title: "Marine Cargo Services 3", discription: "We are a leading freight forwarding company in Cambodia." },
  { id: 4, image: news5, title: "Marine Cargo Services 3", discription: "We are a leading freight forwarding company in Cambodia." },
];

const SubBlog = () => {
  const location = useLocation();
  const { id } = useParams();

  // state ពេល navigate
  let news = location.state;

  // fallback ប្រើ id ពី URL
  if (!news && id !== undefined) {
    news = cardData.find(item => item.id === Number(id));
  }

  if (!news) {
    return <div className="p-10 text-center">No information!</div>;
  }

  return (
    <>
      <div className="md:w-[80vw] mx-auto my-10 px-5" data-aos="fade-up" data-aos-delay="100">
        <div className="w-full h-96 mb-6">
          <img src={news.image} alt={news.title} className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
        <h1 className="text-3xl font-bold text-cyan-700 mb-4">{news.title}</h1>
        <p className="text-gray-700 leading-relaxed text-lg">{news.discription}</p>
      </div>

      <Related />
    </>
  );
};

export default SubBlog;
