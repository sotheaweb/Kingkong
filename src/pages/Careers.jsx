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
    title: `Staff Special training `,
    desc: `KingKong Aviation Cambodia never ending to develop our team members.
          How to Network Like a Pro, organized by Amcham, Women’s Committee, is a 
          very fruitful short training course for our Sales and Customer Service Team. 
          As a professional service provider, we must obtain the professional communication, 
          delivery best customer service and qualify informations sharing to our customers.`
  };
  const news2 = {
    image: newsImage,
    title: `Company trip 2025`,
    desc: `A wonderful getaway with the KingKong Aviation Cambodia family in Kampot. This trip was 
          more than just relaxation; it was about building stronger teamwork, sharing laughter, 
          and recharging our energy for the exciting journey ahead. Grateful for the great moments, 
          beautiful views, and even greater company.Together we grow, together we soar. `
  };
  const news3 = {
    image: newsImage,
    title: `Company Spring Party 2025`,
    desc: `Spring Party during April 2025 is a big and warm gathering between all teams and have fun together. Work hard and Play harder.`
  };
  const news4 = {
    image: newsImage,
    title: `Year End Staff Party 2024`,
    desc: `It was a memorable night for KingKong Aviation as the team came together to celebrate the year’s 
          achievements with joy and laughter. Everyone enjoyed gift exchanges, dinner, and recognition for 
          outstanding staff performance.`
  };

  return (
    <div>
      <Hero image={backgroundImage} title={hero.title} description={hero.description} />
      <LifeInside />
      <Heros title={news1.title} image={news1.image} desc={news1.desc} />
      <Heros title={news2.title} image={news2.image} desc={news2.desc} />
      <Heros title={news3.title} image={news3.image} desc={news3.desc} />
      <Heros title={news4.title} image={news4.image} desc={news4.desc} />
    </div>
  )
}

export default Careers
