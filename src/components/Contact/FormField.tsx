import React from "react";

interface FormFieldProps {
  id: string;
  name: string;
  type?: string;
  value: string;
  placeholder: string;
  label: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextArea?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({id,name,type = "text",value,placeholder,label,required = false,onChange,isTextArea = false,}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-2 font-inter">{label} {required && <span className="text-red-500 font-bold"> *</span>}</label>
      {isTextArea ? (
        <textarea id={id} name={name} value={value} placeholder={placeholder} required={required} onChange={onChange} className="w-full p-3 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
      ) : (
        <input type={type} id={id} name={name} value={value} placeholder={placeholder} required={required} onChange={onChange} className="w-full p-3 rounded-md bg-blue-400 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
      )}
    </div>
  );
};

export default FormField;
