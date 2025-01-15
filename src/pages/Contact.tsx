import React from 'react'
import ContactUsDescription from '../components/ContactUsDescription.tsx';
import ContactInformation from '../components/ContactInformation.tsx';
import ContactForm from '../components/ContactForm.tsx';
import AboveFooter from '../components/AboveFooter.tsx';

const Contact: React.FC = () => {
  console.log('inside the contact tag');
  return (
    <>
      <ContactUsDescription/>
      <ContactInformation/>
      <ContactForm/>
      <AboveFooter/>
    </>
  )
}

export default Contact;