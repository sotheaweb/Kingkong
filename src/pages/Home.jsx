import React from 'react'
import Hero from '../components/Hero'
import image from '../assets/hero.png'
import aboutImage from '../assets/about0.jpg'
import AboutUsSection from '../components/Home/About'
import OurService from '../components/Home/OurService'
import BolgNews from '../components/Home/BolgNews'
import LifeInside from '../components/Home/LifeInside'
import ContactSection from '../components/Home/ContactSection'

const Home = () => {
  const title = `Your cargo. Your rules. Our solution.`
  const subtitle = "We provide aviation solutions tailor-made for you."
  return (
    <div>
      <Hero image ={image} title ={title} subtitle={subtitle}/>
      <AboutUsSection image={aboutImage}/>
      <OurService />
      <BolgNews />
      <LifeInside />
      <ContactSection /> 
    </div>
  )
}

export default Home
