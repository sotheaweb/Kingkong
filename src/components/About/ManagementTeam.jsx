import manager from "../../assets/manager.png";

export default function ManagementTeam() {
  const team = [
    {
      image: manager,
      name: "Mrs. Yong Channynet",
      role: `General Manager, more than 12 years of experience in Air Cargo Industry (Forwarder, Air Cargo, GSA, CSA)`,
    },
    {
      image: manager,
      name: "Mr. Eng Audom",
      role: "Operation Manager, more than 10 years experience in Air Operation Cargo Industry",
    },
    {
      image: manager,
      name: "Mrs. You Chansocheata",
      role: "Sales Manager, about 10 years experience in Sales Cargo Industry",
    },
  ];

  return (
    <section 
     className="bg-sky-100 py-12 px-6"
     data-aos="fade-up"
     data-aos-delay="200"
    >
      {/* Title */}
      <h2 className="text-3xl ml-15 font-bold text-cyan-700 mb-10">
        Management <br /> Team
      </h2>

      {/* Layout */}
      <div className="flex flex-col items-center gap-12">
        {/* Top card (General Manager) */}
        <div className="relative flex items-center -right-4.5 w-full max-w-xl hover:scale-105 duration-300 transition delay-70">
          {/* Circle avatar */}
          <div className="absolute -left-10 w-29 h-29 rounded-full overflow-hidden border-4 border-sky-100 shadow-md">
            <img
              src={team[0].image}
              alt={team[0].name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Box */}
          <div className="bg-cyan-600 text-white rounded-md shadow-md w-full h-28 pl-20 pr-4 flex flex-col justify-center">
            <h3 className="font-bold text-lg">{team[0].name}</h3>
            <p className="text-sm leading-snug">{team[0].role}</p>
          </div>
        </div>

        {/* Bottom row (2 cards) */}
        <div className="grid grid-cols-1 gap-8 lg:gap-30 md:grid-cols-1 mb-15 w-full md:max-w-xl lg:grid-cols-2 lg:max-w-5xl lg:mt-10">
          {team.slice(1).map((member, index) => (
            <div key={index} className="relative flex items-center -right-4.5 hover:scale-105 duration-300 transition delay-70">
              <div className="absolute -left-10 w-29 h-29 rounded-full overflow-hidden border-4 border-sky-100 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Box */}
              <div className="bg-cyan-600 text-white rounded-md shadow-md w-full h-28 pl-20 pr-4 flex flex-col justify-center">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm leading-snug">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
