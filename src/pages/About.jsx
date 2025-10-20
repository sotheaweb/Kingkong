import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/About/Hero'
import backgroundImage from '../assets/about-hero-bg.jpg';
import WhyUs from '../components/About/WhyUs';
import WhoWeAre from '../components/About/WhoWeAre';
import OurOffice from '../components/About/OurOffice';
import ManageTeam from '../components/About/ManagementTeam';
import CoreSection from '../components/About/CoreSection';
import GeneralManager from '../components/About/GeneralManager';

const About = () => {

  const { hash } = useLocation();
  
    useEffect(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 200);
        }
      }
    }, [hash]);

  const title = `About Us- KingKong supporting your business with Aviations`
  const description = `We don't just move cargo; we craft bespoke solutions designed specifically for your business.`
  return (
    <div>
      <Hero image={backgroundImage} title={title} description={description} />
      <WhyUs />
      <WhoWeAre />
      <OurOffice />
      <ManageTeam />
      <GeneralManager />
      <CoreSection />
    </div>
  )
}

export default About
