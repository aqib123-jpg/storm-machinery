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
import { Link, NavLink } from 'react-router-dom';


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1024);
  
  //can be deleted
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Manage search input visibility
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
  //       </div>
        

  //     }
  //     </nav>}
  // );

  return (
    <>
      { isSearchOpen ? (
        <div className="fixed inset-0 bg-[#1D7493] flex items-center justify-center z-50">
          <input
            type="text"
            placeholder="Search..."
            className="w-2/3 p-4 text-xl rounded-lg shadow-lg focus:outline-none"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl font-bold"
          >
            ✖
          </button>
        </div>
      ) : 

      (isMenuOpen && !isWideScreen) ? (
        <HamburgerOptions isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setIsSearchOpen={setIsSearchOpen}/>
      ) : (
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
          <div className="flex xs:flex-row flex-col items-center space-x-0 xs:space-x-2 space-y-2 xs:space-y-0">
            <img src='/assests/website-logo/BrandLogo.png' alt="Logo" className="h-16 w-auto" />
            <h1 className="font-playfair text-3xl text-[#272A2B] font-bold">TRUCK EXPORT</h1>
          </div>
          {isWideScreen ? (
            <div>
              <ul className="hidden md:flex items-center space-x-8 text-[18px] font-inter">
                {/* <li><Link to='/' className="text-blue-500 transition duration-300">Home</Link></li>
                <li><Link to='/about' className="hover:text-blue-500 transition duration-300">About</Link></li>
                <li><Link to='/product' className="hover:text-blue-500 transition duration-300">Product</Link></li>
                <li><Link to='/services' className="hover:text-blue-500 transition duration-300">Services</Link></li>
                <li><Link to='/contact' className="hover:text-blue-500 transition duration-300">Contact</Link></li>
                <li><Link to='/faq' className="hover:text-blue-500 transition duration-300">FAQ</Link></li> */}

                <li><NavLink to='/' className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-[#272a2b] transition duration-300' }>Home</NavLink></li>
                <li><NavLink to='/about' className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-[#272a2b] transition duration-300' }>About</NavLink></li>
                <li><NavLink to='/product' className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-[#272a2b] transition duration-300' }>Product</NavLink></li>
                <li><NavLink to='/services' className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-[#272a2b] transition duration-300' }>Services</NavLink></li>
                <li><NavLink to='/contact' className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-[#272a2b] transition duration-300' }>Contact</NavLink></li>
                <li><NavLink to='/faq' className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-[#272a2b] transition duration-300' }>FAQ</NavLink></li>
                <li className='flex items-center'>
                  <button className="text-gray-700 hover:text-gray-900 font-bold" onClick={() => setIsSearchOpen(true)}>
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
