import React from 'react';

const FaqDescription: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[85vh] bg-cover bg-center" 
    // style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(/assets/brandLogo.png)' }}
    style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(/assests/faq.jpeg)',}}>
      <div className='xs:w-[50vw] text-center'>
        <h1 className='text-4xl text-textColor-heading font-playfair font-semibold'>FAQ</h1>
        <p className='text-textColor-subheading font-inter my-4 text-lg'>Common Questions About Purchasing Used Trucks</p>
      </div>
    </div>
  );
};

export default FaqDescription;
