import React from 'react'
import newsImage from '../assets/news1.jpg';
import Heros from '../components/Hero';
import Related from '../components/news/Related';

const News = () => {

  const news1 = {
    image: newsImage,
    title: `Amcham Member`,
    desc: `We are glad to inform you that Kingkong Aviation Cambodia become AMCHAM Cambodia Member since 2025`
  };

  return (
    <div>
      <Heros title={news1.title} image={news1.image} desc={news1.desc} />
      <Related />
    </div>
  )
}

export default News
