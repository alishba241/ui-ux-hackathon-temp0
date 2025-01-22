'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../shop/navbar";
import Delivery from "../shop/delivery";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string; subject?:string }>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateInputs = () => {
    const newErrors: { name?: string; email?: string; message?: string; subject?: string } = {};

 //! Validation for name input

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces.";
    }

   //! Validation for email input

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

 //! Validation for message 

    if (!formData.message.trim()) {
  newErrors.message = "Message is required.";
} else if (formData.message.length > 500) {
  newErrors.message = "Message cannot exceed 500 characters.";
} else if (!/^[a-zA-Z\s!@#$%^&*(),.?":{}|<>]+$/.test(formData.message)) {
  newErrors.message = "Message can only contain alphabets.";
}

 //! Validation for subject 
    
if (!formData.subject.trim()) {
  newErrors.subject = "Subject is required.";
} else if (formData.subject.length > 100) { 
  newErrors.subject = "Subject cannot exceed 100 characters.";
} else if (!/^[a-zA-Z\s!@#$%^&*(),.?":{}|<>]+$/.test(formData.subject)) {
  newErrors.subject = "Subject can only contain alphabets.";
}


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (validateInputs()) {
      emailjs
        .send(
          "service_vg0sv3a", 
          "template_04fkdcw",
          formData,
          "7b_HlVVR7TU1kQNZS" 
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            setSuccessMessage("Your message has been sent successfully!");
            setFormData({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
          },
          (error) => {
            console.error("Failed to send email:", error);
            setSuccessMessage("Failed to send your message. Please try again.");
          }
        );
    }
  };

  return (
    <div>
      <Navbar />
      <div className="relative w-full">
        {/* Background Image */}
        <Image
          src={"/Rectangle 1.png"}
          alt="Hero Background"
          objectFit="cover"
          className="w-full h-full"
          height={300}
          width={300}
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <Image
            src={"/Meubel House_Logos-05.png"}
            alt=""
            width={90}
            height={90}
            className="md:h-[90px] md:w-[90px] h-[50px] w-[50px]"
          />
          <h1 className="text-[18px] md:text-[48px] relative -top-2 md:top-0 font-medium md:mt-[-30px] text-black">
            Contact
          </h1>
          <p className="text-[10px] md:text-[16px] relative -top-4 md:top-0 font-medium text-black pt-2">
            Home <AiOutlineRight className="inline-block" />
            <span className="font-light"> Contact</span>
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex justify-center mt-16">
        <form
          className="w-full max-w-[600px] px-10"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-[16px] font-medium mb-4">Your Name</label>
            <input
              name="name"
              type="text"
              placeholder="Jhon Doe"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full border ${
                errors.name ? "border-red-500" : "border-[#9F9F9F]"
              } rounded-[6px] p-4`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-[16px] font-medium mb-4 mt-7">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="johndoe@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-[#9F9F9F]"
              } rounded-[6px] p-4`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-[16px] font-medium mb-4 mt-7">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              placeholder="This is optional"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full border border-[#9F9F9F] rounded-[6px] p-4"
            />
          </div>
          <div>
            <label className="block text-[16px] font-medium mb-4 mt-7">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Hi! I'd like to ask about..."
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full border ${
                errors.message ? "border-red-500" : "border-[#9F9F9F]"
              } rounded-[6px] p-6 resize-none`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="py-2 px-20 border mt-10 border-black rounded-[12px] text-black hover:bg-black hover:text-white duration-200"
          >
            Submit
          </button>
          {successMessage && (
            <p className="text-green-500 text-center mt-4">{successMessage}</p>
          )}
        </form>
      </div>

      <Delivery />
    </div>
  );
};

export default Page;
