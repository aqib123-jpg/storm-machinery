import React, { useState,useEffect } from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { useParams } from "react-router-dom";
import axios from "axios";

interface StateType {
    x : number,
    y : number
}
interface Truck {
  NAME : string,
  DESCRIPTION : string
}


const ProductAdditionalInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [truck, setTruck] = useState<Truck | null>(null);
  const [truckPics, setTruckPics] = useState<{IMAGE_PATH:string}[]>([]);
  const [currentPic,updatePic]=useState<string>('');
  console.log('id : ',id);
  
  useEffect(() => {
    const fetchTruckData = async () => {
        try {
              const response = await axios.get<Truck>(`http://localhost:4500/api/truck/${id}`);
              setTruck(response.data);
            } catch (err) {
                alert('Unable to fetch truck details.');
            }
        };

        fetchTruckData();
    }, [id]);

    useEffect(() => {
      const fetchTruckPics = async () => {
        try {
          const response = await axios.get<{ IMAGE_PATH: string }[]>(`http://localhost:4500/api/truckPics/${id}`);
          setTruckPics(response.data);
          console.log('truck pics for : ',id,' = ',truckPics);
          if (response.data.length > 0) {
            updatePic(response.data[0].IMAGE_PATH);
        }
        } catch (err) {
          alert('Unable to fetch truck details.');
        }
      };
    
      fetchTruckPics();
    }, [id]);
    
  
  const [mousePosition, setMousePosition] = useState<StateType>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) : void => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x : number = ((event.clientX - left) / width) * 100; // Calculate X percentage
    const y : number = ((event.clientY - top) / height) * 100; // Calculate Y percentage
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () : void => setIsHovering(true);
  const handleMouseLeave = () : void => setIsHovering(false);

  if (!truckPics.length) {
    return <div>No images available for this product.</div>;
  }
  
  return (
    <div className="lg:px-16 md:px-8 px-4 py-8 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 gap-6">
        <div className="space-y-2">
            <div className="relative lg:h-[75vh] md:h-[50vh] overflow-hidden" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={currentPic} alt="Main Product" className={`w-full h-full object-fit transition-transform duration-300 ${ isHovering ? "scale-150" : "scale-100"}`} style={{ transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,}}/>
                <div className="absolute top-2 right-2 p-2 rounded-full cursor-pointer bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zm7-2l4 4" />
                    </svg>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
                {/* {["firstBlue.jpg", "secondBlue.jpg", "thirdBlue.jpg", "fourthBlue.jpg", "fifthBlue.jpg", "sixthBlue.jpg","seventhBlue.jpg"].map(
                (img, index) => (
                    <img
                    key={index}
                    src={`/assests/Howo 6x4 Dump Truck/${img}`}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-20 h-20 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110 ${ (currentPic == img) ? "" : "opacity-50"}`}
                    onClick={() => updatePic(img)}
                    />
                )
                )} */}
                {truckPics.map(
                (img, index) => (
                    <img
                    key={index}
                    src={img.IMAGE_PATH}
                    alt={`Thumbnail ${index + 1}`}
                    className={`md:w-20 md:h-20 h-12 w-12 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110 ${ (currentPic == img.IMAGE_PATH) ? "" : "opacity-50"}`}
                    onClick={() => updatePic(img.IMAGE_PATH)}
                    />
                )
                )}
            </div>
        </div>
        <div className="pt-6">
          <h1 className="text-4xl font-playfair font-bold text-[#272a2b] mb-4 leading-snug">{truck?.NAME}</h1>
          {/* <p className="text-[#4b4c4c] mb-4 leading-relaxed">
            HOWO 6×4 dump truck is a powerful truck designed for heavy-duty
            transportation. It is equipped with a powerful engine, excellent
            carrying capacity, and good durability. Its body is made of
            high-strength steel, combined with optimized suspension and braking
            systems, to ensure reliability and safety under harsh working
            conditions.
          </p>
          <p className="text-gray-600 mb-6">
            In addition, this model focuses on environmental protection and
            energy-saving, adapts to complex transportation needs, and is ideal
            for engineering transportation.
          </p> */}
          <p className="text-[#4b4c4c] mb-4 leading-relaxed">{truck?.DESCRIPTION}</p>
          



          <div className="mb-6">
            <h2 className="text-lg font-inter font-semibold text-[#4b4c4c]">
              Free shipping on orders over $50!
            </h2>
            <ul className="mt-2 space-y-1 text-[#4b4c4c] leading-relaxed">
              <li className="flex items-center gap-2"><BsShieldFillCheck /><span>Satisfaction Guaranteed</span></li>
              <li className="flex items-center gap-2"><BsShieldFillCheck/><span>No Hassle Refunds</span></li>
              <li className="flex items-center gap-2"><BsShieldFillCheck/><span>Secure Payments</span></li>
            </ul>
          </div>

          <div className="p-4 rounded-lg shadow-md">
            {/* <h3 className="text-gray-700 font-medium mb-2">
              GUARANTEED SAFE CHECKOUT
            </h3> */}
            <img src="/assests/paymentCards.png" alt="payment cards" />
          </div>

          <div className="mt-6 text-sm font-semibold">
            <p className="text-[#6d6d6d] font-inter"><span className="font-semibold">Category:</span> HOWO Truck</p>
            <p className="text-[#6d6d6d] font-inter"><span className="font-semibold">Tags:</span> 8X4 Dump Truck, HOWO Dump Truck, Used Dump Truck</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdditionalInfo;
