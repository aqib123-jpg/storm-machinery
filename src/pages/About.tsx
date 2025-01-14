import React from 'react'
import AboutUsDescription from '../components/AboutUsDescription.tsx';
import OurAdvantages from '../components/OurAdvantages.tsx';
import SliderForBrands from '../components/SliderForBrands.tsx';
import HotSaleProducts from '../components/HotSaleProducts.tsx';
import AboveFooter from '../components/AboveFooter.tsx';
import Professionalism from '../components/Professionalism.tsx';


const About: React.FC = () => {
  console.log('inside the About tag');
  return (
    <>
      <AboutUsDescription/>
      <OurAdvantages/>
      <SliderForBrands/>
      <Professionalism/>
      <HotSaleProducts/>
      <AboveFooter/>
    </>
  )
}

export default About;