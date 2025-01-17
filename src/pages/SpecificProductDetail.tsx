import React from 'react'
import ProductAdditionalInfo from '../components/Specific_Product/ProductAdditionalInfo.tsx'
import DescriptionAndAdditionalInfo from '../components/Specific_Product//DescriptionAndAdditionalInfo.tsx'
import RelatedProducts from '../components/Specific_Product/RelatedProducts.tsx'
import AboveFooter from '../components/Common_Pages/AboveFooter.tsx'

const SpecificProductDetail = () => {
  return (
    <>
      <ProductAdditionalInfo/>  
      <DescriptionAndAdditionalInfo/>
      <RelatedProducts/>
      <AboveFooter/>
    </>
  )
}

export default SpecificProductDetail