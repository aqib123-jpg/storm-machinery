import React, { useState } from 'react'
import FormField from '../Contact/FormField.tsx'
import { useForm } from '../hooks/UseForm.tsx';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
  const { id } = useParams<{ id: string }>();
  const initialState = { name: "", email: "", whatsapp: "", message: "" };
  const { loading, formData, handleChange, handleSubmit } = useForm(
      initialState,
      'http://localhost:4500/api/update-user-data'
    );
  console.log('id : ',id);
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 bg-background">
      <h2 className="text-center text-3xl font-bold text-textColor-heading mb-6 font-playfair">UPDATE USER</h2>
      <form className="w-full max-w-md bg-background-form p-6 rounded-lg shadow-lg text-[#fff]" onSubmit={(e) => handleSubmit(e,id)}>
        <FormField id="name" name="name" value={formData.name} label="Name" placeholder="Update name" onChange={handleChange}/>
        <FormField id="email" name="email" type="email" value={formData.email} label="Email" placeholder="Update email" onChange={handleChange}/>
        <FormField id="whatsapp" name="whatsapp" value={formData.whatsapp} label="WhatsApp Number" placeholder="Update WhatsApp number" onChange={handleChange} />
        <FormField id="message" name="message" isTextArea value={formData.message} label="Message" placeholder="Update Message" onChange={handleChange} />
        {loading && <p className="text-center">Processing your request...</p>}
        <button type="submit" className="w-full p-3 bg-[#272A2B] text-[#fff] rounded-lg hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500">Send Message</button>
      </form>
    </div>
  )
}

export default UpdateUser;

// const AddUser = () => {
//   const initialState = { name: "", email: "", whatsapp: "", message: "" };
//   const { loading, formData, handleChange, handleSubmit } = useForm(
//       initialState,
//       "http://localhost:4500/send-mail"
//     );
//   return (
//     <div className="flex flex-col items-center justify-center px-4 py-12">
//       <h2 className="text-center text-3xl font-bold text-[#272a2b] mb-6 font-playfair">ADD USER</h2>
//       <form className="w-full max-w-md bg-blue-500 p-6 rounded-lg shadow-lg text-[#fff]" onSubmit={(e) => handleSubmit(e)}>
//         <FormField id="name" name="name" value={formData.name} label="Name" placeholder="Enter your name" required onChange={handleChange}/>
//         <FormField id="email" name="email" type="email" value={formData.email} label="Email" placeholder="Enter your email" required onChange={handleChange}/>
//         <FormField id="whatsapp" name="whatsapp" value={formData.whatsapp} label="WhatsApp Number" placeholder="Enter your WhatsApp number" required onChange={handleChange} />
//         <FormField id="message" name="message" isTextArea value={formData.message} label="Message" placeholder="What type of truck do you want?" required onChange={handleChange} />
//         {loading && <p className="text-center">Processing your request...</p>}
//         <button type="submit" className="w-full p-3 bg-[#272A2B] text-[#fff] rounded-lg hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500">Send Message</button>
//       </form>
//     </div>
//   )
// }
// export default AddUser