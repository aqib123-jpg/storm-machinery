import React from "react";

interface TeamMember {
  name: string;
  imageSrc: string;
}

const SalesTeam: React.FC = () => {
  const whatsappNumber = "923132651310";
  const url = `https://wa.me/${whatsappNumber}`;

  const teamMembers: TeamMember[] = [
    { name: "Adura", imageSrc: "/assests/Sales_Team/Adura.jpg" },
    { name: "Evelyn", imageSrc: "/assests/Sales_Team/Evelyn.jpg" },
    { name: "Cindy", imageSrc: "/assests/Sales_Team/Cindy.jpg" },
    { name: "Fiona", imageSrc: "/assests/Sales_Team/Fiona.jpg" },
    { name: "Wendy", imageSrc: "/assests/Sales_Team/Wendy.jpg" },
    { name: "Ivy", imageSrc: "/assests/Sales_Team/Ivy.jpg" },
    { name: "Besa", imageSrc: "/assests/Sales_Team/Besa.jpg"},
  ];

  return (
    <div className="my-20 text-center p-5">
      <h2 className="text-3xl font-bold mb-4 text-[#272a2b] font-playfair">Professional Sales Team</h2>
      <p className="mb-8 text-xl font-inter text-[#272a2b] leading-relaxed max-w-3xl mx-auto">
        Our sales team consists of a group of professional, efficient, and energetic salespeople who utilise in-depth
        industry knowledge, excellent communication skills, and relentless effort to achieve goals and drive continued
        growth.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-md transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <img src={member.imageSrc} alt={member.name} className="w-full h-auto object-cover rounded-md mb-4"/>
            <h3 className="text-xl font-playfair font-semibold text-[#272a2b] mb-2">{member.name}</h3>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <button className="font-inter mt-2 px-4  py-2 bg-blue-500 text-[#fff] rounded-md hover:bg-blue-600 transition-all">
                Contact me
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesTeam;
