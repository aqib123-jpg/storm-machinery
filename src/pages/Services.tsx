import React from 'react'
import ServicesDescription from '../components/Services/ServicesDescription.tsx';
import ServicesAdvantages from '../components/Services/ServicesAdvantages.tsx';
import ServicesProfessionalism from '../components/Services/ServicesProfessionalist.tsx';
import BelowServicesProffessionalism from '../components/Services/belowServicesProffessionalism.tsx';
import AboveFooter from '../components/Common_Pages/AboveFooter.tsx';
import ServicesContactUs from '../components/Services/ServicesContactUs.tsx';
import SalesTeam from '../components/Services/SalesTeam.tsx';

const Services: React.FC = () => {
  //console.log('inside the services tag');
  return (
    <div className='bg-background'>
      <ServicesDescription/>
      <ServicesAdvantages/>
      <ServicesProfessionalism/>
      <BelowServicesProffessionalism/>
      <SalesTeam/>
      <ServicesContactUs/>
      <AboveFooter/>
    </div>
  )
}

export default Services;