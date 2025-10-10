import React from 'react'
import backgroundImage from '../assets/career-hero.jpg';
import Hero from '../components/About/Hero'
import LifeInside from '../components/Home/LifeInside';
import Heros from '../components/Hero';
import newsImage from '../assets/news-hero.jpg';

const Careers = () => {

  const hero = {
    image: backgroundImage,
    title: `Start here, Go anywhere-We are part of the world’s leading logistics group`,
    description: `“Ship on Board” is a shipping term that means a package has been loaded onto a ship or aircraft and is ready to be transported.`
  }; 
  const news1 = {
    image: newsImage,
    title: `We Provide Logistics Solution Tailor-MadeFor Individual Customer!`,
    subtitle: `“Ship on Board” is a shipping term that means a package has been loaded onto a ship or aircraft and is ready to be transported.`,
    desc: `Jul 22, 2025 - We are a leading freight forwarding company in Cambodia, specializing in the import and export of various goods. The company is well-trained and has become a renowned and reputable logistics and transportation provider, offering comprehensive services related to international and domestic freight forwarding have established a network of experienced agents in Asia and Europe, enabling us to handle customs clearance procedures quickly, easily, reliably, and cost-effectively for our customers. Moreover, our company maintains excellent relationships with all relevant ministries and institutions.`
  };

  return (
    <div>
      <Hero image={backgroundImage} title={hero.title} description={hero.description} />
      <LifeInside />
      <Heros title={news1.title} subtitle={news1.subtitle} image={news1.image} desc={news1.desc} />
      <Heros title={news1.title} subtitle={news1.subtitle} image={news1.image} desc={news1.desc} />
    </div>
  )
}

export default Careers
