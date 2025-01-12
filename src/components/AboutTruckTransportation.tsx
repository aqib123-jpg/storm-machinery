import React from "react";
import { FaBullseye } from "react-icons/fa";

interface SectionProps {
  title: string;
  description: string;
}

const sections: SectionProps[] = [
  {
    title: "LAND SHIPPING",
    description:
      "We have a professional land transportation team, and the trucks will be reinforced before transportation to ensure safe arrival.",
  },
  {
    title: "SEA TRANSPORT",
    description:
      "We cooperate with large shipping companies. The trucks are waxed and treated for rust prevention before shipment. After loading, they will be well reinforced to ensure the safety of the trucks.",
  },
];

const AboutTruckTransportation: React.FC = () => {
  return (
    <div className="mt-24 flex flex-col lg:flex-row lg:items-start lg:space-x-8 px-8 overflow-hidden">
      <div className="flex-1">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-left text-[#272a2b] font-playfair ">
          ABOUT TRUCK TRANSPORTATION
        </h1>
      
        {sections.map((section, index) => (
          // <div key={index} className="flex items-start mb-6">
          //   {/* <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border-4 border-blue-500 mr-4">
          //     <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          //   </div> */}
          //   {/* <svg
          //     xmlns="http://www.w3.org/2000/svg"
          //     width="32" // Adjust the size as needed
          //     height="32"
          //     viewBox="0 0 32 32"
          //     fill="none"
          //   >
          //     <circle cx="16" cy="16" r="14" stroke="#007BFF" strokeWidth="4" fill="white" />
          //     <circle cx="16" cy="16" r="4" fill="#007BFF" />
          //   </svg> */}
          //   <div className="text-3xl text-blue-600"><FaBullseye/>
          //   </div>

          //   {/* Text Content */}
          //   <div>
          //     <h3 className="text-lg font-bold text-gray-700">{section.title}</h3>
          //     <p className="text-base text-gray-600 mt-2 leading-relaxed">
          //       {section.description}
          //     </p>
          //   </div>
          // </div>
          <div key={index} className="flex mb-6 gap-4">
            <div className="text-3xl text-[#2596BE]"><FaBullseye/>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#272a2b] font-playfair">{section.title}</h3>
              <p className="text-base text-[#393939] mt-2 leading-relaxed font-inter">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      
      {/* <div className="flex-shrink-0 mt-8 lg:mt-0 lg:flex-2 bg-red-500">
        <img
          src="/assests/about.jpg"
          alt="Truck Transportation"
          className="rounded-lg max-w-full lg:max-w-[750px] lg:max-h-[550px] object-contain md:object-cover"
        />
      </div> */}
      <div className="flex-shrink-0 mt-8 lg:mt-0 lg:flex-2 bg-red-500 rounded-lg">
        <img
          src="/assests/about.jpg"
          alt="Truck Transportation"
          className="rounded-lg w-full h-full object-cover md:object-cover lg:max-w-[750px] lg:max-h-[550px] lg:object-contain"
        />
      </div>
    </div>
  );
};

export default AboutTruckTransportation;
