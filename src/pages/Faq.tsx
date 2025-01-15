import React from 'react'
import FaqDescription from '../components/FaqDescription.tsx';
import QuestionsAboutPurchasing from '../components/QuestionsAboutPurchasing.tsx';
import QuestionsAboutPayment from '../components/QuestionsAboutPayment.tsx';
import AboveFooter from '../components/AboveFooter.tsx';

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