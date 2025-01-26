// import { useState } from "react";
// import { toast } from "react-toastify";

// export const useForm = (initialState: Record<string, string>, endpoint: string) => {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState(initialState);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const result = await response.json();
//       if (response.ok) {
//         if (result.message.includes("saved successfully")) {
//           toast.success("Email sent and user data stored successfully!");
//         } else if (result.message.includes("Email already exists")) {
//           toast.error("Email already exists in the database.");
//         }
//       } else {
//         toast.error(result.message || "Error sending email.");
//       }
//     } catch (error: any) {
//       toast.error("Error: " + (error?.message || error));
//     } finally {
//       setLoading(false);
//       setFormData(initialState);
//     }
//   };

//   return { loading, formData, handleChange, handleSubmit };
// };



import { useState } from "react";
import { toast } from "react-toastify";

export const useForm = (initialState: Record<string, string>,defaultEndpoint: string,defaultMethod: "POST" | "PUT" = "POST") => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, id?: string) => {
    e.preventDefault();
    setLoading(true);
    try {
      const endpoint = id ? `${defaultEndpoint}/${id}` : defaultEndpoint;
      const method = id ? "PUT" : defaultMethod;
      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        if (result.message.includes("saved successfully")) {
          toast.success("User added successfully!");
        } else if (result.message.includes("updated successfully")) {
          toast.success("User updated successfully!");
        } else if (result.message.includes("Email already exists")) {
          toast.error("Email already exists in the database.");
        }
      } else {
        toast.error(result.message || "Error processing the request.");
      }
    } catch (error: any) {
      toast.error("Error: " + (error?.message || error));
    } finally {
      setLoading(false);
      setFormData(initialState); // Reset form data after submit
    }
  };

  return { loading, formData, handleChange, handleSubmit };
};
