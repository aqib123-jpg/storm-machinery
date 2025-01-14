import React from 'react'
import ServicesDescription from '../components/ServicesDescription.tsx';
import ServicesAdvantages from '../components/ServicesAdvantages.tsx';
import ServicesProfessionalism from '../components/ServicesProfessionalist.tsx';
import BelowServicesProffessionalism from '../components/belowServicesProffessionalism.tsx';
import AboveFooter from '../components/AboveFooter.tsx';
import ServicesContactUs from '../components/ServicesContactUs.tsx';
import SalesTeam from '../components/SalesTeam.tsx';

const Services: React.FC = () => {
  console.log('inside the services tag');
  return (
    <>
      <ServicesDescription/>
      <ServicesAdvantages/>
      <ServicesProfessionalism/>
      <BelowServicesProffessionalism/>
      <SalesTeam/>
      <ServicesContactUs/>
      <AboveFooter/>
    </>
  )
}

export default Services;