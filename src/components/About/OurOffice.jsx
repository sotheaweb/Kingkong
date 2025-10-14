import { useState } from "react";
import { ArrowRight } from "lucide-react";
import office from "../../assets/office.jpg";

const branches = {
  airport: {
    title: "Airport Office",
    image: office,
    description: "",
    location:
      "Find us at KTI Cargo Terminal located at Room MCT-07, 1st FLOOR, CARGO TERMINAL, Techo International Airport, Kingdom of Cambodia.",
    contact: {
      phone: "+855 67 777 444",
      email: "kingkongavs@pnh.kingkong-gp.com",
    },
  },
  town: {
    title: "Town Office",
    image: office,
    description: "",
    location:
      "Find our town office at the heart of Phnom Penh City located at 3rd Floor, The Helix Office, No. 107-113, 12251 Preah Monivong Blvd (93), Phnom Penh, Kingdom of Cambodia.",
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
      id="our"
      data-aos="fade-up"
      data-aos-delay="100"
      className="
        bg-cyan-600 
        flex 
        flex-col 
        items-center 
        py-12 
        px-4 
        sm:px-6 
        md:px-10
      "
    >
      {/* Title */}
      <h2
        data-aos="fade-up"
        data-aos-delay="150"
        className="
          text-2xl 
          sm:text-3xl 
          md:text-4xl 
          font-bold 
          text-white 
          text-center 
          mb-10
        "
      >
        Our Office Branch in Cambodia
      </h2>

      {/* Content Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="
          flex 
          flex-col 
          md:flex-row 
          gap-8 
          w-full 
          max-w-[95%] 
          sm:max-w-[90%] 
          md:max-w-[1000px] 
          lg:max-w-[1200px] 
          xl:max-w-[1200px] 
          mx-auto
        "
      >
        {/* Sidebar Buttons */}
        <div className="flex flex-col gap-4 w-full md:w-1/4">
          {Object.keys(branches).map((key) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={`
                flex justify-between items-center 
                px-4 py-3 
                rounded-xl 
                shadow-md 
                bg-white 
                hover:bg-sky-100 
                transition-all 
                duration-300 
                ${
                  selected === key
                    ? "border-2 border-cyan-500 shadow-lg scale-[1.02]"
                    : "border border-transparent"
                }
              `}
            >
              <span className="font-medium text-gray-800">
                {branches[key].title}
              </span>
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div
          className="
            flex-1 
            bg-white 
            rounded-2xl 
            shadow-xl 
            p-6 
            sm:p-8 
            md:p-10 
            flex 
            flex-col 
            justify-start
          "
        >
          {/* Image */}
          <div className="rounded-lg overflow-hidden mb-6">
            <img
              src={branch.image}
              alt={branch.title}
              className="
                w-full 
                h-[200px] 
                sm:h-[250px] 
                md:h-[300px]  
                object-cover 
                rounded-lg 
                transition-transform 
                duration-300 
                hover:scale-105
              "
            />
          </div>

          {/* Info */}
          <h3 className="text-xl md:text-2xl font-semibold text-cyan-700 mb-3">
            {branch.title}
          </h3>
          {branch.description && (
            <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg">
              {branch.description}
            </p>
          )}

          <div className="space-y-4 text-sm sm:text-base md:text-lg">
            <div>
              <h4 className="font-semibold text-gray-800">📍 Location</h4>
              <p className="text-cyan-600">{branch.location}</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">📞 Contact our team</h4>
              <p className="text-gray-700">{branch.contact.phone}</p>
              <a
                href={`mailto:${branch.contact.email}`}
                className="text-cyan-600 hover:underline"
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
