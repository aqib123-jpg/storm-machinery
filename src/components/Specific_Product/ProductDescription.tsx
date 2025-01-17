import React from "react";

interface DescriptionItem {
  title: string;
  content: string;
}

const ProductDescription: React.FC = () => {
  const descriptionData: DescriptionItem[] = [
    {
      title: "Powerful power system",
      content:
        "HOWO 6×4 dump trucks are usually equipped with high-performance engines that can provide sufficient horsepower and torque to ensure that the vehicle can easily cope with various road conditions, including steep slopes and soft ground, even when fully loaded.",
    },
    {
      title: "Strong body structure",
      content:
        "The body of this model is made of high-strength steel, which has excellent impact resistance and fatigue resistance. Its dump mechanism is scientifically designed to complete the unloading work quickly and efficiently, reducing the operation time.",
    },
    {
      title: "Excellent suspension system",
      content:
        "In order to adapt to different road conditions and improve driving comfort, HOWO 6×4 dump trucks are equipped with advanced suspension systems. This system can effectively absorb vibrations during driving, reduce wear and tear on the vehicle, and improve driving stability.",
    },
    {
      title: "Safe and reliable braking system",
      content:
        "Safety is the top priority in the design of dump trucks. HOWO 6×4 dump trucks are equipped with efficient braking systems, including service brakes, parking brakes, and emergency brake systems, to ensure safe braking in various situations.",
    },
    {
      title: "Comfortable cab",
      content:
        "The cab design focuses on the driver’s comfort and ease of operation. The spacious interior is equipped with adjustable seats, sufficient storage space, and easy-to-read dashboards to provide a comfortable working environment for the driver.",
    },
    {
      title: "Environmental protection and energy saving",
      content:
        "With the increasingly stringent environmental regulations, the HOWO 6×4 dump truck is also designed with environmental protection and energy saving in mind. By optimizing engine combustion efficiency and improving fuel utilization, emissions are reduced, meeting current environmental standards.",
    },
  ];

  return (
    <div className="p-5 md:p-10 leading-relaxed font-sans">
      <h1 className="text-3xl font-bold font-playfair mb-5 text-[#272a2b]">Description</h1>
      {descriptionData.map((item, index) => (
        <div key={index} className="mb-4 font-inter">
          <strong className="text-lg text-[#4b5563] font-semibold">{item.title}: </strong>
          <span className="text-base text-[#374151] leading-relaxed">{item.content}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductDescription;
