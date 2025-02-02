import React, { useState,FormEvent } from "react";
import { toast } from "react-toastify";
import { formDataType } from "../../types.ts";
import { useForm } from "../hooks/UseForm.tsx";
import FormField from "../Contact/FormField.tsx";

interface FAQItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="py-4 sm:px-3 border-b border-gray-300 font-inter">
      <h2 onClick={onToggle} className="text-lg flex items-center cursor-pointer text-[#272A2B] ">
        {isOpen ? "➖" : "➕"} 
        <span className="ml-2 text-[#272a2b] hover:text-[#2596be]">{title}</span>
      </h2>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="mt-2 text-[#4b4c4c]">{content}</p>
      </div>
    </div>
  );
};

const FAQPurchasing: React.FC = () => {
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

  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  
  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      title: "How is the quality of the trucks assured?",
      content:
        "All our used trucks undergo rigorous quality inspection and certification before sale to ensure they meet international export standards.",
    },
    {
      title: "What types of trucks are available?",
      content:
        "We offer a variety of used trucks including light, medium, and heavy-duty models to satisfy different transportation needs.",
    },
    {
      title: "What is the purchase process?",
      content:
        "The purchasing process includes consultation on requirements, selection of vehicle, quality inspection, price negotiation, contract signing, payment arrangement, and logistics transportation.",
    },
    {
      title: "Do you provide after-sales service?",
      content:
        "Yes, we offer comprehensive after-sales service, including warranty, technical support, and parts supply.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 my-20">
      <div className="flex-[7]">
        <h1 className="text-3xl font-bold text-[#272a2b] mb-6 font-playfair">Common Questions About Purchasing Used Trucks</h1>
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} title={faq.title} content={faq.content} isOpen={activeIndex === index} onToggle={() => toggleAnswer(index)} />
          ))}
        </div>
      </div>

      <div className="flex-[3] max-w-lg mx-auto">
      <form className="bg-background-form text-[#fff] p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4 font-playfair">If you are interested, please contact us</h2>
        <FormField id="name" name="name" value={formData.name} label="Name" placeholder="Enter your name" required onChange={handleChange} />
        <FormField id="email" name="email" type="email" value={formData.email} label="Email" placeholder="Enter your email" required onChange={handleChange} />
        <FormField id="whatsapp" name="whatsapp" value={formData.whatsapp} label="WhatsApp" placeholder="Enter your WhatsApp number" required onChange={handleChange} />
        <FormField id="message" name="message" isTextArea value={formData.message} label="Message" placeholder="What type of truck do you want?" required onChange={handleChange} />
        {loading && <p className="text-center">Processing your request...</p>}
        <button type="submit" className="w-full p-3 bg-[#272A2B] text-[#fff] rounded-lg hover:bg-gray-700 transition font-inter">Send Message</button>
      </form>
    </div>
      
      {/* <div className="flex-[3] max-w-lg mx-auto ">
        <form className="bg-[#2596BE] text-[#fff] p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold mb-4 font-playfair">If you are interested, please contact us</h2>
          <label htmlFor="name" className="block mb-2 font-inter">Name <span className="text-red-500 font-bold"> *</span></label>
          <input type="text" name="name" id="name" required value={formData.name} className="w-full p-3 rounded-md bg-blue-400 placeholder-blue-200 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Enter your name" onChange={handleChange}/>

          <label htmlFor="name" className="block mb-2 font-inter">Email <span className="text-red-500 font-bold"> *</span></label>
          <input type="email" name="email" id="email" required value={formData.email} className="w-full p-3 rounded-md bg-blue-400 placeholder-blue-200 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Enter your email" onChange={handleChange}/>

          <label htmlFor="whatsapp" className="block mb-2 font-inter">WhatsApp <span className="text-red-500 font-bold"> *</span></label>
          <input type="text" name="whatsapp" id="whatsapp" required value={formData.whatsapp} className="w-full p-3 rounded-md bg-blue-400 placeholder-blue-200 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Enter your WhatsApp number" onChange={handleChange}/>
          <label htmlFor="message" className="block mb-2 font-inter">Message <span className="text-red-500 font-bold"> *</span></label>
          <textarea id="message" name="message" required value={formData.message} className="w-full p-3 rounded-md bg-blue-400 placeholder-blue-200 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="What type of truck do you want?" onChange={handleChange}/>
          {loading && <p className="text-center">Processing your request...</p>}
          <button type="submit" className="w-full p-3 bg-[#272A2B] rounded-md hover:bg-gray-700 transition font-inter">Send Message</button>
        </form>
      </div> */}
    </div>
  );
};

export default FAQPurchasing;
