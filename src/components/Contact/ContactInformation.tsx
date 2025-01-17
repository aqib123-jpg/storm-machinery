import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineMailOutline } from 'react-icons/md';

const ContactInfo: React.FC = () => {
  const contactDetails = [
    {
    //   icon: <FaEnvelope className="text-white" />,
        icon:<MdOutlineMailOutline className="text-white"/>,  
        title: "Email",
        description: "stormmachinery@163.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-white" />,
      title: "Address",
      description: "Mingsheng Building, Jinan City, Shandong Province",
    },
    {
    //   icon: <FaPhoneAlt className="text-white" />,
      icon : <FiPhone className='text-white'/>,
      title: "Phone",
      description: "+86 150 6612 2602",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {contactDetails.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg">
          <div className="flex items-center justify-center p-3 mb-4 bg-[#2596BE] rounded-full text-2xl">{item.icon}</div>
          <h3 className="text-lg font-semibold mb-2 font-inter text-[#272a2b]">{item.title}</h3>
          <p className="text-[#393939] font-inter">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
