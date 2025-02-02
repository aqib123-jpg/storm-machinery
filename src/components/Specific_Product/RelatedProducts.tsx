import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaLongArrowAltDown, FaLongArrowAltRight } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';


interface Truck {
  ID: string;
  NAME: string;
  IMAGE1: string;
  IMAGE2: string;
}

const RelatedProducts:React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [relatedProducts, setRelatedProducts] = useState<Truck[]>([]);

  // useEffect(() => {
  //   const fetchTruckData = async () => {
  //     try {
  //       const response = await axios.get<Truck>(
  //         `http://localhost:4500/api/relatedProducts/${id}`
  //       );
  //       setRelatedProducts(response.data); 
  //     } catch (err) {
  //       alert("Unable to fetch truck details.");
  //     }
  //   };
  //   fetchTruckData();
  // }, []);

  useEffect(() => {
    const fetchTruckData = async () => {
      try {
        // Update to expect an array of trucks
        const response = await axios.get<Truck[]>(
          `http://localhost:4500/api/relatedProducts/${id}`
        );
        setRelatedProducts(response.data); // No error now
      } catch (err) {
        alert("Unable to fetch truck details.");
      }
    };
    fetchTruckData();
  }, [id]); // Include `id` in the dependency array



      
  // const products = [
  //       { 
  //         id: 1, 
  //         name: 'HOWO 6X4 DUMP TRUCK', 
  //         image1: '/assests/products/blackTruckLeft.jpg', 
  //         image2: '/assests/products/blueTruckLeftonly.jpg',
  //         description: 'This 6x4 dump truck is designed for heavy-duty transport and construction tasks, featuring robust construction and high payload capacities.'
  //       },{ 
  //         id: 2, 
  //         name: 'HOWO 6X4 DUMP TRUCK MIDDLE LIFTING', 
  //         image1: '/assests/products/blackTruckLeft.jpg', 
  //         image2: '/assests/products/blueTruckLeftonly.jpg',
  //         description: 'Engineered for efficiency, this middle-lifting dump truck offers superior maneuverability and durability in challenging environments.'
  //       },{ 
  //         id: 3, 
  //         name: 'HOWO 6X4 DUMP TRUCK MIDDLE LIFTING RHD', 
  //         image1: '/assests/products/blackTruckLeft.jpg', 
  //         image2: '/assests/products/blueTruckLeftonly.jpg',
  //         description: 'This right-hand drive dump truck combines comfort and functionality, perfect for diverse terrains and loading conditions.'
  //       }
  //     ];

  return (
    <div>
        <h2 className="my-6 md:my-0 text-center text-3xl font-bold font-playfair text-[#272a2b]">Related Products</h2>
        <div className="flex flex-wrap gap-5 justify-center bg-background bg-opacity-70 ">
            {relatedProducts.slice().reverse().map((product) => (
                <div key={product.ID} className="md:my-8 w-[276px] h-[388px] border border-gray-200 rounded-lg shadow-md overflow-hidden relative group">
                    <div className="relative w-full h-[70%]">
                        <img src={`/assests/uploads/${product.IMAGE1}`} alt={product.NAME} className="absolute top-0 left-0 w-full h-full object-fit transition-opacity duration-700 group-hover:opacity-0" />
                        <img src={`/assests/uploads/${product.IMAGE2}`} alt={product.NAME} className="absolute top-0 left-0 w-full h-full object-fit opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    </div>
                    <div className="relative p-5 transition-transform duration-300 ease-in-out group-hover:translate-y-[-40px] mx-2 rounded-lg bg-background cursor-pointer">
                        <Link to={`/product/${product.ID}`}><h4 className="text-[#272a2b] font-playfair text-lg">{product.NAME}</h4>
                            <div className="flex gap-2 my-5 text-sm text-[#4b4c4c] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className='font-inter font-semibold'>Read More</p> 
                                    <span className='text-xl m-0 p-0 flex justify-center items-center'><FaLongArrowAltRight/></span>
                            </div></Link>
                    </div>
                </div>
            ))}
        </div>
    </div>

    
  ); 
}

export default RelatedProducts