import React from 'react'
import Description from '../components/Description.tsx';
import Refurbishment from '../components/Refurbishment.tsx';
import HotSaleProducts from '../components/HotSaleProducts.tsx';
import AboutTruckTransportation from '../components/AboutTruckTransportation.tsx';
import ContactUs from '../components/ContactUs.tsx';
import AboveFooter from '../components/AboveFooter.tsx';

const Home: React.FC = () => {
  return (
    <>
      <Description/>
      <Refurbishment/>
      <HotSaleProducts/>
      <AboutTruckTransportation/>
      <ContactUs/>
      <AboveFooter/>
    </>
  )
}

export default Home;