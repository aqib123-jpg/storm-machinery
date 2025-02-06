import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const BelowServicesProffessionalism: React.FC = () => {
  return (
    <div className="my-12 flex items-center justify-center h-[85vh] bg-cover bg-center" 
    style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(/assests/contactus.jpeg)',}}>
      <div className='sm:w-[50vw] w-[80vw] text-center'>
        <h1 className='text-4xl text-textColor-heading font-playfair font-semibold'>STORM MACHINERY</h1>
        <p className='text-textColor-default font-inter my-4 text-lg'>Our products cover all types of trucks and trailers, which are widely used in engineering construction, cargo transportation and other fields. Whether it is heavy-load transportation or complex road conditions, our equipment can provide the best performance.</p>
      </div>
    </div>
  );
};

export default BelowServicesProffessionalism
