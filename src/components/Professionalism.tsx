import React from 'react';

const Component: React.FC = () => {
  return (
    // <div className="container mx-auto mt-3 p-10">
    //   <div className="content flex flex-col lg:flex-row gap-6 overflow-hidden transition-all duration-300">
    //     <div className="imageContainer flex justify-center items-center w-full">
    //       <img src='/assests/Proffessionalism.jpg' alt="Placeholder" className="image w-full h-auto object-cover rounded-lg" />
    //     </div>
    //     <div className="textSection w-full text-left">
    //       <h3 className="mb-3 text-[#4b4c4c] font-inter font-semibold">Professionalism is the key to our success</h3>
          // <h2 className="text-2xl font-bold mb-5 text-gray-900">
          //   "Customized Solutions, Global Network, and Seasoned Expertise: Our Key Advantages"
          // </h2>
          // <ul className="list-none p-0">
          //   <li className="flex gap-2 mb-5">
          //     <span className="text-xl text-blue-500 font-bold">01</span>
          //     <div>
          //       <strong className="text-xl text-gray-900">Customer customized service</strong>
          //       <p className="text-base text-gray-600 leading-6">
          //         We not only sell new and used trucks and trailers, but also provide customized services according to customer needs.
          //       </p>
          //     </div>
          //   </li>
          //   <li className="flex gap-2 mb-5">
          //     <span className="text-xl text-blue-500 font-bold">02</span>
          //     <div>
          //       <strong className="text-xl text-gray-900">Strong sales and service</strong>
          //       <p className="text-base text-gray-600 leading-6">
          //         We have established a strong sales and service network in major market areas such as Africa and South America.
          //       </p>
          //     </div>
          //   </li>
          //   <li className="flex gap-2">
          //     <span className="text-xl text-blue-500 font-bold">03</span>
          //     <div>
          //       <strong className="text-xl text-gray-900">Professional quality control</strong>
          //       <p className="text-base text-gray-600 leading-6">
          //         We have an experienced team of professionals specializing in new trucks and refurbished used trucks with more than ten years of industry experience.
          //       </p>
          //     </div>
          //   </li>
          // </ul>
    //     </div>
    //   </div>
    // </div>


    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 my-20">
      <div className='bg-blue-500 rounded-lg items-center'>
        <img src='/assests/Proffessionalism.jpg' alt="Placeholder" className="image w-full h-full object-cover rounded-lg" />
      </div>
      <div>
        <h3 className="text-lg mb-3 text-[#4b4c4c] font-inter font-semibold">Professionalism is the key to our success</h3>
        <h2 className="sm:text-4xl text-2xl font-bold mb-5 text-[#272a2b] font-playfair ">"Customized Solutions, Global Network, and Seasoned Expertise: Our Key Advantages"</h2>
        <ul className="list-none p-0 ">
            <li className="flex sm:gap-12 gap-4 my-8">
              <span className="text-2xl text-[#2596be] font-bold">01</span>
              <div className='flex flex-col gap-2'>
                <strong className="text-xl text-[#272a2b] font-playfair">Customer customized service</strong>
                <p className="text-[#6d6d6d] font-inter leading-6">
                  We not only sell new and used trucks and trailers, but also provide customized services according to customer needs.
                </p>
              </div>
            </li>
            <li className="flex sm:gap-12 gap-4 my-8">
              <span className="text-2xl text-[#2596be] font-bold">02</span>
              <div className='flex flex-col gap-2'>
                <strong className="text-xl text-[#272a2b] font-playfair">Strong sales and service</strong>
                <p className="text-[#6d6d6d] font-inter leading-6">
                  We have established a strong sales and service network in major market areas such as Africa and South America.
                </p>
              </div>
            </li>
            <li className="flex sm:gap-12 gap-4 my-8">
              <span className="text-2xl text-[#2596be] font-bold">03</span>
              <div className='flex flex-col gap-2'>
                <strong className="text-xl text-[#272a2b] font-playfair">Professional quality control</strong>
                <p className="text-[#6d6d6d] font-inter leading-6">
                  We have an experienced team of professionals specializing in new trucks and refurbished used trucks with more than ten years of industry experience.
                </p>
              </div>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Component;
