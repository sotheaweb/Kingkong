import React from 'react'
import newsImage from '../assets/news-hero.jpg';
import Heros from '../components/Hero';
import Related from '../components/news/Related';

const News = () => {

  const news1 = {
    image: newsImage,
    title: `We Provide Logistics Solution Tailor-MadeFor Individual Customer!`,
    desc: `Jul 22, 2025 - We are a leading freight forwarding company in Cambodia, specializing in the import and export of various goods. The company is well-trained and has become a renowned and reputable logistics and transportation provider, offering comprehensive services related to international and domestic freight forwarding have established a network of experienced agents in Asia and Europe, enabling us to handle customs clearance procedures quickly, easily, reliably, and cost-effectively for our customers. Moreover, our company maintains excellent relationships with all relevant ministries and institutions.`
  };

  return (
    <div>
      <Heros title={news1.title} image={news1.image} desc={news1.desc} />
      <Related />
    </div>
  )
}

export default News
