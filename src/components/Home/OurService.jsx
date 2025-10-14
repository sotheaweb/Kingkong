import React from 'react';
import { Truck } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const OurService = () => {
  const content = [
    { icon: Truck, title: "CSA", id:"csa", subtitle: "On-site quality control and logistics coordination." },
    { icon: Truck, title: "GSSA/GSA", id:"gssa", subtitle: "Represent the airline brand and drive sales locally." },
    { icon: Truck, title: "Cargo Charter", id:"cargo", subtitle: "Flexible cargo charter solutions for urgent shipments." },
    { icon: Truck, title: "Land Air Mode",id:"lam", subtitle: "Efficient land-air transit services." },
    { icon: Truck, title: "Redoc Via Gateway",id:"rvg", subtitle: "Alternative routing solutions via gateway." },
    { icon: Truck, title: "Special Cargo Handling",id:"special", subtitle: "Certified handling of dangerous and sensitive cargo." }
  ];

  return (
    <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8 max-w-[1200px]">
      <h1 className="text-3xl sm:text-4xl font-bold text-cyan-600 text-center sm:text-left mb-8">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch">
        {content.map((item) => {
          const Icon = item.icon;
          return (
            <HashLink
              smooth
              to={`/services#${item.id}`}
              key={item.title}
              className="block h-full"
              scroll={el => {
                const yOffset = -80;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }}
            >
              <div className="flex flex-col h-full p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-101 duration-300">
                {Icon && <Icon className="w-10 h-10 text-cyan-600 mb-4" />}
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm sm:text-base">{item.subtitle}</p>
              </div>
            </HashLink>
          );
        })}
      </div>
    </div>
  );
};

export default OurService;
