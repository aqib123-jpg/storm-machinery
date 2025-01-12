// import React from 'react'

// const Description: React.FC = () => {
//   return (
//     <div>Description Component</div>
//   )
// }

// export default Description


import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Description: React.FC = () => {
  return (
    <div className="flex items-center min-h-screen bg-cover bg-center" style={{backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.9) 20%, rgba(255, 255, 255, 0) 100%), url(/assests/descriptionBG.jpg)',}}>
      <div className="px-5 md:w-[55vw] max-w-[80vw] space-y-4">
        <p className="font-inter text-[#4B4C4C] ">Professional Truck Export Company</p>
        <h1 className='font-playfair md:text-6xl text-3xl font-semibold text-[#272a2b]'>STORM MACHINERY</h1>
        <p className='text-[#4b4c4c]'>We are a construction equipment sales business focused on providing high quality, high performance new and used trucks and trailers.</p>
        <button className="flex items-center gap-3 bg-blue-500 text-white px-10 py-4 rounded-full text-lg hover:bg-[#1D7493] font-inter"><FaArrowDown />Contact Us</button>
      </div>
    </div>
  );
};

export default Description;
