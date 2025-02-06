import React, { useState } from 'react';
import ProductDescription from './ProductDescription.tsx';
import AdditionalInformation from './AdditionalInformation.tsx';

interface TabProps {
  label: string;
  value: string;
  isActive: boolean;
  onClick: (value: string) => void;
}

const Tab: React.FC<TabProps> = ({ label, value, isActive, onClick }) => (
  <span onClick={() => onClick(value)} className={`font-inter cursor-pointer text-base font-bold px-2 py-1 ${isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-textColor-heading'}`}>{label}</span>
);

const TabbedContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('description');
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex justify-center items-center gap-10 border-b border-gray-300 mx-auto my-8">
        <Tab label="Description" value="description" isActive={activeTab === 'description'} onClick={handleTabClick}/>
        <Tab label="Additional Information" value="additionalInfo" isActive={activeTab === 'additionalInfo'} onClick={handleTabClick}/>
      </div>
      {activeTab == 'description' && <ProductDescription/>}
      {activeTab == 'additionalInfo' && <AdditionalInformation/>}
    </>
  );
};

export default TabbedContainer;
