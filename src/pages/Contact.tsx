import React from 'react'
import ContactUsDescription from '../components/Contact/ContactUsDescription.tsx';
import ContactInformation from '../components/Contact/ContactInformation.tsx';
import ContactForm from '../components/Contact/ContactForm.tsx';
import AboveFooter from '../components/Common_Pages/AboveFooter.tsx';

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