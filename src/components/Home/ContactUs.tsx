import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ContactUs: React.FC = () => {
  return (
    // <div className="bg-gradient-to-b from-gray-200 via-gray-100 to-white bg-cover bg-center bg-no-repeat text-center py-16 flex flex-col items-center justify-center min-h-[500px]" style={{backgroundImage: '#1F7990, url(/assests/descriptionBG.jpg)',}}>
    // <div className="bg-cover bg-center bg-no-repeat text-center py-16 flex flex-col items-center justify-center min-h-[500px]" style={{backgroundImage: `url(/assets/BrandLogo.png)`,}}>  
    //   <div className="mb-8">
    //     <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Contact Us</h1>
    //     <div className="text-orange-500 text-4xl md:text-5xl">
    //       <span>★★★★★</span>
    //     </div>
    //   </div>

    //   <div className="w-4/5 max-w-2xl text-center text-gray-700 text-lg font-semibold space-y-6">
    //     <p>
    //       Our products cover all kinds of trucks and trailers, which are widely
    //       used in engineering construction, cargo transportation, and other
    //       fields. Whether it is heavy-load transportation or the challenge of
    //       complex road conditions, our equipment can provide the best
    //       performance. In addition to sales, we provide comprehensive
    //       after-sales service and technical support to ensure that customers
    //       get the most satisfactory experience.
    //     </p>
    //     <p className="flex items-center justify-center space-x-2">
    //       <span>WhatsApp:</span>
    //       <FaWhatsapp className="text-green-500 text-2xl" />
    //     </p>
    //     <p className="flex items-center justify-center space-x-2">
    //       <span>Email:</span>
    //       <FaEnvelope className="text-red-500 text-2xl" />
    //     </p>
    //   </div>
    // </div>
    
    // <div className="bg-cover bg-center bg-no-repeat text-center py-16 flex flex-col items-center justify-center min-h-[500px]" style={{backgroundImage: 'rgba(25, 150, 157, 0.9), url(/assests/contactus.jpeg)',}}>
    //     <div className="mb-8">
    //       <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Contact Us</h1>
    //       <div className="text-orange-500 text-4xl md:text-5xl">
    //         <span>★★★★★</span>
    //       </div>
    //     </div>

    //     <div className="w-4/5 max-w-2xl text-center text-gray-700 text-lg font-semibold space-y-6">
    //       <p>
    //         Our products cover all kinds of trucks and trailers, which are widely
    //         used in engineering construction, cargo transportation, and other
    //         fields. Whether it is heavy-load transportation or the challenge of
    //         complex road conditions, our equipment can provide the best
    //         performance. In addition to sales, we provide comprehensive
    //         after-sales service and technical support to ensure that customers
    //         get the most satisfactory experience.
    //       </p>
    //       <p className="flex items-center justify-center space-x-2">
    //         <span>WhatsApp:</span>
    //         <FaWhatsapp className="text-green-500 text-2xl" />
    //       </p>
    //       <p className="flex items-center justify-center space-x-2">
    //         <span>Email:</span>
    //         <FaEnvelope className="text-red-500 text-2xl" />
    //       </p>
    //     </div>
    // </div> 32 , 125 , 153

    <div
      className="my-20 bg-cover bg-center bg-no-repeat text-center py-16 flex flex-col items-center justify-center min-h-[500px] "
      style={{
        // backgroundImage: 'linear-gradient(rgba(25, 150, 157, 0.9), rgba(25, 150, 157, 0.4)), url(/assests/contactus.jpeg)',
        backgroundImage: 'linear-gradient(rgba(25, 155, 255, 0.7), rgba(25, 150, 157, 0.8)), url(/assests/contactus.jpeg)',
      }}
    >
      <div className="mb-8">
        <h1 className="text-5xl md:text-6xl font-bold text-[#FFFFFF] mb-4 font-playfair">Contact Us</h1>
        <div className="text-[#FFBA25] text-4xl md:text-5xl">
          <span>★★★★★</span>
        </div>
      </div>

      <div className="w-4/5 max-w-2xl text-center text-[#FFFFFF] text-lg space-y-6 font-inter">
        <p>
          Our products cover all kinds of trucks and trailers, which are widely
          used in engineering construction, cargo transportation, and other
          fields. Whether it is heavy-load transportation or the challenge of
          complex road conditions, our equipment can provide the best
          performance. In addition to sales, we provide comprehensive
          after-sales service and technical support to ensure that customers
          get the most satisfactory experience.
        </p>
        <p className="flex items-center justify-center space-x-2">
          <span>WhatsApp : +86 150 6612 2602</span>
          
        </p>
        <p className="flex items-center justify-center space-x-2">
          <span>Email : stormmachinery@163.com</span>
        </p>
      </div>
    </div>


  );
};

export default ContactUs;
