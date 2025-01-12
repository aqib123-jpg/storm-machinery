import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Navbar from './pages/Navbar.tsx';
import Footer from './pages/Footer.tsx';


function App() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>



    // <header class="flex justify-center items-center py-8 bg-white shadow-md relative">
    //   <div class="grid grid-cols-[auto_auto_1fr] gap-20 items-center">
    //     <div class="flex items-center">
    //       {/* <Link to="/" class="w-40 h-12 flex items-center justify-center mr-4"> */}
    //         <img src="../src/assets/BrandLogo.png" alt="Logo" class="h-full w-full" />
    //       {/* </Link> */}
    //       <h1 class="text-3xl font-bold text-gray-800">TRUCK EXPORT</h1>
    //     </div>
    //     <button class="hidden flex-col justify-left items-center bg-transparent border-none cursor-pointer p-2 md:flex absolute right-8 top-1/4">
    //       <div class="w-6 h-[3px] bg-gray-800 mb-1"></div>
    //       <div class="w-6 h-[3px] bg-gray-800 mb-1"></div>
    //       <div class="w-6 h-[3px] bg-gray-800"></div>
    //     </button>
    //     <div class="hidden grid-cols-7 gap-8 text-lg font-medium text-gray-800 md:hidden">
    //       {['Home', 'About', 'Product', 'Services', 'Contact', 'FAQ'].map(item => {
    //         const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
    //         return (
    //           <span key={item} class="text-center hover:cursor-pointer">
    //             {/* <Link 
    //               // to={path} 
    //               // class={`text-gray-800 ${location.pathname === path ? 'text-primary' : ''} hover:text-primary`}
    //             >
    //               {item}
    //             </Link> */}
    //             {item}
    //           </span>
    //         );
    //       })}
    //       <button class="bg-transparent border-none text-gray-800 hover:text-primary p-2">
    //         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //           <circle cx="11" cy="11" r="8"></circle>
    //           <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    //   {/* {isSearchOpen && (
    //     <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    //       <div class="relative bg-white p-6 rounded-lg shadow-lg">
    //         <button class="absolute top-2 right-2 text-2xl">&times;</button>
    //         <div>
    //           <input type="text" class="border border-gray-300 rounded-lg p-2 w-full" placeholder="Search..." autoFocus />
    //           <button class="absolute right-2 top-2">
    //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //               <circle cx="11" cy="11" r="8"></circle>
    //               <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    //             </svg>
    //           </button>
    //         </div>
    //         {suggestions.length > 0 && (
    //           <ul class="mt-4 border border-gray-300 rounded-lg">
    //             {suggestions.map(product => (
    //               <li key={product.id} class="p-2 border-b last:border-none">{product.name}</li>
    //             ))}
    //           </ul>
    //         )}
    //       </div>
    //     </div>
    //   )} */}
    //   {/* {isNavOpen && (
    //     <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    //       <div class="relative bg-white p-6 rounded-lg shadow-lg">
    //         <button class="absolute top-2 right-2 text-2xl">&times;</button>
    //         <ul class="space-y-4 text-center">
    //           <li onClick={handleNavToggle}><Link to="/" class="text-lg text-gray-800 hover:text-primary">Home</Link></li>
    //           <li onClick={handleNavToggle}><Link to="/about" class="text-lg text-gray-800 hover:text-primary">About</Link></li>
    //           <li onClick={handleNavToggle}><Link to="/product" class="text-lg text-gray-800 hover:text-primary">Product</Link></li>
    //           <li onClick={handleNavToggle}><Link to="/services" class="text-lg text-gray-800 hover:text-primary">Services</Link></li>
    //           <li onClick={handleNavToggle}><Link to="/contact" class="text-lg text-gray-800 hover:text-primary">Contact</Link></li>
    //           <li onClick={handleNavToggle}><Link to="/faq" class="text-lg text-gray-800 hover:text-primary">FAQ</Link></li>
    //           <li onClick={handleNavToggle}>
    //             <button class="bg-transparent border-none text-gray-800 hover:text-primary p-2">
    //               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //                 <circle cx="11" cy="11" r="8"></circle>
    //                 <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    //               </svg>
    //             </button>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   )} */}
    // </header>
  );
}

export default App;
