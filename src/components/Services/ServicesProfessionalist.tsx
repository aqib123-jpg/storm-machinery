import React from 'react';

const ServicesProfessionalism: React.FC = () => {
  return (
    <div className="my-32 grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">
      <div className='rounded-lg items-center'>
        <img src='/assests/professionalistPicForServices.jpeg' alt="Placeholder" className="image w-full h-full object-cover rounded-lg" />
      </div>
      <div>
        <h3 className="text-lg mb-3 text-textColor-subheading font-inter font-semibold">Professionalism is the key to our success</h3>
        <h2 className="sm:text-4xl text-2xl font-bold mb-5 text-textColor-heading font-playfair ">"Customized Solutions, Global Network, and Seasoned Expertise: Our Key Advantages"</h2>
        <ul className="list-none p-0 ">
            <li className="flex sm:gap-12 gap-4 my-8">
              <span className="text-2xl text-[#2596be] font-bold">01</span>
              <div className='flex flex-col gap-2'>
                <strong className="text-xl text-textColor-subheading font-playfair">Customer customized service</strong>
                <p className="text-textColor-default font-inter leading-6">
                  We not only sell new and used trucks and trailers, but also provide customized services according to customer needs.
                </p>
              </div>
            </li>
            <li className="flex sm:gap-12 gap-4 my-8">
              <span className="text-2xl text-[#2596be] font-bold">02</span>
              <div className='flex flex-col gap-2'>
                <strong className="text-xl text-textColor-subheading font-playfair">Strong sales and service</strong>
                <p className="text-textColor-default font-inter leading-6">
                  We have established a strong sales and service network in major market areas such as Africa and South America.
                </p>
              </div>
            </li>
            <li className="flex sm:gap-12 gap-4 my-8">
              <span className="text-2xl text-[#2596be] font-bold">03</span>
              <div className='flex flex-col gap-2'>
                <strong className="text-xl text-textColor-subheading font-playfair">Professional quality control</strong>
                <p className="text-textColor-default font-inter leading-6">
                  We have an experienced team of professionals specializing in new trucks and refurbished used trucks with more than ten years of industry experience.
                </p>
              </div>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default ServicesProfessionalism;
