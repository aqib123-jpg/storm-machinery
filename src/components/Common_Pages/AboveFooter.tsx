import React from 'react';
import { Link,NavLink } from 'react-router-dom';

const FooterTop: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between items-start gap-6 p-8 md:p-5">
      <div className="w-full md:w-2/5 text-center md:text-left">
        <h1 className="text-5xl font-bold text-textColor-heading mb-4 font-playfair">STORM MACHINERY</h1>
        <p className="text-base text-textColor-default leading-relaxed font-inter">
          Our products cover all types of trucks and trailers, which are widely used in engineering
          construction, cargo transportation, and other fields. Whether it is heavy-load
          transportation or complex road conditions, our equipment can provide the best performance.
        </p>
      </div>

      <div className="w-full md:w-1/3 text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-4 font-playfair text-textColor-heading">STORM MACHINERY</h3>
        <ul className="space-y-4 font-inter">
          <li><NavLink to='/' className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-textColor-subheading transition duration-300' }>Home</NavLink></li>
          {/* <li><Link to="/" className="hover:text-blue-500">Home</Link></li> */}
          <li><NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-textColor-subheading transition duration-300' }>About</NavLink></li>
          <li><NavLink to="/product" className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-textColor-subheading transition duration-300' }>Product</NavLink></li>
          <li><NavLink to="/services" className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-textColor-subheading transition duration-300' }>Services</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-textColor-subheading transition duration-300' }>Contact</NavLink></li>
          <li><NavLink to="/faq" className={({isActive}) => isActive ? 'text-blue-500 font-bold' : 'text-textColor-subheading transition duration-300' }>FAQ</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default FooterTop;
