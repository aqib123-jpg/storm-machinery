

// interface Truck {
//   NAME: string,IMAGE1 : string , IMAGE2: string;
// }
// const filters: Array<string>=['Howo','Honda','Suzuki','Volvo','Toyota','Diesel','Gasoline','Automatic','Semi-automatic','Manual','Sort By Prices','Sort By Manufacturing Year'];

// const CardComponent:React.FC = () => {
//     const [selectedItems, setSelectedItems] = useState<string[]>([]);
//     const [isOpen,setisOpen]=useState<boolean>(false);
//     const [truckNames, setTruckNames] = useState<Truck[]>([]);
    
//     const toggleItemSelection = (item: string) => {
//       setSelectedItems((prevSelected) =>
//         prevSelected.includes(item) ? prevSelected.filter((selected) => selected !== item) : [...prevSelected, item]);
//     };

    
//     // useEffect(() => {
//     //   axios.get<Truck[]>('http://localhost:4500/api/trucks/names')
//     //           .then(response => {
//     //               setTruckNames(response.data);
//     //               console.log('recieve data : ',response.data);
//     //               console.log('truck names ; ',truckNames);
//     //           })
//     //           .catch(error => {
//     //               console.error('There was an error fetching the truck names!', error);
//     //           });
//     //   }, []);
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:4500/api/trucks/names'); // Adjust the URL if needed
//         console.log('Received data:', response.data);
//         setTruckNames(response.data);
//         console.log('set truck names : ',truckNames);
//       } catch (error) {
//         console.error('Error fetching trucks:', error);
//       }
//     };
  
//     useEffect(() => {
//       fetchData();
//     }, []);
    
//     useEffect(() => {
//       console.log('Updated truckNames:', truckNames);
//     }, [truckNames]);
        
//   return (
//     // <div className='grid grid-cols-1 gap-24 mb-20'>
//     //     <div className='flex flex-col gap-4 justify-center bg-[#E7EAEC] h-[30vh] items-center'>
//     //         <h1 className='text-5xl text-[#272a2b] font-playfair font-semibold'>Products</h1>
//     //         <h5 className='font-inter text-[#393939]'>首页 / Products</h5>
//     //     </div>
//     //     <div>
//     //         <div className='flex justify-between px-2 xs:px-5'>
//     //           <span className='font-inter text-[#4b4c4c]'>Showing all 9 results</span>
//     //           <select className="border-b border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent text-[#272a2b] font-semibold font-inter p-2 text-base">
//     //             {
//     //               (filters).map((value,key) => 
//     //               (
//     //                 <option key={key} value={value}>{value}</option>
//     //               ))
//     //             }
//     //           </select>
            
//     //         </div>
//     //         <div className="flex flex-wrap gap-5 justify-center bg-white bg-opacity-70 ">
//     //             {products.slice().reverse().map((product) => (
//     //                 <div key={product.id} className="mt-8 mb-8 w-[276px] h-[388px] border border-gray-200 rounded-lg shadow-md overflow-hidden relative group">
//     //                 <div className="relative w-full h-[70%]">
//     //                     <img src={product.image1} alt={product.name} className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" />
//     //                     <img src={product.image2} alt={product.name} className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
//     //                 </div>
//     //                 {/* Description Section */}
//     //                 <div className="relative p-5 transition-transform duration-300 ease-in-out group-hover:translate-y-[-40px] mx-2 rounded-lg bg-[#FFFFFF] cursor-pointer">
//     //                     <Link to='/product/id'><h4 className="text-[#272a2b] font-playfair text-lg">{product.name}</h4>
//     //                     <div className="flex gap-2 my-5 text-sm text-[#4b4c4c] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//     //                         <p className='font-inter font-semibold'>Read More</p> 
//     //                         <span className='text-xl m-0 p-0 flex justify-center items-center'><FaLongArrowAltRight/></span>
//     //                     </div></Link>
//     //                 </div>
//     //                 </div>
//     //             ))}
//     //         </div>



//     //     </div>
        
//     // </div>




//     <div className='grid grid-cols-1 gap-24 mb-20'>
//         <div className='flex flex-col gap-4 justify-center bg-[#E7EAEC] h-[30vh] items-center'>
//             <h1 className='text-5xl text-[#272a2b] font-playfair font-semibold'>Products</h1>
//             <h5 className='font-inter text-[#393939]'>首页 / Products</h5>
//         </div>
//         <div>
//             <div className='flex justify-between items-center xs:px-5'>
//               <span className='font-inter text-[#4b4c4c] text-xl'>Showing all 9 results</span>
//               {/* <div className="cursor-pointer flex border-b border-gray-300 focus:outline-none focus:border-gray-500 bg-transparent text-[#272a2b] font-semibold font-inter p-2 text-base" onClick={() => setisOpen(!isOpen)}>
//                 <h1>Filter Items</h1>
//                 <span className='flex justify-center items-center text-2xl'>
//                   {(isOpen) ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
//                 </span>
//               </div>

//               { (isOpen) && 
//                   (filters).map((value,index) => (
//                     <div key={index}>{value}</div>
//                   ) )
//               } */}
//               <div className="relative inline-block">
//                 <div className='flex cursor-pointer focus:outline-none focus:border-gray-500 border-b border-gray-300' onClick={() => setisOpen(!isOpen)}>
//                   <button className=" text-[#272a2b] font-inter font-semibold">Filter Items</button>
//                   <span className='flex justify-center items-center text-2xl'>
//                     {(isOpen) ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
//                   </span>  
//                 </div>
//                 {isOpen && (
//                   <div className="absolute mt-2 w-72 bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-4 right-0">
//                     <div className="flex flex-wrap gap-2">
//                       {filters.map((item) => (
//                         <div key={item} className={`px-3 py-1 rounded-full text-sm cursor-pointer ${selectedItems.includes(item) ? "bg-blue-500 text-white": "bg-gray-200 text-gray-700"}`} onClick={() => toggleItemSelection(item)}>
//                           {item}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
            
//             </div>
//             {/* new one  */}
//             {/* <div className="flex flex-wrap gap-5 justify-center bg-white bg-opacity-70 ">
//                 {products.slice().reverse().map((product) => (
//                     <div key={product.id} className="mt-8 mb-8 w-[276px] h-[388px] border border-gray-200 rounded-lg shadow-md overflow-hidden relative group">
//                     <div className="relative w-full h-[70%]">
//                         <img src={product.image1} alt={product.name} className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" />
//                         <img src={product.image2} alt={product.name} className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
//                     </div>
//                     <div className="relative p-5 transition-transform duration-300 ease-in-out group-hover:translate-y-[-40px] mx-2 rounded-lg bg-[#FFFFFF] cursor-pointer">
//                         <Link to='/product/id'><h4 className="text-[#272a2b] font-playfair text-lg">{product.name}</h4>
//                         <div className="flex gap-2 my-5 text-sm text-[#4b4c4c] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                             <p className='font-inter font-semibold'>Read More</p> 
//                             <span className='text-xl m-0 p-0 flex justify-center items-center'><FaLongArrowAltRight/></span>
//                         </div></Link>
//                     </div>
//                     </div>
//                 ))}
//             </div> */}
//           {/* new one */}

//           <div className="flex flex-wrap gap-5 justify-center bg-white bg-opacity-70 ">
//                 {/* {truckNames.map((product) => (
//                     <div key={product.id} className="mt-8 mb-8 w-[276px] h-[388px] border border-gray-200 rounded-lg shadow-md overflow-hidden relative group">
//                     <div className="relative w-full h-[70%]">
//                         <img src={product.image1} alt={product.name} className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" />
//                         <img src={product.image2} alt={product.name} className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
//                     </div>
//                     <div className="relative p-5 transition-transform duration-300 ease-in-out group-hover:translate-y-[-40px] mx-2 rounded-lg bg-[#FFFFFF] cursor-pointer">
//                         <Link to='/product/id'><h4 className="text-[#272a2b] font-playfair text-lg">{product.name}</h4>
//                         <div className="flex gap-2 my-5 text-sm text-[#4b4c4c] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                             <p className='font-inter font-semibold'>Read More</p> 
//                             <span className='text-xl m-0 p-0 flex justify-center items-center'><FaLongArrowAltRight/></span>
//                         </div></Link>
//                     </div>
//                     </div>
//                 ))} */}
//                 {truckNames.map((truck, index) => (
//                   <div key={index} className="mt-8 mb-8 w-[276px] h-[388px] border border-gray-200 rounded-lg shadow-md overflow-hidden relative group">
//                     <div className="relative w-full h-[70%]">
//                         <img src={truck.IMAGE1} alt='Truck Name' className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" />
//                         <img src={truck.IMAGE2} alt='Truck Name' className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
//                     </div>
//                     <div className="relative p-5 transition-transform duration-300 ease-in-out group-hover:translate-y-[-40px] mx-2 rounded-lg bg-[#FFFFFF] cursor-pointer">
//                             <Link to={`/product/${index+1}`}><h4 className="text-[#272a2b] font-playfair text-xl">{truck.NAME}</h4>
//                             <div className="flex gap-2 my-5 text-sm text-[#4b4c4c] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                 <p className='font-inter font-semibold'>Read More</p> 
//                                 <span className='text-xl m-0 p-0 flex justify-center items-center'><FaLongArrowAltRight/></span>
//                             </div></Link>
//                     </div>
//                   </div>
//                 ))}
//           </div>


//         </div>
        
//     </div>
//   )
// }

// export default CardComponent









// import React,{useState,useEffect} from 'react'
// import axios from 'axios';
// import { FaLongArrowAltDown, FaLongArrowAltRight } from 'react-icons/fa';
// import { Link,useNavigate,useLocation } from 'react-router-dom';
// import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";


// interface Truck {
//  ID:string, NAME: string,IMAGE1 : string , IMAGE2: string;
// }
// const filters: Array<string>=['new','used','damaged','manual','automatic','semiautomatic','diesel','gasoline','electric','CNG','Sort By Prices','Sort By Axle','Sort By Manufacturing Year','Sort By Warranty'];

// const CardComponent: React.FC = () => {
//   const [selectedItems, setSelectedItems] = useState<string[]>([]);
//   const [isOpen, setisOpen] = useState<boolean>(false);
//   const [truckNames, setTruckNames] = useState<Truck[]>([]);
  
//   const [length,setLength]=useState<number | null>(null);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const getQueryParams = (param: string) => {
//       const params = new URLSearchParams(location.search);
//       return params.getAll(param);
//   };

//   useEffect(() => {
//       const filtersFromURL = getQueryParams('filters');
//       setSelectedItems(filtersFromURL);
//   }, [location.search]);

//   const updateQueryParams = (newFilters: string[]) => {
//       const params = new URLSearchParams();
//       newFilters.forEach(filter => params.append('filters', filter));
//       navigate({ search: params.toString() });
//   };

//   const toggleItemSelection = (item: string) => {
//       const updatedItems = selectedItems.includes(item)
//           ? selectedItems.filter(selected => selected !== item)
//           : [...selectedItems, item];

//       setSelectedItems(updatedItems);
//       updateQueryParams(updatedItems);
//   };
  
//   const fetchData = async () => {
//     try {
//       const queryParams: Array<string> = [];
//       if (selectedItems.includes('Sort By Prices')) {
//         queryParams.push('sortBy=Prices');
//       }
//       else if (selectedItems.includes('Sort By Manufacturing Year')) {
//         queryParams.push('sortBy=ManufacturingYear');
//       }
//       else if (selectedItems.includes('Sort By Warranty')) {
//         queryParams.push('sortBy=warranty');
//       }
//       else if (selectedItems.includes('Sort By Axle')) {
//         queryParams.push('sortBy=axle');
//       }
      
//       if (selectedItems.includes('Diesel')) {
//         queryParams.push('engineType=Diesel');
//       } else if (selectedItems.includes('Gasoline')) {
//         queryParams.push('engineType=Gasoline');
//       } else if (selectedItems.includes('electric')) {
//         queryParams.push('engineType=electric');
//       } else if (selectedItems.includes('CNG')) {
//         queryParams.push('engineType=CNG');
//       }
      
//       if (selectedItems.includes('Automatic')) {
//         queryParams.push('transmissionType=Automatic');
//       } else if (selectedItems.includes('Semi-automatic')) {
//         queryParams.push('transmissionType=Semi-automatic');
//       } else if (selectedItems.includes('Manual')) {
//         queryParams.push('transmissionType=Manual');
//       }
      
//       if (selectedItems.includes('new')) {
//         queryParams.push('conditionOfTruck=new');
//       } else if (selectedItems.includes('used')) {
//         queryParams.push('conditionOfTruck=used');
//       } else if (selectedItems.includes('damaged')) {
//         queryParams.push('conditionOfTruck=damaged');
//       }
      
//       const queryString = queryParams.length ? `?${queryParams.join('&')}` : '';
//       const response = await axios.get(`http://localhost:4500/api/trucks/names${queryString}`);
//       setTruckNames(response.data);
//       setLength(response.data.length);
//     } catch (error) {
//       console.error('Error fetching trucks:', error);
//     }
//   };
  
//   useEffect(() => {
//       fetchData();
//   }, [selectedItems]); 

//   return (
//     <div className='grid grid-cols-1 gap-24 mb-20'>
//         <div className='flex flex-col gap-4 justify-center bg-[#E7EAEC] h-[30vh] items-center'>
//             <h1 className='text-5xl text-[#272a2b] font-playfair font-semibold'>Products</h1>
//             <h5 className='font-inter text-[#393939]'>首页 / Products</h5>
//         </div>
//         <div>
//             <div className='flex justify-between items-center xs:px-5'>
//               <span className='font-inter text-[#4b4c4c] text-xl'>Showing all {length} results</span>
//               <div className="relative inline-block">
//                 <div className='flex cursor-pointer focus:outline-none focus:border-gray-500 border-b border-gray-300' onClick={() => setisOpen(!isOpen)}>
//                   <button className=" text-[#272a2b] font-inter font-semibold">Filter Items</button>
//                   <span className='flex justify-center items-center text-2xl'>
//                     {(isOpen) ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
//                   </span>  
//                 </div>
//                 {isOpen && (
//                   <div className="absolute mt-2 w-72 bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-4 right-0">
//                     <div className="flex flex-wrap gap-2">
//                       {filters.map((item) => (
//                         <div key={item} className={`px-3 py-1 rounded-full text-sm cursor-pointer ${selectedItems.includes(item) ? "bg-blue-500 text-white": "bg-gray-200 text-gray-700"}`} onClick={() => toggleItemSelection(item)}>
//                           {item}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           <div className="flex flex-wrap gap-5 justify-center bg-white bg-opacity-70 ">
//                 { [...truckNames].reverse().map((truck) => (
//                   <div key={truck.ID} className="mt-8 mb-8 w-[276px] h-[388px] border border-gray-200 rounded-lg shadow-md overflow-hidden relative group">
//                     <div className="relative w-full h-[70%]">
//                         <img src={`/assests/uploads/${truck.IMAGE1}`} alt='Truck Name' className="absolute top-0 left-0 w-full h-full object-fit transition-opacity duration-700 group-hover:opacity-0" />
//                         <img src={`/assests/uploads/${truck.IMAGE2}`} alt='Truck Name' className="absolute top-0 left-0 w-full h-full object-fit opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
//                     </div>
//                     <div className="relative p-5 transition-transform duration-300 ease-in-out group-hover:translate-y-[-40px] mx-2 rounded-lg bg-[#FFFFFF] cursor-pointer">
//                             <Link to={`/product/${truck.ID}`}><h4 className="text-[#272a2b] font-playfair text-xl">{truck.NAME}</h4>
//                               <div className="flex gap-2 my-5 text-sm text-[#4b4c4c] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                   <p className='font-inter font-semibold'>Read More</p> 
//                                   <span className='text-xl m-0 p-0 flex justify-center items-center'><FaLongArrowAltRight/></span>
//                               </div>
//                             </Link>
//                     </div>
//                   </div>
//                 ))}
//           </div>
//         </div>
//     </div>
//   );
// };

// export default CardComponent;



import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { FaLongArrowAltRight } from 'react-icons/fa';

interface Truck {
  ID: string;
  NAME: string;
  IMAGE1: string;
  IMAGE2: string;
}

const filters: Array<string> = [
  'Condition New', 'Condition Used', 'Condition Damaged', 'Transmission Type Manual', 'Transmission Type Automatic', 'Transmission Type Semiautomatic', 
  'Engine Type Diesel', 'Engine Type Gasoline', 'Engine Type Electric', 'Engine Type CNG', 
  'Sort By Prices', 'Sort By Axle', 'Sort By Manufacturing Year', 'Sort By Warranty'
];

const CardComponent: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [truckNames, setTruckNames] = useState<Truck[]>([]);
  const [length, setLength] = useState<number | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Helper function to get query parameters
  const getQueryParams = (param: string) => {
    const params = new URLSearchParams(location.search);
    return params.getAll(param);
  };

  // Sync state with URL query parameters
  useEffect(() => {
    const filtersFromURL = getQueryParams('filters');
    setSelectedItems(filtersFromURL);
  }, [location.search]);

  const updateQueryParams = (newFilters: string[]) => {
    const params = new URLSearchParams();
    newFilters.forEach(filter => params.append('filters', filter));
    navigate({ search: params.toString() });
  };

  const toggleItemSelection = (item: string) => {
    const isSortingFilter1 = item.startsWith('Sort By');
    const isSortingFilter2 = item.startsWith('Condition');
    const isSortingFilter3 = item.startsWith('Transmission Type');
    const isSortingFilter4 = item.startsWith('Engine Type');
    
    
    let updatedItems:string[];

    if (selectedItems.includes(item)) {
      updatedItems = selectedItems.filter(selected => selected !== item);
    } else {
      // if (isSortingFilter1) {
      //   updatedItems = selectedItems.filter(selected => !selected.startsWith('Sort By'));
      // } 
      if(isSortingFilter2){
        updatedItems = selectedItems.filter(selected => !selected.startsWith('Condition'));
      } 
      else if(isSortingFilter1){
        updatedItems = selectedItems.filter(selected => !selected.startsWith('Sort By'));
      }
      else if(isSortingFilter3){
        updatedItems = selectedItems.filter(selected => !selected.startsWith('Transmission Type'));
      } else if(isSortingFilter4){
        updatedItems = selectedItems.filter(selected => !selected.startsWith('Engine Type'));
      }
      else {
        updatedItems = [...selectedItems];
      }
      updatedItems.push(item);
    }

    setSelectedItems(updatedItems);
    updateQueryParams(updatedItems);
  };

  const fetchData = async () => {
    
    try {
      const queryParams: Array<string> = [];
      console.log('seleccted items : ',selectedItems);
      // Handling sorting criteria
      if (selectedItems.includes('Sort By Prices')) {
        queryParams.push('sortBy=prices');
      } else if (selectedItems.includes('Sort By Manufacturing Year')) {
        queryParams.push('sortBy=manufacturingYear');
      } else if (selectedItems.includes('Sort By Warranty')) {
        queryParams.push('sortBy=warranty');
      } else if (selectedItems.includes('Sort By Axle')) {
        queryParams.push('sortBy=axle');
      }

      // Handling engineType filters
      if (selectedItems.includes('Engine Type Diesel')) {
        queryParams.push('engineType=diesel');
      } else if (selectedItems.includes('Engine Type Gasoline')) {
        queryParams.push('engineType=gasoline');
      } else if (selectedItems.includes('Engine Type Electric')) {
        queryParams.push('engineType=electric');
      } else if (selectedItems.includes('Engine Type CNG')) {
        queryParams.push('engineType=CNG');
      }

      // Handling transmissionType filters
      if (selectedItems.includes('Transmission Type Automatic')) {
        queryParams.push('transmissionType=automatic');
      } else if (selectedItems.includes('Transmission Type Semiautomatic')) {
        queryParams.push('transmissionType=semiautomatic');
      } else if (selectedItems.includes('Transmission Type Manual')) {
        queryParams.push('transmissionType=manual');
      }

      // Handling conditionOfTruck filters
      if (selectedItems.includes('Condition New')) {
        queryParams.push('conditionOfTruck=new');
      } else if (selectedItems.includes('Condition Used')) {
        queryParams.push('conditionOfTruck=used');
      } else if (selectedItems.includes('Condition Damaged')) {
        queryParams.push('conditionOfTruck=damaged');
      }

      // Create query string and fetch data
      const queryString = queryParams.length ? `?${queryParams.join('&')}` : '';
      console.log('query string : ',queryString);
      const response = await axios.get(`http://localhost:4500/api/trucks/names${queryString}`);
      setTruckNames(response.data);
      setLength(response.data.length);
    } catch (error) {
      console.error('Error fetching trucks:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedItems]); // Re-fetch data when selectedItems changes

  return (
    <div className="grid grid-cols-1 gap-24 mb-20">
      <div className="flex flex-col gap-4 justify-center bg-[#E7EAEC] h-[30vh] items-center">
        <h1 className="text-5xl text-[#272a2b] font-playfair font-semibold">Products</h1>
        <h5 className="font-inter text-[#393939]">首页 / Products</h5>
      </div>
      <div>
        <div className="flex justify-between items-center xs:px-5">
          <span className="font-inter text-[#4b4c4c] text-xl px-2">Showing all {length} results</span>
          <div className="relative inline-block">
            <div className="flex cursor-pointer focus:outline-none focus:border-gray-500 border-b border-gray-300" onClick={() => setIsOpen(!isOpen)}>
              <button className="text-[#272a2b] font-inter font-semibold">Filter Items</button>
              <span className="flex justify-center items-center text-2xl">
                {isOpen ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
              </span>
            </div>
            {isOpen && (
              <div className="absolute mt-2 w-72 bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-4 right-0">
                <div className="flex flex-wrap gap-2">
                  {filters.map((item) => (
                    <div
                      key={item}
                      className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
                        selectedItems.includes(item) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                      }`}
                      onClick={() => toggleItemSelection(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-center bg-white bg-opacity-70">
          {[...truckNames].reverse().map((truck) => (
            <div
              key={truck.ID}
              className="mt-8 mb-8 w-[276px] h-[388px] border border-gray-200 rounded-lg shadow-md overflow-hidden relative group"
            >
              <div className="relative w-full h-[70%]">
                <img
                  src={`/assests/uploads/${truck.IMAGE1}`}
                  alt="Truck Name"
                  className="absolute top-0 left-0 w-full h-full object-fit transition-opacity duration-700 group-hover:opacity-0"
                />
                <img
                  src={`/assests/uploads/${truck.IMAGE2}`}
                  alt="Truck Name"
                  className="absolute top-0 left-0 w-full h-full object-fit opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
              </div>
              <div className="relative p-5 transition-transform duration-300 ease-in-out group-hover:translate-y-[-40px] mx-2 rounded-lg bg-[#FFFFFF] cursor-pointer">
                <Link to={`/product/${truck.ID}`}>
                  <h4 className="text-[#272a2b] font-playfair text-xl">{truck.NAME}</h4>
                  <div className="flex gap-2 my-5 text-sm text-[#4b4c4c] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-inter font-semibold">Read More</p>
                    <span className="text-xl m-0 p-0 flex justify-center items-center">
                      <FaLongArrowAltRight />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
