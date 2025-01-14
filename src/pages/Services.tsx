import React from 'react'
import ServicesDescription from '../components/ServicesDescription.tsx';
import ServicesAdvantages from '../components/ServicesAdvantages.tsx';
import ServicesProfessionalism from '../components/ServicesProfessionalist.tsx';
import BelowServicesProffessionalism from '../components/belowServicesProffessionalism.tsx';

const Services: React.FC = () => {
  console.log('inside the services tag');
  return (
    <>
      <ServicesDescription/>
      <ServicesAdvantages/>
      <ServicesProfessionalism/>
      <BelowServicesProffessionalism/>
    </>
  )
}

export default Services;