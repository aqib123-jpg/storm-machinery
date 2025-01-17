import React from 'react'

const ContactForm:React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4  my-20">
        <h2 className="text-center text-3xl font-bold text-[#272a2b] mb-6 font-playfair">PLEASE CONTACT US</h2>
        <form className="w-full max-w-md bg-blue-500 p-6 rounded-lg shadow-lg">
            <label htmlFor="name" className="block text-[#fff] font-inter mb-2">Your Name <span className='text-red-500 font-bold'>*</span></label>
            <input type="text" id="name" name="name" required className="w-full p-3 rounded-lg bg-blue-400 text-white placeholder-blue-200 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Enter your name"/>
            <label htmlFor="email" className="block text-[#fff] font-inter mb-2">Email <span className='text-red-500 font-bold'>*</span></label>
            <input type="email" name="email" required className="w-full p-3 rounded-lg bg-blue-400 text-white placeholder-blue-200 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Enter your email"/>
            <label htmlFor="whatsappNumber" className="block text-[#fff] font-inter mb-2">WhatsApp Number <span className='text-red-500 font-bold'>*</span></label>
            <input type="text" id="whatsappNumber" name="whatsappNumber" required className="w-full p-3 rounded-lg bg-blue-400 text-white placeholder-blue-200 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Enter your WhatsApp number"/>
            <label htmlFor="message" className="block text-[#fff] font-inter mb-2">Message <span className='text-red-500 font-bold'>*</span></label>
            <input type="text" id="message" name="message" required className="w-full p-3 rounded-lg bg-blue-400 text-white placeholder-blue-200 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="What type of truck do you want?"/>
            <button type="submit" className="font-inter w-full p-3 bg-[#272A2B] text-[#fff] rounded-lg hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500">Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm