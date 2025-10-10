import { icons } from 'lucide-react'
import React from 'react'

const OurService = () => {
    const content = [
        {   
            icons: icons.Truck,
            title: "CSA",
            subtitle: "We are a leading freight forwarding company in Cambodia, specializing in the import and export of various goods.",
        },
        {   
            // icons: icons.Truck,
            title: "GSSA/GSA",
            subtitle: "We are a leading freight forwarding company in Cambodia, specializing in the import and export of various goods.",
        },
        {   
            // icons: icons.Truck,
            title: "Cargo Charter",
            subtitle: "We are a leading freight forwarding company in Cambodia, specializing in the import and export of various goods.",
        },
        {   
            // icons: icons.Truck,
            title: "Land Air Mode",
            subtitle: "We are a leading freight forwarding company in Cambodia, specializing in the import and export of various goods.",
        },
        {   
            // icons: icons.Truck,
            title: "Redoc Via Gateway",
            subtitle: "We are a leading freight forwarding company in Cambodia, specializing in the import and export of various goods.",
        },
        {   
            // icons: icons.Truck,
            title: "Special Cargo Handling",
            subtitle: "We are a leading freight forwarding company in Cambodia, specializing in the import and export of various goods.",
        }
    ]
  return (
    <div className='container mx-auto px-10 lg:px-40 py-12 mt-15'
        data-aos="fade-up" 
        data-aos-delay="150"
    >
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-4">Our Service</h1>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {content.map((item, index) => (
                <div key={index} className='p-4 shadow-md hover:shadow-lg duration-300 hover:scale-105 transition delay-70'>
                    {/* <item.icons className='w-8 h-8 text-blue-500 mb-4' /> */}
                    <h2 className='text-xl font-semibold mb-2'>{item.title}</h2>
                    <p className='text-gray-600 text-sm'>{item.subtitle}</p>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default OurService
