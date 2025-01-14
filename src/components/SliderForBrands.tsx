// import React from 'react'

// const SliderForBrands:React.FC = () => {
//   return (
//     <div>Slider For Brands</div>
//   )
// }

// export default SliderForBrands


// import React, { useState } from 'react';

// interface Slide {
//   id: number;
//   imgSrc: string;
//   altText: string;
// }

// const slidesData: Slide[] = [
//   { id: 1, imgSrc: '/assests/ourAdvantages.jpg', altText: 'Logo 1' },
//   { id: 2, imgSrc: '/assests/HotSaleOne.jpg', altText: 'Logo 2' },
//   { id: 3, imgSrc: '/assests/HotSaleTwo.jpg', altText: 'Logo 3' },
//   { id: 4, imgSrc: '/assests/HotSaleThree.png', altText: 'Logo 4' },
// ];

// const SliderComponent: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const totalSlides = slidesData.length;

//   const handleNextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
//   };

//   const handlePrevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
//   };

//   const handleDotClick = (index: number) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="relative flex items-center">
//       {/* Left Arrow */}
//       <button
//         className="absolute left-0 z-10 p-2 text-white bg-black rounded-full hover:bg-gray-800 focus:outline-none"
//         onClick={handlePrevSlide}
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>

//       {/* Slider */}
//       <div className="overflow-hidden w-full">
//         <div
//           className="flex transition-transform duration-300 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {slidesData.map((slide) => (
//             <div key={slide.id} className="min-w-full flex justify-center items-center">
//               <img src={slide.imgSrc} alt={slide.altText} className="w-32 h-32 object-contain" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Arrow */}
//       <button
//         className="absolute right-0 z-10 p-2 text-white bg-black rounded-full hover:bg-gray-800 focus:outline-none"
//         onClick={handleNextSlide}
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>

//       {/* Dots Indicator */}
//       <div className="flex justify-center space-x-2 mt-4">
//         {slidesData.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full focus:outline-none ${
//               currentSlide === index ? 'bg-gray-800' : 'bg-gray-400'
//             }`}
//             onClick={() => handleDotClick(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SliderComponent;





import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const brands = [
  { id: 1, logo: "/assests/brandLogos/volvo.png", alt: "Brand 1" },
  { id: 2, logo: "/assests/brandLogos/hongyan.jpeg", alt: "Brand 2" },
  { id: 3, logo: "/assests/brandLogos/mercedes.jpeg", alt: "Brand 3" },
  { id: 4, logo: "/assests/brandLogos/foton.jpeg", alt: "Brand 4" },
  { id: 5, logo: "/assests/brandLogos/dfm.jpeg", alt: "Brand 5" },
  { id: 6, logo: "/assests/brandLogos/sinotruck.jpeg", alt: "Brand 6" },
  { id: 7, logo: "/assests/brandLogos/one.jpeg", alt: "Brand 7" },
];

const NextArrow = (props: { onClick?: React.MouseEventHandler<HTMLDivElement> }) => {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-900 z-10 " onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props: { onClick?: React.MouseEventHandler<HTMLDivElement> }) => {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-900 z-10" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const BrandSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 665,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  

  return (
    <div className="py-10 px-7">
      <Slider {...settings}>
        {brands.map((brand) => (
          <div key={brand.id} className="px-4">
            <img
              src={brand.logo}
              alt={brand.alt}
              className="mx-auto h-32 object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandSlider;
