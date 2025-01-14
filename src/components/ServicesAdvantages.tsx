import React from "react";

const ServicesAdvantages: React.FC = () => {
  const products = [
    {
      image: "/assests/Services_Advantages/first.jpg", 
    },
    {
      image: "/assests/Services_Advantages/second.jpg", 
    },
    {
      image: "/assests/Services_Advantages/third.jpg", 
    },
  ];
  return (
    <div  className="p-8 my-12">
      <h2 className="text-center text-3xl font-bold mb-8 font-playfair text-[#272a2b]">Our Advantages</h2>
      {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-20">
        {products.map((product, index) => (
          <div key={index} className="overflow-hidden grid grid-cols-10 xl:h-[55vh] lg:h-[45vh] md:h-[60vh] ">
            <div className="col-span-9 rounded-lg overflow-hidden">
              <img src={product.image} className="h-full w-full object-cover"/>
            </div>
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-9">
        {products.map((product, index) => (
          <div key={index} className="rounded-lg xl:h-[55vh] lg:h-[45vh] md:h-[60vh]">
            {/* <div className="col-span-9 rounded-lg overflow-hidden"> */}
              <img src={product.image} className="h-full w-full object-cover rounded-lg"/>
            </div>
        //   </div>
        ))}
      </div>
      </div>
  );
};

export default ServicesAdvantages;



// import React from "react";

// const ServicesAdvantages: React.FC = () => {
//   const products = [
//     {
//       image: "/assests/Services_Advantages/first.jpg", 
//     },
//     {
//       image: "/assests/Services_Advantages/second.jpg", 
//     },
//     {
//       image: "/assests/Services_Advantages/third.jpg", 
//     },
//   ];

//   return (
//     <div className="p-8 my-12 bg-blue-400">
//       <h2 className="text-center text-3xl font-bold mb-8 font-playfair text-[#272a2b]">
//         Our Advantages
//       </h2>
//       <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-20">
//         {products.map((product, index) => (
//           <div 
//             key={index} 
//             className="flex items-center justify-center overflow-hidden grid grid-cols-10 xl:h-[55vh] lg:h-[45vh] md:h-[60vh]"
//           >
//             <div className="col-span-9 rounded-lg overflow-hidden">
//               <img 
//                 src={product.image} 
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesAdvantages;
