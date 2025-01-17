import React from "react";

interface InfoItem {
  label: string;
  value: string;
}

const AdditionalInfo: React.FC = () => {
  const info: InfoItem[] = [
    { label: 'Weight', value: '14800 kg' },
    { label: 'Dimensions', value: '1160 × 250 × 320 cm' },
    { label: 'Color', value: 'customized' },
  ];

  return (
    <div className="w-full mx-auto p-5 md:p-10 font-sans">
      <h2 className="text-3xl font-bold mb-5 text-[#272a2b] font-playfair">Additional Information</h2>
      <table className="w-full border-collapse">
        <tbody>
          {info.map((item, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="w-1/4 p-2 text-base font-inter font-bold text-left text-[#4b4c4c]">{item.label}</td>
              <td className="w-3/4 p-2 text-left text-[#4b4c4c] text-base font-inter">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdditionalInfo;
