import React, { useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


interface FormFields {
  name?: string;
  price?: number | null;
  condition?: string;
  brand?: string;
  year?: number | null;
  body?: string;
  axle?: number | null;
  mileage?: number | null;
  productionPeriod: string;
  engineType: string;
  model: string;
  color: string;
  transmissionType?: string;
  seatingCapacity?: number | null;
  engineCapacity?: number | null;
  warranty?: number | null; 
  description?: string; 
}

const UpdateProduct: React.FC = () => {
  const [loading,setLoading]=useState<boolean>(false);
  const [images, setImages] = useState<File[]>([]);
  const { id } = useParams<{ id: string }>();
  
  const initialState :FormFields = {
    name: '',
    price: null,
    condition: '',
    brand: '',
    year: null,
    body: '',
    axle: null,
    mileage: null,
    productionPeriod: '',
    engineType: '',
    model: '',
    color: '',
    transmissionType: '',
    seatingCapacity: null,
    engineCapacity: null,
    warranty: null,
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
    
    console.log('id in form : ',id);
    try {
      const response = await fetch(`http://localhost:4500/update-truck/${id}`, {
        method: 'POST',
        body: form,
      });
      if (!response.ok) {
        const message = await response.json();
        throw new Error(message.error || 'Failed to add product');
      }
      const result = await response.json();
      toast.success('Product Updated successfully!');
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
        <input type="text" name='name' value={formData.name || ''} onChange={handleInputChange} placeholder={`Name `} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="number" name='price' value={formData.price || ''} onChange={handleInputChange} placeholder={`Price `} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="text" name='condition' value={formData.condition || ''} onChange={handleInputChange} placeholder={`Condition new,used,damaged`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="text" name='brand' value={formData.brand || ''} onChange={handleInputChange} placeholder={`Brand `} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="number" name='year' value={formData.year || ''} onChange={handleInputChange} placeholder={`Year`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
            <input type="text" name='body' value={formData.body || ''} onChange={handleInputChange} placeholder={`Body`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="number" name='axle' value={formData.axle || ''} onChange={handleInputChange} placeholder={`Axle`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="number" name='mileage' value={formData.mileage || ''} onChange={handleInputChange} placeholder={`Mileage L /100Km`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="text" name='productionPeriod' value={formData.productionPeriod || ''} onChange={handleInputChange} placeholder={`Production Period`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="text" name='engineType' value={formData.engineType || ''} onChange={handleInputChange} placeholder={`Engine Type diesel,gasoline,electric,CNG`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="text" name='model' value={formData.model || ''} onChange={handleInputChange} placeholder={`Model`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="text" name='color' value={formData.color || ''} onChange={handleInputChange} placeholder={`Color`} required className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="text" name="transmissionType" value={formData.transmissionType || ''} onChange={handleInputChange} placeholder={`Transmission automatic,semiautomatic,manual`} className="w-full p-3 xs:px-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="number" name='seatingCapacity' value={formData.seatingCapacity || ''} onChange={handleInputChange} placeholder={`Seating Capacity`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="number" name='engineCapacity' value={formData.engineCapacity || ''} onChange={handleInputChange} placeholder={`Engine Capacity`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <input type="number" name='warranty' value={formData.warranty || ''} onChange={handleInputChange} placeholder={`Warranty`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <textarea name='description' value={formData.description || ''} onChange={handleInputChange} placeholder={`Description`} className="w-full p-3 my-2 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
        <div className="my-4">
          <label className="block mb-2 text-[#fff]">Add More Images</label>
          <input name='images' type="file" multiple onChange={handleImageChange} className="w-full p-3 my-2 rounded-md bg-blue-400 text-[#fff] focus:outline-none focus:ring-2 focus:ring-blue-300"/>
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
        <button type="submit" className="w-full p-3 bg-[#272A2B] text-[#fff] rounded-lg hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
