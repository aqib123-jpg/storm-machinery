import React,{useState} from 'react'
import { toast } from 'react-toastify';
import { FormEvent } from 'react';
import { formDataType } from '../../types.ts';
import { useForm } from '../hooks/UseForm.tsx';
import FormField from './FormField.tsx';

const ContactForm:React.FC = () => {
    // const [loading,updateLoading]=useState<boolean>(false);
    // const [formData,setFormData]=useState<formDataType>({
    //   name     : '',
    //   email    : '',
    //   whatsapp : '',
    //   message  : ''
    // });
  
  
    // const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //   const { name, value } = e.target;
    //   setFormData((prevFormData) => ({
    //     ...prevFormData,
    //     [name]: value,
    //   }));
    // };
  
    // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    //   e.preventDefault();
      
    //   updateLoading(true);  
    //   try {
    //     console.log('will send request soon');
    //     const response = await fetch("http://localhost:4500/send-mail", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     });
    
    //     if (response.ok) {
    //       toast.success("Email sent successfully!");
    //     } else {
    //       toast.error("Error sending email.");
    //     }
    //   } catch (error: any) {  
    //     toast.error("Error: " + (error?.message || error));
    //   } finally {
    //     updateLoading(false);
    //     setFormData({
    //       name: "",
    //       whatsapp: "",
    //       email: "",
    //       message: "",
    //     });
    //   }
    // };
  const initialState = { name: "", email: "", whatsapp: "", message: "" };
  const { loading, formData, handleChange, handleSubmit } = useForm(
    initialState,
    "http://localhost:4500/send-mail"
  );
  return (
    // <div className="flex flex-col items-center justify-center py-10 px-4  my-20">
    //     <h2 className="text-center text-3xl font-bold text-[#272a2b] mb-6 font-playfair">PLEASE CONTACT US</h2>
    //     <form className="w-full max-w-md bg-blue-500 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
    //         <label htmlFor="name" className="block text-[#fff] font-inter mb-2">Your Name <span className='text-red-500 font-bold'>*</span></label>
    //         <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full p-3 rounded-lg bg-blue-400 text-white placeholder-blue-200 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Enter your name"/>
    //         <label htmlFor="email" className="block text-[#fff] font-inter mb-2">Email <span className='text-red-500 font-bold'>*</span></label>
    //         <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full p-3 rounded-lg bg-blue-400 text-white placeholder-blue-200 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Enter your email"/>
    //         <label htmlFor="whatsappNumber" className="block text-[#fff] font-inter mb-2">WhatsApp Number <span className='text-red-500 font-bold'>*</span></label>
    //         <input type="text" id="whatsapp" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} className="w-full p-3 rounded-lg bg-blue-400 text-white placeholder-blue-200 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Enter your WhatsApp number"/>
    //         <label htmlFor="message" className="block text-[#fff] font-inter mb-2">Message <span className='text-red-500 font-bold'>*</span></label>
    //         <input type="text" id="message" name="message" required value={formData.message} onChange={handleChange} className="w-full p-3 rounded-lg bg-blue-400 text-white placeholder-blue-200 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="What type of truck do you want?"/>
    //         {loading && <p className="text-center">Processing your request...</p>}
    //         <button type="submit" className="font-inter w-full p-3 bg-[#272A2B] text-[#fff] rounded-lg hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500">Send Message</button>
    //     </form>
    // </div>


    <div className="flex flex-col items-center justify-center py-10 px-4 my-20">
      <h2 className="text-center text-3xl font-bold text-[#272a2b] mb-6 font-playfair">PLEASE CONTACT US</h2>
      <form className="w-full max-w-md bg-background-form p-6 rounded-lg shadow-lg text-[#fff]" onSubmit={handleSubmit}>
        <FormField id="name" name="name" value={formData.name} label="Your Name" placeholder="Enter your name" required onChange={handleChange}/>
        <FormField id="email" name="email" type="email" value={formData.email} label="Email" placeholder="Enter your email" required onChange={handleChange}/>
        <FormField id="whatsapp" name="whatsapp" value={formData.whatsapp} label="WhatsApp Number" placeholder="Enter your WhatsApp number" required onChange={handleChange} />
        <FormField id="message" name="message" isTextArea value={formData.message} label="Message" placeholder="What type of truck do you want?" required onChange={handleChange} />
        {loading && <p className="text-center">Processing your request...</p>}
        <button type="submit" className="w-full p-3 bg-[#272A2B] text-[#fff] rounded-lg hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500">Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm