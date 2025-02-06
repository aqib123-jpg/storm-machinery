// import React, { useState,useEffect } from 'react';
// import BrandLogo from '../assets/website-logo/BrandLogo.png';

// const Navbar: React.FC = () => {
//     const [isMenuOpen, setIsWideScreen] = useState<boolean>(window.innerWidth >= 768);
//     const handleResize = () => {
//       setIsWideScreen(window.innerWidth >= 768);
//     };
//     useEffect(() => {
//       window.addEventListener("resize", handleResize);
//       return () => {
//         window.removeEventListener("resize", handleResize);
//       };
//     }, []);
//   return (
//     <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
//       <div className="flex items-center space-x-2">
//         <img src={BrandLogo} alt="Logo" className="h-16 w-auto"/>
//         <div>
//           <h1 className="font-playfair text-3xl  text-[#272A2B] font-bold">TRUCK EXPORT</h1>
//         </div>
//       </div>
//       <ul className="grid lg:grid-cols-6 md:grid-cols-3 gap-6">
//         <li><a href="#home" className="text-blue-500 transition duration-300">Home</a></li>
//         <li><a href="#about" className="hover:text-blue-500 transition duration-300">About</a></li>
//         <li><a href="#product" className="hover:text-blue-500 transition duration-300">Product</a></li>
//         <li><a href="#services" className="hover:text-blue-500 transition duration-300">Services</a></li>
//         <li><a href="#contact" className="hover:text-blue-500 transition duration-300">Contact</a></li>
//         <li><a href="#faq" className="hover:text-blue-500 transition duration-300">FAQ</a></li>
//       </ul>
//       <div>
        // <button className="text-gray-700 hover:text-gray-900 font-bold">
        //   <svg
        //     xmlns="http://www.w3.org/2000/svg"
        //     className="h-6 w-6"
        //     fill="none"
        //     viewBox="0 0 24 24"
        //     stroke="currentColor"
        //     strokeWidth={3}
        //   >
        //     <path
        //       strokeLinecap="round"
        //       strokeLinejoin="round"
        //       d="M11 19a8 8 0 100-16 8 8 0 000 16zm7-2l4 4"
        //     />
        //   </svg>
        // </button>
//       </div>
//       {isMenuOpen && (
//         <ul className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md py-4 px-8 space-y-4">
//           <li>
//             <a href="#home" className="text-blue-500 transition duration-300">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#about" className="hover:text-blue-500 transition duration-300">
//               About
//             </a>
//           </li>
//           <li>
//             <a href="#product" className="hover:text-blue-500 transition duration-300">
//               Product
//             </a>
//           </li>
//           <li>
//             <a href="#services" className="hover:text-blue-500 transition duration-300">
//               Services
//             </a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:text-blue-500 transition duration-300">
//               Contact
//             </a>
//           </li>
//           <li>
//             <a href="#faq" className="hover:text-blue-500 transition duration-300">
//               FAQ
//             </a>
//           </li>
//         </ul>
//       )}

//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import HamburgerOptions from './HamburgerOptions.tsx';
// import { IoIosCloseCircle } from 'react-icons/io';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Truck } from '../types.ts';

//can be deleted
// interface Truck {
//   ID: number;
//   NAME: string;
// }
//can be deleted

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1024);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Manage search input visibility
  
  
  //can be deleted
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Truck[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<Truck[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTruckNames = async () => {
      try {
        const response = await axios.get<Truck[]>("http://localhost:4500/api/truckNames");
        setSuggestions(response.data);
      } catch (err) {
        alert("Unable to fetch truck names.");
      }
    };

    fetchTruckNames();
  }, []);

  // Filter suggestions based on the search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredSuggestions([]);
    } else {
      const filtered = suggestions.filter((truck) =>
        truck.NAME.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }
  }, [searchQuery, suggestions]);

  const handleSuggestionClick = (id: number) => {
    setIsSearchOpen(false); // Close search modal
    setSearchQuery('');
    setIsMenuOpen(false);
    navigate(`/product/${id}`); // Redirect to the product page
  };
  //can be deleted

  const handleResize = () => {
    setIsWideScreen(window.innerWidth >= 1024);
  };

  // Setting up event listener for resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);
  

  // return (
  //   <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
  //       <div className="flex xs:flex-row flex-col items-center space-x-0 xs:space-x-2 space-y-2 xs:space-y-0">
  //         <img src={BrandLogo} alt="Logo" className="h-16 w-auto" />
  //         <h1 className="font-playfair text-3xl text-[#272A2B] font-bold">TRUCK EXPORT</h1>
  //       </div>
  //       {isWideScreen ? (
  //         <div>
  //           <ul className="hidden md:flex items-center space-x-8 text-[18px] font-inter">
  //             <li><a href="#home" className="text-blue-500 transition duration-300">Home</a></li>
  //             <li><a href="#about" className="hover:text-blue-500 transition duration-300">About</a></li>
  //             <li><a href="#product" className="hover:text-blue-500 transition duration-300">Product</a></li>
  //             <li><a href="#services" className="hover:text-blue-500 transition duration-300">Services</a></li>
  //             <li><a href="#contact" className="hover:text-blue-500 transition duration-300">Contact</a></li>
  //             <li><a href="#faq" className="hover:text-blue-500 transition duration-300">FAQ</a></li>
  //             <li className='flex items-center'>
  //               <button className="text-gray-700 hover:text-gray-900 font-bold">
  //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
  //                   <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zm7-2l4 4" />
  //                 </svg>
  //               </button>
  //             </li>
  //           </ul>
  //         </div>
  //       ) : 
        
  //       // isMenuOpen ? ( 
  //       //   <HamburgerOptions/>
  //       //   // <>
  //       //   //   <IoIosCloseCircle /> 
  //       //   //   <h3>Menu is Open My Brother</h3>
  //       //   // </>
  //       //   // <ul className="absolute top-20 left-0 w-full bg-white shadow-md py-4 px-8 space-y-4">
  //       //   //   <li><a href="#home" className="text-blue-500 transition duration-300">Home</a></li>
  //       //   //   <li><a href="#about" className="hover:text-blue-500 transition duration-300">About</a></li>
  //       //   //   <li><a href="#product" className="hover:text-blue-500 transition duration-300">Product</a></li>
  //       //   //   <li><a href="#services" className="hover:text-blue-500 transition duration-300">Services</a></li>
  //       //   //   <li><a href="#contact" className="hover:text-blue-500 transition duration-300">Contact</a></li>
  //       //   //   <li><a href="#faq" className="hover:text-blue-500 transition duration-300">FAQ</a></li>
  //       //   // </ul>
  //       // ) : (
  //       // <div className='flex items-center justify-center h-16'>
  //       //   <button
  //       //     onClick={() => setIsMenuOpen(!isMenuOpen)}
  //       //     className="text-gray-700 hover:text-gray-900 font-bold"
  //       //   >
  //       //     <svg
  //       //       xmlns="http://www.w3.org/2000/svg"
  //       //       className="h-6 w-6"
  //       //       fill="none"
  //       //       viewBox="0 0 24 24"
  //       //       stroke="currentColor"
  //       //       strokeWidth={3}
  //       //     >
  //       //       <path
  //       //         strokeLinecap="round"
  //       //         strokeLinejoin="round"
  //       //         d="M4 6h16M4 12h16M4 18h16"
  //       //       />
  //       //     </svg>
  //       //   </button>
  //       // </div>)

  //       <div>
  //         {/* <div className="md:hidden cursor-pointer mt-2 ml-2 inline-flex justify-center items-center py-0 text-3xl text-white" onClick={() => updateOption(!showOptions)}>
  //           {showOptions ? <IoIosCloseCircle /> : <AiOutlineMenu />}
  //         </div> */}
  //           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900 font-bold text-3xl">
  //             {(isMenuOpen) ?
  //             <IoIosCloseCircle />
  //             :
  //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
  //               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  //             </svg>}
  //           </button>
  //       </div>
        

  //     }
  //     </nav>
  // );

  // return (
  //   {
  //     (isMenuOpen && isWideScreen) ?
  //     <HamburgerOptions/>
  //   :
  //   <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
  //       <div className="flex xs:flex-row flex-col items-center space-x-0 xs:space-x-2 space-y-2 xs:space-y-0">
  //         <img src={BrandLogo} alt="Logo" className="h-16 w-auto" />
  //         <h1 className="font-playfair text-3xl text-[#272A2B] font-bold">TRUCK EXPORT</h1>
  //       </div>
  //       {isWideScreen ? (
  //         <div>
  //           <ul className="hidden md:flex items-center space-x-8 text-[18px] font-inter">
  //             <li><a href="#home" className="text-blue-500 transition duration-300">Home</a></li>
  //             <li><a href="#about" className="hover:text-blue-500 transition duration-300">About</a></li>
  //             <li><a href="#product" className="hover:text-blue-500 transition duration-300">Product</a></li>
  //             <li><a href="#services" className="hover:text-blue-500 transition duration-300">Services</a></li>
  //             <li><a href="#contact" className="hover:text-blue-500 transition duration-300">Contact</a></li>
  //             <li><a href="#faq" className="hover:text-blue-500 transition duration-300">FAQ</a></li>
  //             <li className='flex items-center'>
  //               <button className="text-gray-700 hover:text-gray-900 font-bold">
  //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
  //                   <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zm7-2l4 4" />
  //                 </svg>
  //               </button>
  //             </li>
  //           </ul>
  //         </div>
  //       ) : 
  //       <div>
  //           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900 font-bold text-3xl">
  //             {(isMenuOpen) ?
  //             <IoIosCloseCircle />
  //             :
  //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
  //               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  //             </svg>}
  //           </button>
  //       </div>just a comment
        

  //     }
  //     </nav>}
  // );




  return (
    <>
      { isSearchOpen ? (
        // <div className="fixed inset-0 bg-[#1D7493] flex items-center justify-center z-50 ">
        //   <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 max-w-2xl">
        //     <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full p-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        //     <div className="mt-4 space-y-2">
        //       {filteredSuggestions.map((truck) => (
        //         <div key={truck.ID} onClick={() => handleSuggestionClick(truck.ID)} className="p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition">{truck.NAME}</div>
        //       ))}
        //       {filteredSuggestions.length === 0 && searchQuery.trim() && (
        //         <div className="p-3 text-gray-500 text-center bg-gray-50 rounded-lg">
        //           No results found
        //         </div>
        //       )}
        //     </div>
        //   </div>
        //   <button onClick={() => setIsSearchOpen(false)} className="absolute top-4 right-4 text-white text-3xl font-bold hover:scale-110 transition">✖</button>
        // </div>

        <div className="fixed inset-0 bg-background-search flex items-center justify-center z-50">
          <div className="bg-background p-6 rounded-lg shadow-lg w-2/3 max-w-2xl">
            <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full p-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-background-search"/>
            <div className="mt-4 space-y-2 overflow-y-auto" style={{ maxHeight: "300px" }}>
              {filteredSuggestions.map((truck) => (
                <div key={truck.ID} onClick={() => handleSuggestionClick(truck.ID)} className="p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-background-secondary transition">{truck.NAME}</div>
              ))}
              {filteredSuggestions.length === 0 && searchQuery.trim() && (
                <div className="p-3 text-gray-500 text-center bg-gray-50 rounded-lg">No results found</div>
              )}
            </div>
          </div>
          <button onClick={() => setIsSearchOpen(false)} className="absolute top-4 right-4 text-white text-3xl font-bold hover:scale-110 transition">✖</button>
        </div>
      ) : 

      (isMenuOpen && !isWideScreen) ? (
        <HamburgerOptions isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setIsSearchOpen={setIsSearchOpen}/>
      ) : (
        <nav className="flex items-center justify-between px-8 py-4 bg-background-default shadow-md">
          <div className="flex xs:flex-row flex-col items-center space-x-0 xs:space-x-2 space-y-2 xs:space-y-0">
            <Link to='/'><img src='/assests/website-logo/BrandLogo.png' alt="Logo" className="h-16 w-auto" /></Link>
            <h1 className="font-playfair text-3xl text-textColor-heading font-bold">TRUCK EXPORT</h1>
          </div>
          {isWideScreen ? (
            <div>
              <ul className="hidden md:flex items-center space-x-8 text-[18px] font-inter">
                <li><NavLink to='/' className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-textColor-subheading transition duration-300' }>Home</NavLink></li>
                <li><NavLink to='/about' className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-textColor-subheading transition duration-300' }>About</NavLink></li>
                <li><NavLink to='/product' className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-textColor-subheading transition duration-300' }>Product</NavLink></li>
                <li><NavLink to='/services' className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-textColor-subheading transition duration-300' }>Services</NavLink></li>
                <li><NavLink to='/contact' className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-textColor-subheading transition duration-300' }>Contact</NavLink></li>
                <li><NavLink to='/faq' className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-textColor-subheading transition duration-300' }>FAQ</NavLink></li>
                <li className='flex items-center'>
                  <button className="text-textColor-subheading font-bold" onClick={() => setIsSearchOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zm7-2l4 4" />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900 font-bold text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </nav>
      )}
    </>
  );


  // onClick={() => setIsMenuOpen(!isMenuOpen)

  // return (
  //   <>
  //     {isSearchOpen ? (
  //       <div className="fixed inset-0 bg-blue-500 flex items-center justify-center z-50">
  //         <input
  //           type="text"
  //           placeholder="Search..."
  //           className="w-2/3 p-4 text-xl rounded-lg shadow-lg focus:outline-none"
  //         />
  //         <button
  //           onClick={() => setIsSearchOpen(false)}
  //           className="absolute top-4 right-4 text-white text-2xl font-bold"
  //         >
  //           ✖
  //         </button>
  //       </div>
  //     ) : (
  //       <>
  //         {(isMenuOpen && !isWideScreen) ? (
  //           <HamburgerOptions isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
  //         ) : (
  //           <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
  //             <div className="flex xs:flex-row flex-col items-center space-x-0 xs:space-x-2 space-y-2 xs:space-y-0">
  //               <img src="/assests/website-logo/BrandLogo.png" alt="Logo" className="h-16 w-auto" />
  //               <h1 className="font-playfair text-3xl text-[#272A2B] font-bold">TRUCK EXPORT</h1>
  //             </div>
  //             {isWideScreen ? (
  //               <div>
  //                 <ul className="hidden md:flex items-center space-x-8 text-[18px] font-inter">
  //                   <li><Link to="/" className="text-blue-500 transition duration-300">Home</Link></li>
  //                   <li><Link to="/about" className="hover:text-blue-500 transition duration-300">About</Link></li>
  //                   <li><Link to="/product" className="hover:text-blue-500 transition duration-300">Product</Link></li>
  //                   <li><Link to="/services" className="hover:text-blue-500 transition duration-300">Services</Link></li>
  //                   <li><Link to="/contact" className="hover:text-blue-500 transition duration-300">Contact</Link></li>
  //                   <li><Link to="/faq" className="hover:text-blue-500 transition duration-300">FAQ</Link></li>
                    // <li className="flex items-center">
                    //   <button
                    //     onClick={() => setIsSearchOpen(true)}
                    //     className="text-gray-700 hover:text-gray-900 font-bold"
                    //   >
                    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    //       <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zm7-2l4 4" />
                    //     </svg>
                    //   </button>
                    // </li>
  //                 </ul>
  //               </div>
  //             ) : (
  //               <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900 font-bold text-3xl">
  //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
  //                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  //                 </svg>
  //               </button>
  //             )}
  //           </nav>
  //         )}
  //       </>
  //     )}
  //   </>
  // );
  
};

export default Navbar;
