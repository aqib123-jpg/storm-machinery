import React from 'react';
import { Link } from 'react-router-dom';

const FooterTop: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between items-start gap-6 p-8 md:p-5">
      <div className="w-full md:w-2/5 text-center md:text-left">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 font-playfair">STORM MACHINERY</h1>
        <p className="text-base text-[#4b4c4c] leading-relaxed font-inter">
          Our products cover all types of trucks and trailers, which are widely used in engineering
          construction, cargo transportation, and other fields. Whether it is heavy-load
          transportation or complex road conditions, our equipment can provide the best performance.
        </p>
      </div>

      <div className="w-full md:w-1/3 text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-4 font-playfair">STORM MACHINERY</h3>
        <ul className="space-y-4 text-[#4b4c4c] font-inter">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/product" className="hover:text-blue-500">Product</Link></li>
          <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
          <li><Link to="/faq" className="hover:text-blue-500">FAQ</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default FooterTop;
