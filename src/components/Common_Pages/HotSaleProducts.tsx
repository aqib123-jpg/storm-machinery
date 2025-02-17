import React from "react";

const ProductGallery: React.FC = () => {
  const products = [
    {
      title: "HOWO 8X4 DUMP TRUCK",
      image: "/assests/HotSaleOne.jpg", 
    },
    {
      title: "HOW 6X4 DUMP TRUCK",
      image: "/assests/HotSaleTwo.jpg", 
    },
    {
      title: "HOWO 6X4 TRACTOR TRUCK",
      image: "/assests/HotSaleThree.png", 
    },
  ];
  return (
    <div className="p-8 my-32">
      <h2 className="text-center text-3xl font-bold mb-8 font-playfair text-textColor-heading">HOTS SALE PRODUCTS</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-20">
        {products.map((product, index) => (
          <div key={index} className="overflow-hidden grid grid-cols-10 xl:h-[55vh] lg:h-[45vh] md:h-[60vh] ">
            <div className="col-span-9 rounded-lg overflow-hidden">
              <img src={product.image} alt={product.title} className="h-full w-full object-fit"/>
            </div>
            <div className="flex items-center justify-center rounded-r-lg">
              <p className="font-inter transform -rotate-90 text-center whitespace-nowrap text-textColor-subheading font-semibold text-xs xs:text-sm">{product.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
