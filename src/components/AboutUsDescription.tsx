import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const AboutUsDescription: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[85vh] bg-cover bg-center" 
    // style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(/assets/brandLogo.png)' }}
    style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(/assests/whiteTruckLifting.jpg)',}}>
      <div className='w-[50vw] text-center'>
        <h1 className='text-4xl text-[#272a2b] font-playfair font-semibold'>ABOUT US</h1>
        <p className='text-[#4b4c4c] font-inter my-4 text-lg'>Our products cover all types of trucks and trailers, which are widely used in engineering construction, cargo transportation and other fields. Whether it is heavy-load transportation or complex road conditions, our equipment can provide the best performance.</p>
      </div>
    </div>
  );
};

export default AboutUsDescription;
