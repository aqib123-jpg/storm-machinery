import React from "react";

const Refurbishment: React.FC = () => {
  // return (
  //   <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 px-5 lg:gap-6 md:gap-12 my-32 sm:gap-6">
  //     <div className="rounded-lg md:h-[100vh] lg:h-[60vh] md:col-span-2 sm:col-span-1 sm:order-3 lg:order-1">
  //       <img src="/assests/Refurbishment-first-pic.jpg" alt="Left Image" className="w-full h-full object-cover rounded-lg" />
  //     </div>
  //     <div className="rounded-lg md:h-[100vh] lg:h-[60vh] lg:col-span-1 sm:order-2 lg:order-2">
  //       <img src="/assests/Refurbishment-second-pic.jpg" alt="Right Image" className="w-full h-full object-cover rounded-lg" />
  //     </div>
  //     <div className="md:h-[100vh] lg:h-[60vh] lg:col-span-2 flex flex-col justify-center md:ml-6 sm:order-1 lg:order-3">
  //       <h2 className="text-2xl mb-4 font-playfair font-semibold  text-[#272a2b] ">Professional truck refurbishment factory</h2>
  //       <p className="font-inter text-[#4b4c4c]">
  //         We strictly control product quality to ensure that every truck and trailer meets international standards
  //         and the highest industry requirements before delivery to customers.
  //       </p>
  //     </div>
  //   </div>

  // );
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 px-5 lg:gap-6 md:gap-12 my-32 gap-6">
      <div className="rounded-lg md:h-[100vh] lg:h-[60vh] md:col-span-2 col-span-1 order-3 lg:order-1">
        <img src="/assests/Refurbishment-first-pic.jpg" alt="Left Image" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="rounded-lg md:h-[100vh] lg:h-[60vh] lg:col-span-1 order-2 lg:order-2">
        <img src="/assests/Refurbishment-second-pic.jpg" alt="Right Image" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="md:h-[100vh] lg:h-[60vh] lg:col-span-2 flex flex-col justify-center md:ml-6 order-1 lg:order-3">
        <h2 className="text-2xl mb-4 font-playfair font-semibold  text-[#272a2b] ">Professional truck refurbishment factory</h2>
        <p className="font-inter text-[#4b4c4c]">
          We strictly control product quality to ensure that every truck and trailer meets international standards
          and the highest industry requirements before delivery to customers.
        </p>
      </div>
    </div>

  );
};

export default Refurbishment;