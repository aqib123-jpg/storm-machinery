import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface HamburgerType {
  isMenuOpen: boolean; // Added `isMenuOpen` as a prop
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>; // Correct type for state setter
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerOptions: React.FC<HamburgerType> = ({ isMenuOpen, setIsMenuOpen ,setIsSearchOpen}) => {
  return (
    // <div>
    //     <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900 font-bold text-3xl my-2 mx-2">
    //       <IoIosCloseCircle />
    //     </button>
    //         <div className="grid grid-cols-1 gap-4 mx-4 mt-8 mb-4 text-center font-inter">
    //           <Link to='/' className="text-blue-500 transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>Home</button></Link>
    //           <Link to='/about' className="hover:text-blue-500 transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>About</button></Link>
    //           <Link to='/product' className="hover:text-blue-500 transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>Product</button></Link>
    //           <Link to='/services' className="hover:text-blue-500 transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>Services</button></Link>
    //           <Link to='/contact' className="hover:text-blue-500 transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>Contact</button></Link>
    //           <Link to='/faq' className="hover:text-blue-500 transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}><button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full'>FAQ</button></Link>
    //           <button className='bg-teal-600 hover:bg-white text-white hover:text-teal-600 font-bold py-2 rounded-full w-full flex  justify-center items-center'>
    //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    //               <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zm7-2l4 4" />
    //             </svg>
    //           </button>
    //         </div>
    // </div>

    <div className={`fixed inset-0 bg-[#1D7493] text-[#f6f6f6] z-50 overflow-y-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
      <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 font-bold text-3xl"><MdClose /></button>
      <div className="grid grid-cols-1 gap-4 mx-4 my-20 mb-4 text-center font-playfair  text-2xl font-semibold">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link to="/product" onClick={() => setIsMenuOpen(false)}>Product</Link>
        <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        <Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
        <div className="flex justify-center" onClick={() => setIsSearchOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zm7-2l4 4" />
          </svg>
        </div>
      </div>
    </div>

  );
};

export default HamburgerOptions;
