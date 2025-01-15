import React, { useState } from "react";

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

const FAQPayment : React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  
  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      title: 'What payment methods do you accept?',
      content:
        'We accept multiple payment methods, including telegraphic transfer, letter of credit, and financing services for installment payments.',
    },
    {
      title: 'How are shipping costs calculated?',
      content:
        'Shipping costs are calculated based on the destination, type of truck, and desired speed of transport. We will provide a detailed quote.',
    },
    {
      title: 'How long does the export process usually take?',
      content:
        'From order confirmation to truck delivery, the entire process typically takes 4 to 6 weeks, depending on the destination and logistics arrangements.',
    },
    {
      title: 'How can I track my order?',
      content:
        'You will receive an order tracking number and can monitor the status of your truck shipment in real-time through our customer service system.',
    },
  ];

  return (
    <div className="my-20  p-8">
        <h1 className="text-3xl font-bold text-[#272a2b] mb-6 font-playfair">Common Questions About Payment and Transportation</h1>
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 rounded-lg lg:h-[100vh] flex items-center justify-center">
                <img src="/assests/FaqPayment.jpg" className="h-auto w-auto lg:h-full lg:w-full lg:object-cover rounded-lg" alt="White Truck" />
            </div>
            <div className="flex-1">
                <div>
                {faqs.map((faq, index) => (
                    <FAQItem key={index} title={faq.title} content={faq.content} isOpen={activeIndex === index} onToggle={() => toggleAnswer(index)} />
                ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default FAQPayment;
