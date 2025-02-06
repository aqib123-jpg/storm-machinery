import React from 'react';
// import { FaArrowDown } from 'react-icons/fa';

const ContactUsDescription: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[85vh] bg-cover bg-center" 
    // style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(/assets/brandLogo.png)' }}
    style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(/assests/Refurbishment-second-pic.jpg)',}}>
      <div className='xs:w-[50vw] text-center'>
        <h1 className='text-4xl text-textColor-heading font-playfair font-semibold'>CONTACT US</h1>
        <p className='text-textColor-default font-inter my-4 text-lg'>to find out more about how we can assist you with your engineering equipment needs. Our team is ready to provide you with personalized attention and help you select the best solutions for your requirements.</p>
      </div>
    </div>
  );
};

export default ContactUsDescription;
