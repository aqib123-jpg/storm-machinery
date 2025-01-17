import React from 'react'
import FaqDescription from '../components/Faq/FaqDescription.tsx';
import QuestionsAboutPurchasing from '../components/Faq/QuestionsAboutPurchasing.tsx';
import QuestionsAboutPayment from '../components/Faq/QuestionsAboutPayment.tsx';
import AboveFooter from '../components/Common_Pages/AboveFooter.tsx';

const Faq: React.FC = () => {
  return (
    <>
      <FaqDescription/>
      <QuestionsAboutPurchasing/>
      <QuestionsAboutPayment/>
      <AboveFooter/>
    </>
  )
}

export default Faq