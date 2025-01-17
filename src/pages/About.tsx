import React from 'react'
import AboutUsDescription from '../components/About/AboutUsDescription.tsx';
import OurAdvantages from '../components/About/OurAdvantages.tsx';
import SliderForBrands from '../components/About/SliderForBrands.tsx';
import HotSaleProducts from '../components/Common_Pages/HotSaleProducts.tsx';
import AboveFooter from '../components/Common_Pages/AboveFooter.tsx';
import Professionalism from '../components/About/Professionalism.tsx';


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