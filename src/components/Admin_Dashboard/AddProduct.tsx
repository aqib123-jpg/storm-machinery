// import React, { useState } from 'react'

// const AddProduct = () => {
//   const required = {
//     'name' : false,
//     'price' : false,
//     'condition' : true,
//     'brand' : true,
//     'year' : true,
//     'body' : true,
//     'axle' : true,
//     'mileage' : true,
//     'productionPeriod' : true,
//     'engineType' : true,
//     'model' : true,
//     'color' : true,
//     'transmissionType' : false,
//     'seatingCapacity' : false,
//     'engineCapacity' : false,
//     'warranty' : false,
//   }
//   return (
//     <div className="flex flex-col items-center justify-center px-4 py-12">
//       <h2 className="text-center text-3xl font-bold text-[#272a2b] mb-6 font-playfair">Add Product</h2>
//       <form className="w-full max-w-md bg-blue-500 p-6 rounded-lg shadow-lg text-[#fff]">
//         <input type='text' placeholder={`Name ${(required.name) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type='text' placeholder={`Price ${(required.price) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type='text' placeholder={`Condition ${(required.condition) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type='text' placeholder={`Brand ${(required.brand) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type='text' placeholder={`Year ${(required.year) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type='text' placeholder={`Body ${(required.body) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type='text' placeholder={`Axle ${(required.axle) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type='text' placeholder={`Mileage ${(required.mileage) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type='text' placeholder={`Production Period ${(required.productionPeriod) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type='text' placeholder={`Engine Type ${(required.engineType) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type='text' placeholder={`Model ${(required.model) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type='text' placeholder={`Color ${(required.color) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type='text' placeholder={`Transmission  Type ${(required.transmissionType) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type='text' placeholder={`Seating Capacity ${(required.seatingCapacity) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type='text' placeholder={`Engine Capacity ${(required.engineCapacity) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type='text' placeholder={`Warranty ${(required.warranty) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//       </form>
//     </div>
//   )
// }
// export default AddProduct



//important


// import React, { useState, ChangeEvent } from 'react';

// interface RequiredFields {
//   [key: string]: boolean;
// }

// const AddProduct: React.FC = () => {
//   const required: RequiredFields = {'name': false,'price': false,'condition': true,'brand': true,'year': true,'body': true,'axle': true,'mileage': true,'productionPeriod': true,'engineType': true,'model': true,'color': true,'transmissionType': false,'seatingCapacity': false,'engineCapacity': false,'warranty': false,'description': false,};
//   const [loading,setLoading]=useState<boolean>(false);
//   const [images, setImages] = useState<File[]>([]);

//   const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     const files = e.target.files;
//     if (files) {
//       setImages((prevImages) => [...prevImages, ...Array.from(files)]); 
//     }
//   };
//   const handleRemoveImage = (index: number): void => {
//     setImages((prevImages) => prevImages.filter((_, i) => i !== index));
//   };
//   const sendData = (e : React.FormEvent<HTMLFormElement>) : void =>  {
//     e.preventDefault();
//     setLoading(true);
//   }

//   return (
//     <div className="flex flex-col items-center justify-center px-4 py-12">
//       <h2 className="text-center text-3xl font-bold text-[#272a2b] mb-6 font-playfair">Add Product</h2>
//       <form className="w-full max-w-md bg-blue-500 p-6 rounded-lg shadow-lg text-[#fff]" onSubmit={(e) => sendData(e)}>
//         <input type="text" name='name' placeholder={`Name ${(required.name) ? '*' : ''}`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type="text" name='price' placeholder={`Price ${(required.price) ? '*' : ''}`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type="text" name='condition' placeholder={`Condition ${(required.condition) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type="text" name='brand' placeholder={`Brand ${(required.brand) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type="text" name='year' placeholder={`Year ${(required.year) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type="text" name='body' placeholder={`Body ${(required.body) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type="text" name='axle' placeholder={`Axle ${(required.axle) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type="text" name='mileage' placeholder={`Mileage ${(required.mileage) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type="text" name='production period' placeholder={`Production Period ${(required.productionPeriod) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type="text" name='engine type' placeholder={`Engine Type ${(required.engineType) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type="text" name='model' placeholder={`Model ${(required.model) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type="text" name='color' placeholder={`Color ${(required.color) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type="text" name='transmission type' placeholder={`Transmission Type ${(required.transmissionType) ? '*' : ''}`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type="text" name='seating capacity' placeholder={`Seating Capacity ${(required.seatingCapacity) ? '*' : ''}`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type="text" name='engine capacity' placeholder={`Engine Capacity ${(required.engineCapacity) ? '*' : ''}`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <input type="text" name='warranty' placeholder={`Warranty ${(required.warranty) ? '*' : ''}`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <textarea name='description' placeholder={`Description ${(required.description) ? '*' : ''}`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         <div className="my-4">
//           <label className="block mb-2 text-[#fff]">Upload Product Images</label>
//           <input type="file" multiple required onChange={handleImageChange} className="w-full p-3 my-2 rounded-md bg-blue-400 text-[#fff] focus:outline-none focus:ring-2 focus:ring-blue-300"/>
//         </div>
//         {images.length > 0 && (
//           <div className="mt-4 text-[#fff]">
//             <h3>Selected Images:</h3>
//             <ul className="list-disc pl-4">
//               {images.map((image, index) => (
//                 <li key={index} className="flex items-center justify-between"> 
//                   <span>{image.name}</span>
//                   <button onClick={() => handleRemoveImage(index)} className="ml-4 text-red-500 hover:text-red-700 focus:outline-none">✖</button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {loading && <p className="text-center">Processing your request...</p>}
//         <button type="submit" className="w-full p-3 bg-[#272A2B] text-[#fff] rounded-lg hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;


//important





import React, { useState, ChangeEvent } from 'react';
import { toast } from 'react-toastify';

interface RequiredFields {
  [key: string]: boolean;
}
interface FormFields {
  name?: string;
  price?: string;
  condition: string;
  brand: string;
  year: string;
  body: string;
  axle: string;
  mileage: string;
  productionPeriod: string;
  engineType: string;
  model: string;
  color: string;
  transmissionType?: string;
  seatingCapacity?: string;
  engineCapacity?: string;
  warranty?: string; 
  description?: string; 
}

const AddProduct: React.FC = () => {
  const required: RequiredFields = {'name': false,'price': false,'condition': true,'brand': true,'year': true,'body': true,'axle': true,'mileage': true,'productionPeriod': true,'engineType': true,'model': true,'color': true,'transmissionType': false,'seatingCapacity': false,'engineCapacity': false,'warranty': false,'description': false,};
  const [loading,setLoading]=useState<boolean>(false);
  const [images, setImages] = useState<File[]>([]);
  const initialState :FormFields = {
    name: '',
    price: '',
    condition: '',
    brand: '',
    year: '',
    body: '',
    axle: '',
    mileage: '',
    productionPeriod: '',
    engineType: '',
    model: '',
    color: '',
    transmissionType: '',
    seatingCapacity: '',
    engineCapacity: '',
    warranty: '',
    description: '',
  };
  const [formData, setFormData] = useState<FormFields>(initialState);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (files) {
      setImages((prevImages) => [...prevImages, ...Array.from(files)]); 
    }
  };
  const handleRemoveImage = (index: number): void => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  
  
  
  const sendData = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => form.append(key, value));
    images.forEach((image, index) => form.append('images', image));
    // form.forEach((value, key) => {
    //   console.log(`${key}: ${value}`);
    // });
    
    try {
      const response = await fetch('http://localhost:4500/add-truck', {
        method: 'POST',
        body: form,
      });

      if (!response.ok) {
        const message = await response.json();
        throw new Error(message.error || 'Failed to add product');
      }
      const result = await response.json();
      toast.success('Product added successfully!');
      console.log(result);
      setFormData(initialState);
      setImages([]);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };





  return (
    <div className="flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-center text-3xl font-bold text-[#272a2b] mb-6 font-playfair">Add Product</h2>
      <form className="w-full max-w-md bg-blue-500 p-6 rounded-lg shadow-lg text-[#fff]" onSubmit={(e) => sendData(e)} encType="multipart/form-data">
        <input type="text" name='name' value={formData.name || ''} onChange={handleInputChange} placeholder={`Name ${(required.name) ? '*' : ''}`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="number" name='price' value={formData.price || ''} onChange={handleInputChange} placeholder={`Price ${(required.price) ? '*' : ''}`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="text" name='condition' value={formData.condition || ''} onChange={handleInputChange} placeholder={`Condition ${(required.condition) ? '*' : ''} new,used,damaged`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="text" name='brand' value={formData.brand || ''} onChange={handleInputChange} placeholder={`Brand ${(required.brand) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="number" name='year' value={formData.year || ''} onChange={handleInputChange} placeholder={`Year ${(required.year) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="text" name='body' value={formData.body || ''} onChange={handleInputChange} placeholder={`Body ${(required.body) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="number" name='axle' value={formData.axle || ''} onChange={handleInputChange} placeholder={`Axle ${(required.axle) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="number" name='mileage' value={formData.mileage || ''} onChange={handleInputChange} placeholder={`Mileage ${(required.mileage) ? '*' : ''} L /100Km`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="text" name='productionPeriod' value={formData.productionPeriod || ''} onChange={handleInputChange} placeholder={`Production Period ${(required.productionPeriod) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="text" name='engineType' value={formData.engineType || ''} onChange={handleInputChange} placeholder={`Engine Type ${(required.engineType) ? '*' : ''} diesel,gasoline,electric,CNG`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="text" name='model' value={formData.model || ''} onChange={handleInputChange} placeholder={`Model ${(required.model) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="text" name='color' value={formData.color || ''} onChange={handleInputChange} placeholder={`Color ${(required.color) ? '*' : ''}`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        {/* <input type="text" name='transmissionType' value={formData.transmissionType || ''} onChange={handleInputChange} placeholder={`Transmission ${(required.transmissionType) ? '*' : ''}automatic,semiautomatic,manual`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/> */}
        <input
          type="text"
          name="transmissionType"
          value={formData.transmissionType || ''}
          onChange={handleInputChange}
          placeholder={`Transmission ${(required.transmissionType) ? '*' : ''}automatic,semiautomatic,manual`}
          className="w-full p-3 xs:px-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />




        <input type="number" name='seatingCapacity' value={formData.seatingCapacity || ''} onChange={handleInputChange} placeholder={`Seating Capacity ${(required.seatingCapacity) ? '*' : ''}`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="number" name='engineCapacity' value={formData.engineCapacity || ''} onChange={handleInputChange} placeholder={`Engine Capacity ${(required.engineCapacity) ? '*' : ''}`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="number" name='warranty' value={formData.warranty || ''} onChange={handleInputChange} placeholder={`Warranty ${(required.warranty) ? '*' : ''}`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <textarea name='description' value={formData.description || ''} onChange={handleInputChange} placeholder={`Description ${(required.description) ? '*' : ''}`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <div className="my-4">
          <label className="block mb-2 text-[#fff]">Upload Product Images</label>
          <input name='images' type="file" multiple required onChange={handleImageChange} className="w-full p-3 my-2 rounded-md bg-blue-400 text-[#fff] focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        </div>
        {images.length > 0 && (
          <div className="mt-4 text-[#fff]">
            <h3>Selected Images:</h3>
            <ul className="list-disc pl-4">
              {images.map((image, index) => (
                <li key={index} className="flex items-center justify-between"> 
                  <span>{image.name}</span>
                  <button onClick={() => handleRemoveImage(index)} className="ml-4 text-red-500 hover:text-red-700 focus:outline-none">✖</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {loading && <p className="text-center">Processing your request...</p>}
        <button type="submit" className="w-full p-3 bg-[#272A2B] text-[#fff] rounded-lg hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;





