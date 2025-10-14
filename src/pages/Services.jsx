import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/About/Hero'
import imageHero from '../assets/serviceHero.jpg'
import ServiceSection from '../components/Service/ServiceSection'
import service1 from '../assets/service1.jpg'
import service2 from '../assets/service2.jpg'
import service3 from '../assets/service3.jpg'
import service4 from '../assets/service4.jpg'
import service5 from '../assets/service5.jpg'
import service6 from '../assets/service6.jpg'
import service7 from '../assets/service7.jpg'


const Service = () => {

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

  const image = imageHero
  const title = "Our Services-Together, we offer you global service."
  const description = `“Ship on Board” is a shipping term that means a package has been loaded onto a ship or aircraft and is ready to be transported.`
  
  const services = [
    { 
      id: "csa", 
      title: "CSA", 
      desc: "On behalf of Cargo Sales Agent of Airline Principle, we act as your on-site quality control and logistics coordinator. Our experienced team works directly with airport and cargo terminal staff, meticulously overseeing every step of the process to prevent errors, minimize delays, and reduce the risk of damage to your shipments, and last but not least to make sure the cargo delivered succuessfully to destinations.", 
      img: service2
    },
    { 
      id: "gssa", 
      title: "GSSA/GSA", 
      desc: "We are highly commited to represent the airline's branding, deliver interests, drive sales and marketing strategy, provide best customer service and reservation, and execlence operations.As your GSA, we act as your exclusive commercial arm in the market. We develop and execute a strategic business plan to maximize your cargo capacity and revenue. Our dedicated team manages all local sales activities, provides a comprehensive marketing presence, and builds a robust network of freight forwarders and partners, effectively making us a direct extension of your brand and operations", 
      img: service1
    },
    { 
      id: "cargo", 
      title: "Cargo Charter", 
      desc: "Cargo charter is a highly flexible aviation solution that provides an entire aircraft for a specific shipment, bypassing the limitations of scheduled flights. It is typically used for urgent, time-sensitive, oversize, or high-value cargo that requires a dedicated flight path and a customized schedule.As a provider of this service, we act as your charter specialist, coordinating everything from aircraft sourcing to flight planning. We assess your unique requirements and find the most suitable aircraft whether it's a narrow body for a critical delivery or a wide body freighter for an industrial project to ensure your cargo arrives on time and exactly where it needs to be.", 
      img: service3
    },
    { 
      id: "lam", 
      title: "Land Air Mode", 
      desc: "Land-Air Service via gateway, we are commited to providing an efficient gateway for Cambodian exports.✅Faster transit times ✅Seamless coordination✅Trusted handling agentTogether, we are taking Cambodian logistics to the next level.From Phnom Penh to the World", 
      img: service3
    },
    { 
      id: "rvg", 
      title: "Redoc Via Getway", 
      desc: "Redoc mode is an other solutiion option to move out your cargo via gateway whenever the capacity is constrained, etc. Our team have been experienced in this mode for many years which highly confidence to ensure your cargo process from A to Z are well handling.", 
      img: service3
    },
    { 
      id: "special", 
      title: "Special Cargo Handling", 
      desc: "Dangerous Goods (DG) are items or substances that, when transported by air, pose a risk to health, safety, property, or the environment. The transport of these goods is strictly regulated by international bodies like IATA and ICAO, requiring specific procedures for classification, packaging, labeling, and documentation.As a specialist in Dangerous Goods, we act as your certified handler, managing the entire complex process on your behalf. Our trained experts ensure that your cargo, such as chemicals or batteries, is correctly identified, packed, and labeled, and that all necessary permits and documents are in place for a safe and compliant journey."
    },
    { 
      id: "dg", 
      title: "Dangerous Goods (DG)",

      desc: "Dangerous Goods (DG) are items or substances that, when transported by air, pose a risk to health, safety, property, or the environment. The transport of these goods is strictly regulated by IATA and ICAO, requiring specific procedures for classification, packaging, labeling, and documentation.As a specialist in Dangerous Goods, we act as your certified handler, managing the entire complex process on your behalf. Our trained experts ensure that your cargo, such as chemicals or batteries, is correctly identified, packed, and labeled, and that all necessary permits and documents are in place for a safe and compliant journey", 
      img: service4 
    },
    { 
      id: "per", 
      title: "Perishable Goods (PER)", 
      desc: "Perishable goods are items that are sensitive to temperature and time, and thus require a controlled environment during transport to maintain their quality and integrity. This category includes everything from fresh food and flowers to medical supplies and pharmaceuticals.As a handler of perishable goods, we act as a protector of your cargo's freshness and quality. We provide a seamless cool-chain solution by utilizing temperature-controlled facilities and specialized containers. Our expedited handling procedures are designed to minimize transit time and temperature fluctuations, ensuring your goods arrive in their intended condition.", 
      img: service5
    },
    { 
      id: "avi", 
      title: "Live Animals (AVI)", 
      desc: "Live Animals (AVI) transport refers to the highly specialized and regulated process of flying animals, including pets, etc. This service requires careful planning and handling to ensure the welfare, safety, and comfort of the animals throughout their journey.As a handler of live animals, we act as a dedicated partner for the humane and secure transport of your animals. We follow the strict guidelines of the IATA Live Animals Regulations (LAR), coordinating with veterinarians and using appropriate containers and aircraft spaces. Our focus is on meticulous care and compliance, ensuring a stress-free experience for the animals from departure to arrival.", 
      img: service6
    },
    { 
      id: "hum", 
      title: "Human Remains (HUM)", 
      desc: "Humain Remain (HUM) transports are well preparing and planning by our expertise team to make sure the delivery are complaince with the SOP of the airline principle.", 
      img: service7
    },
  ];

  return (
    <div>
      <Hero image={image} title={title} description={description}/>
      {services.map((s) => (
        <div id={s.id} key={s.id}>
          <ServiceSection {...s} />
        </div>
      ))}
    </div>
  )
}

export default Service
