import React from 'react';
import { FaFacebook, FaTimes, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col lg:flex-row lg:justify-between px-6 bg-background gap-y-4 py-5">
        <div className="text-lg text-gray-700 text-center">
                <p>&copy; 2024 Shondong Storm Machinery CO., LTD.</p>
        </div>
        <div className="flex gap-x-4 justify-end">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"><FaXTwitter size={24} /></a>
            <a href="https://instagram.com" target="_blank"  rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"><FaInstagram size={24} /></a>
        </div>
    </footer>
  );
};

export default Footer;
