import React from 'react'
import Description from '../components/Home/Description.tsx';
import Refurbishment from '../components/Home/Refurbishment.tsx';
import HotSaleProducts from '../components/Common_Pages/HotSaleProducts.tsx';
import AboutTruckTransportation from '../components/Home/AboutTruckTransportation.tsx';
import ContactUs from '../components/Home/ContactUs.tsx';
import AboveFooter from '../components/Common_Pages/AboveFooter.tsx';

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