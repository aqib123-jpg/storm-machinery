import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

interface HamburgerType {
  isMenuOpen: boolean; // Added `isMenuOpen` as a prop
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>; // Correct type for state setter
}

const HamburgerOptions: React.FC<HamburgerType> = ({ isMenuOpen, setIsMenuOpen }) => {
  // return (
  //   <>
  //     <div>
  //       <button
  //         onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the state
  //         className="text-gray-700 hover:text-gray-900 font-bold text-3xl"
  //       >
  //         {isMenuOpen ? (
  //           <IoIosCloseCircle />
  //         ) : (
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             className="h-6 w-6"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth={3}
  //           >
  //             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  //           </svg>
  //         )}
  //       </button>
  //     </div>
  //     {isMenuOpen && (
  //       <div className="bg-blue-300 text-2xl h-[100vh] flex justify-center items-center">
  //         <h2>Hamburger Options</h2>
  //       </div>
  //     )}
  //   </>
  // );
  return (
    <div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900 font-bold text-3xl my-2 mx-2">
          <IoIosCloseCircle />
        </button>
        {/* <div className="grid grid-cols-1 gap-4 mx-4 mt-8 mb-4 text-center">
            <a href="#home"><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>Home</button></a>
            <a href="#about"><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>About</button></a>
            <a href="#product"><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>Product</button></a>
            <a href="#services"><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>Services</button></a>
            <a href="#contact"><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>Contact</button></a>
            <a href="#faq"><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>FAQ</button></a>
            <button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full flex  justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zm7-2l4 4" />
              </svg>
            </button> */}

            <div className="grid grid-cols-1 gap-4 mx-4 mt-8 mb-4 text-center font-inter">
              <Link to='/' className="text-blue-500 transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>Home</button></Link>
              <Link to='/about' className="hover:text-blue-500 transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>About</button></Link>
              <Link to='/product' className="hover:text-blue-500 transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>Product</button></Link>
              <Link to='/services' className="hover:text-blue-500 transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>Services</button></Link>
              <Link to='/contact' className="hover:text-blue-500 transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>Contact</button></Link>
              <Link to='/faq' className="hover:text-blue-500 transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>FAQ</button></Link>
              <button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full flex  justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zm7-2l4 4" />
                </svg>
              </button>
            </div>
    </div>
  );
};

export default HamburgerOptions;
