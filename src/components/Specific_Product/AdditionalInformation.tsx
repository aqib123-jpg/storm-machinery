// import React,{useState,useEffect} from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// interface Truck {
//   NAME : string,
//   PRICE: number | string,
//   COMPANY : string,
//   CONDITION_OF_TRUCK:string,
//   WEIGHT : number | string,
//   DIMENSIONS : string,
//   COLOR : string,
//   FUEL_TYPE : string,
//   TRANSMISSION_TYPE : string,
//   ENGINE_CAPACITT : number | string,
//   SEATING_CAPACITY : number | string,
//   MODEL_YEAR : number | string,
//   WARRANTY : number | string,
// }

// const AdditionalInfo: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const [truck, setTruck] = useState<Truck | null>(null);
//   useEffect(() => {
//     const fetchTruckData = async () => {
//            try {
//               const response = await axios.get<Truck>(`http://localhost:4500/api/truckDetails/${id}`);
//               setTruck(response.data);
//             } catch (err) {
//                 alert('Unable to fetch truck details.');
//             }
//             console.log('truck information separately : ',truck);
//         };

//         fetchTruckData();
//     }, [id]);

//   return (
//     <div className="w-full mx-auto p-5 md:p-10 font-sans">
//       <h2 className="text-3xl font-bold mb-5 text-[#272a2b] font-playfair">Additional Information</h2>
//       <table className="w-full border-collapse">
//         <tbody>
//           {truck?.map((item, index) => (
//             <tr key={index} className="border-b border-gray-300">
//               <td className="w-1/4 p-2 text-base font-inter font-bold text-left text-[#4b4c4c]">{item.label}</td>
//               <td className="w-3/4 p-2 text-left text-[#4b4c4c] text-base font-inter">{item.value}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdditionalInfo;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Truck {
  NAME: string;
  PRICE: number | string;
  COMPANY: string;
  CONDITION_OF_TRUCK: string;
  WEIGHT: number | string;
  DIMENSIONS: string;
  COLOR: string;
  FUEL_TYPE: string;
  TRANSMISSION_TYPE: string;
  ENGINE_CAPACITY: number | string;
  SEATING_CAPACITY: number | string;
  MODEL_YEAR: number | string;
  WARRANTY: number | string;
}

const AdditionalInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [truck, setTruck] = useState<Truck | null>(null); // State should hold a single object

  useEffect(() => {
    const fetchTruckData = async () => {
      try {
        const response = await axios.get<Truck>(
          `http://localhost:4500/api/truckDetails/${id}`
        );
        setTruck(response.data); // Set the object directly
      } catch (err) {
        alert("Unable to fetch truck details.");
      }
    };

    fetchTruckData();
  }, [id]);

  // If no data is loaded, show a loading message
  if (!truck) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mx-auto p-5 md:p-10 font-sans">
      <h2 className="text-3xl font-bold mb-5 text-[#272a2b] font-playfair">
        Additional Information
      </h2>
      <table className="w-full border-collapse">
        <tbody>
          {Object.entries(truck).map(([key, value], index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="w-1/4 p-2 text-base font-inter font-bold text-left text-[#4b4c4c]">
                {key.replace(/_/g, " ")} {/* Replace underscores with spaces */}
              </td>
              <td className="w-3/4 p-2 text-left text-[#4b4c4c] text-base font-inter">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdditionalInfo;
