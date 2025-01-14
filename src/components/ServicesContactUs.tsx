import React from 'react';

const ServicesContactUs: React.FC = () => {
  return (
    <div
      className="my-20 bg-cover bg-center bg-no-repeat text-center py-16 flex flex-col items-center justify-center min-h-[500px] "
    //   style={{
        
    //     backgroundImage: 'linear-gradient(rgba(25, 155, 255, 0.7), rgba(25, 150, 157, 0.8)), url(/assests/redTruckOnTroller.jpg)',
        
    //   }}
    // >
    style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/assests/BlackTruck.jpeg)',}}>
      <div className="mb-8">
        <h1 className="text-5xl md:text-8xl font-bold text-[#272a2b] mb-4 font-playfair">Contact Us</h1>
        <div className="text-[#FFBA25] text-4xl md:text-5xl">
          <span>★★★★★</span>
        </div>
      </div>

      <div className="w-4/5 max-w-2xl text-center text-[#272a2b] text-lg space-y-6 font-inter italic leading-8">
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

export default ServicesContactUs;
