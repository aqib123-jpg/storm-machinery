import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const ServicesDescription: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[85vh] bg-cover bg-center" 
    // style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(/assets/brandLogo.png)' }}
    style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(/assests/gray-steel-tower-photo.jpeg)',}}>
      <div className='xs:w-[50vw] text-center'>
        <h1 className='text-4xl text-textColor-heading font-playfair font-semibold'>Our Services</h1>
        <p className='text-textColor-default  font-inter my-4 text-lg'>Shandong Storm Machinery Co., Ltd.’s expertise in engineering equipment and unwavering commitment to customer service ensure that we can continue to provide excellent products and services to customers around the world.</p>
      </div>
    </div>
  );
};

export default ServicesDescription;
