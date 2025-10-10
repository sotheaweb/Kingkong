import { useState } from "react";
import { ArrowRight } from "lucide-react";
import office from '../../assets/office.jpg'

const branches = {
  airport: {
    title: "Airport Office",
    image: office,
    description:
      "",
    location:
      "Find us at KTI Cargo Terminal location  at Room MCT-07, 1st FLOOR , CARGO TERMINAL , Techo International Airport , Kingdom of Cambodia.",
    contact: {
      phone: "+855 67 777 444",
      email: "kingkongavs@pnh.kingkong-gp.com",
    },
  },
  town: {
    title: "Town Office",
    image: office,
    description:
      "",
    location:
      "Find our town office at the heart of Phnom Penh City located at 3rd Floor, The Helix Office,No. 107-113, 12251 Preah Monivong Blvd (93), Phnom Penh, Kingdom of Cambodia",
    contact: {
      phone: "+855 67 777 444",
      email: "kingkongavs@pnh.kingkong-gp.com",
    },
  },
};

export default function OfficeBranches() {
  const [selected, setSelected] = useState("airport");
  const branch = branches[selected];

  return (
    <div 
      className="bg-cyan-600 flex flex-col items-center py-12 px-4"
      data-aos="fade-up" data-aos-delay="100"
      id="our"
    >
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8" data-aos="fade-up" data-aos-delay="150">
        Our Office Branch in Cambodia
      </h2>

      <div 
        className="flex flex-col md:flex-row gap-8 w-full max-w-6xl"
        data-aos="fade-up" data-aos-delay="150"
      >
        {/* Sidebar Buttons */}
        <div className="flex flex-col gap-4 w-full md:w-1/4">
          {Object.keys(branches).map((key) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={`flex justify-between items-center px-4 py-3 rounded-xl shadow bg-white hover:bg-sky-100 transition ${
                selected === key ? "border-2 border-cyan-400" : ""
              }`}
            >
              <span className="font-medium text-gray-800">
                {branches[key].title}
              </span>
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="flex-1 bg-white rounded-2xl shadow-md p-6">
          <img
            src={branch.image}
            alt={branch.title}
            className="w-full h-48 md:h-64 object-cover rounded-lg mb-4 duration-300 transition delay-70 hover:scale-105"
          />
          <h3 className="text-lg font-semibold text-cyan-700 mb-2">
            {branch.title}
          </h3>
          <p className="text-gray-700 mb-4">{branch.description}</p>

          <div className="space-y-2">
            <div>
              <h4 className="font-semibold text-gray-800">Location</h4>
              <p className="text-cyan-600 text-sm">{branch.location}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Contact our team</h4>
              <p className="text-sm text-gray-700">{branch.contact.phone}</p>
              <a
                href={`mailto:${branch.contact.email}`}
                className="text-cyan-600 text-sm hover:underline"
              >
                {branch.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
