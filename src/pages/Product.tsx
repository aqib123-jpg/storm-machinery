import React from 'react'
import CardComponent from '../components/Product/CardComponent.tsx';
import AboveFooter from '../components/Common_Pages/AboveFooter.tsx';

const Product: React.FC = () => {
  return (
    <div className='bg-background-default'>
      <CardComponent/>
      <AboveFooter/>
    </div>
  )
}

export default Product;