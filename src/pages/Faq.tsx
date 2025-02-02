import React from 'react'
import FaqDescription from '../components/Faq/FaqDescription.tsx';
import QuestionsAboutPurchasing from '../components/Faq/QuestionsAboutPurchasing.tsx';
import QuestionsAboutPayment from '../components/Faq/QuestionsAboutPayment.tsx';
import AboveFooter from '../components/Common_Pages/AboveFooter.tsx';

const Faq: React.FC = () => {
  return (
    <div className='bg-background'>
      <FaqDescription/>
      <QuestionsAboutPurchasing/>
      <QuestionsAboutPayment/>
      <AboveFooter/>
    </div>
  )
}

export default Faq