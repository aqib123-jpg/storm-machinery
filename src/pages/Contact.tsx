import React from 'react'
import ContactUsDescription from '../components/Contact/ContactUsDescription.tsx';
import ContactInformation from '../components/Contact/ContactInformation.tsx';
import ContactForm from '../components/Contact/ContactForm.tsx';
import AboveFooter from '../components/Common_Pages/AboveFooter.tsx';

const Contact: React.FC = () => {
  console.log('inside the contact tag');
  return (
    <div className='bg-background-default'>
      <ContactUsDescription/>
      <ContactInformation/>
      <ContactForm/>
      <AboveFooter/>
    </div>
  )
}

export default Contact;