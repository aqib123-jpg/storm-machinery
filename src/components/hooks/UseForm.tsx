import { useState } from "react";
import { toast } from "react-toastify";

export const useForm = (initialState: Record<string, string>, endpoint: string) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Email sent successfully!");
      } else {
        toast.error("Error sending email.");
      }
    } catch (error: any) {
      toast.error("Error: " + (error?.message || error));
    } finally {
      setLoading(false);
      setFormData(initialState);
    }
  };

  return { loading, formData, handleChange, handleSubmit };
};
