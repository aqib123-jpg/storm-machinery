import React from 'react'
import { FaLongArrowAltDown, FaLongArrowAltRight } from 'react-icons/fa';

const CardComponent:React.FC = () => {
    const products = [
        { 
          id: 1, 
          name: 'HOWO 6X4 DUMP TRUCK', 
          image1: '/assests/products/blackTruckLeft.jpg', 
          image2: '/assests/products/blueTruckLeftonly.jpg',
          description: 'This 6x4 dump truck is designed for heavy-duty transport and construction tasks, featuring robust construction and high payload capacities.'
        },{ 
          id: 2, 
          name: 'HOWO 6X4 DUMP TRUCK MIDDLE LIFTING', 
          image1: '/assests/products/blackTruckLeft.jpg', 
          image2: '/assests/products/blueTruckLeftonly.jpg',
          description: 'Engineered for efficiency, this middle-lifting dump truck offers superior maneuverability and durability in challenging environments.'
        },{ 
          id: 3, 
          name: 'HOWO 6X4 DUMP TRUCK MIDDLE LIFTING RHD', 
          image1: '/assests/products/blackTruckLeft.jpg', 
          image2: '/assests/products/blueTruckLeftonly.jpg',
          description: 'This right-hand drive dump truck combines comfort and functionality, perfect for diverse terrains and loading conditions.'
        },{ 
          id: 4, 
          name: 'HOWO 8X4 CARGO TRUCK', 
          image1: '/assests/products/blackTruckLeft.jpg', 
          image2: '/assests/products/blueTruckLeftonly.jpg',
          description: 'Ideal for transporting large payloads, this 8x4 cargo truck offers unmatched reliability and a spacious cargo area.'
        },{ 
          id: 5, 
          name: 'HOWO 8X4 CHASSIS TRUCK LEFT', 
          image1: '/assests/products/blackTruckLeft.jpg', 
          image2: '/assests/products/blueTruckLeftonly.jpg',
          description: 'This chassis truck features a left-hand drive setup, ensuring safety and comfort in logistics operations.'
        },{ 
          id: 6, 
          name: 'HOWO 8X4 CHASSIS TRUCK RHD', 
          image1: '/assests/products/blackTruckLeft.jpg', 
          image2: '/assests/products/blueTruckLeftonly.jpg',
          description: 'A right-hand drive chassis truck that provides a robust platform for various modifications and applications.'
        },{ 
          id: 7, 
          name: 'HOWO 8X4 DUMP TRUCK', 
          image1: '/assests/products/blackTruckLeft.jpg', 
          image2: '/assests/products/blueTruckLeftonly.jpg',
          description: 'This heavy-duty 8x4 dump truck is engineered to perform in the most demanding of conditions, offering exceptional durability.'
        },{ 
          id: 8, 
          name: 'HOWO 8X4 DUMP TRUCK GREEN', 
          image1: '/assests/products/blackTruckLeft.jpg', 
          image2: '/assests/products/blueTruckLeftonly.jpg',
          description: 'Eco-friendly and powerful, this green dump truck combines sustainability with high performance for all your construction needs.'
        }
      ];
        
  return (
    <div className='grid grid-cols-1 gap-24 mb-20'>
        <div className='flex flex-col gap-4 justify-center bg-[#E7EAEC] h-[30vh] items-center'>
            <h1 className='text-5xl text-[#272a2b] font-playfair font-semibold'>Products</h1>
            <h5 className='font-inter text-[#393939]'>首页 / Products</h5>
        </div>
        <div className=''>
            <span className='font-inter text-[#4b4c4c]  px-5'>Showing all 9 results</span>
            {/* <div className="flex flex-wrap gap-5 justify-center bg-white bg-opacity-70">
                {products.slice().reverse().map((product) => (
                    <div key={product.id} className="mt-8 mb-8 w-[276px] h-[388px] border border-gray-200 rounded-lg shadow-md overflow-hidden relative transition-transform duration-500 ease-in-out hover:translate-y-[-10px] hover:shadow-lg">
                        <div className="relative w-full h-[70%]">
                            <img src={product.image1} alt={product.name} className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 hover:opacity-0"/>
                            <img src={product.image2} alt={product.name} className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 hover:opacity-100"/>
                        </div>
                        <div className="p-5 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
                            <h4 className="text-gray-600 font-medium text-lg">{product.name}</h4>
                        </div>
                    </div>
                ))}
            </div> */}
            
            <div className="flex flex-wrap gap-5 justify-center bg-white bg-opacity-70">
                {products.slice().reverse().map((product) => (
                    <div key={product.id} className="mt-8 mb-8 w-[276px] h-[388px] border border-gray-200 rounded-lg shadow-md overflow-hidden relative group">
                    <div className="relative w-full h-[70%]">
                        <img src={product.image1} alt={product.name} className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" />
                        <img src={product.image2} alt={product.name} className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    </div>
                    {/* Description Section */}
                    <div className="relative p-5 transition-transform duration-300 ease-in-out group-hover:translate-y-[-40px] mx-2 rounded-lg bg-[#FFFFFF]">
                        <h4 className="text-[#272a2b] font-playfair text-lg">{product.name}</h4>
                        {/* <p className="absolute bottom-[-40px] left-0 w-full text-center text-sm text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"> */}
                        
                        {/* <p className="absolute left-0 w-full text-center text-sm text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Show More <FaLongArrowAltRight/>
                        </p> */}

                        <div className="flex gap-2 my-5 text-sm text-[#4b4c4c] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className='font-inter font-semibold'>Read More</p> 
                            <span className='text-xl m-0 p-0 flex justify-center items-center'><FaLongArrowAltRight/></span>
                        {/* </div> */}
                        </div>
                    </div>
                    </div>
                ))}
            </div>



        </div>
        
    </div>
  )
}

export default CardComponent