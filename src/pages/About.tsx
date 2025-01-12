import React from 'react'
import AboutUsDescription from '../components/AboutUsDescription.tsx';
import OurAdvantages from '../components/OurAdvantages.tsx';
import SliderForBrands from '../components/SliderForBrands.tsx';
import HotSaleProducts from '../components/HotSaleProducts.tsx';
import AboveFooter from '../components/AboveFooter.tsx';


const About: React.FC = () => {
  console.log('inside the About tag');
  return (
    <>
      <AboutUsDescription/>
      <OurAdvantages/>
      <SliderForBrands/>
      <HotSaleProducts/>
      <AboveFooter/>
    </>
  )
}

export default About;