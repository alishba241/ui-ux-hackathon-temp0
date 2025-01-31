'use client';

import Image from "next/image";
import Delivery from "../shop/delivery";
import Navbar from "../shop/navbar";
import { AiOutlineRight } from "react-icons/ai";
import { useCart } from "../components/cartcontext";
import { useState } from 'react';



const CheckoutButton = () => {
    const { cart } = useCart(); // Fetch Cart Items from Context

// Form validation state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        country: "",
        address: "",
        city: "",
        province: "",
        zip: "",
        phone: "",
        email: "",
    });

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate form fields
    const isFormValid = Object.values(formData).every(value => value.trim() !== "");

  
 const handleCheckout = async () => {

    if (!isFormValid) {
            alert("Please fill in all required fields.");
            return;
        }

    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: cart.map((item) => ({
          productName: item.name,
          productImage: item.image,
          amount: item.price * 100, // Convert to cents
          quantity: item.quantity,
        })),
      }),
    });

    const data = await response.json();

    if (data.url) {
      // Redirect user to Stripe Checkout page
      window.location.href = data.url;
    } else {
      alert('Something went wrong.');
    }
  };


  return (

    <div>
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
                 Checkout
               </h1>
               <p className="text-[10px] md:text-[16px] relative -top-4 md:top-0 font-medium text-black pt-2">
                 Home <AiOutlineRight className="inline-block" />
                 <span className="font-light"> Checkout</span>
               </p>
             </div>
           </div>
     
           <div className="min-h-screen  flex justify-center items-center">
             <div className="container mx-auto p-8 mt-6">
               <div className="grid grid-cols-1 md:grid-cols-2  md:my-8">
                 {/* Billing Details */}
                 <div className="bg-white md:px-32 rounded ">
                   <h2 className="text-[24px] md:text-[36px] font-semibold mb-8">
                     Billing details
                   </h2>
                   <form className="space-y-4">
                     <div className="grid grid-cols-2 gap-6">
                       <div>
                         <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4">
                           First Name
                         </label>
                         <input
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        name='firstName'
                           required
                           className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                         />
                       </div>
                       <div>
                         <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 ">
                           Last Name
                         </label>
                         <input
                        type="text"
                        name='lastName'
                         value={formData.lastName}
                        onChange={handleChange}
                        required
                           className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                         />
                       </div>
                     </div>
                     <div>
                       <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 mt-4 md:mt-7">
                         Company Name (Optional)
                       </label>
                       <input
                         type="text"
                         className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                       />
                     </div>
                     <div>
                       <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 mt-4 md:mt-7">
                         Country / Region
                       </label>
                    <select
                       value={formData.country}
                        onChange={handleChange}
                        name='country'
                      required
                      className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black">
                         <option>Pakistan</option>
                         <option>India</option>
                         <option>USA</option>
                       </select>
                     </div>
                     <div>
                       <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 mt-4 md:mt-7">
                         Street Address
                       </label>
                       <input
                      type="text"
                      value={formData.address}
                      name='address'
                        onChange={handleChange}
                         required
                         className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                       />
                     </div>
                     <div>
                       <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 mt-4 md:mt-7">
                         Town / City
                       </label>
                       <input
                      type="text"
                      value={formData.city}
                      name='city'
                        onChange={handleChange}
                         required
                         className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                       />
                     </div>
                     <div>
                       <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 mt-4 md:mt-7">
                         Province
                       </label>
                    <select
                      value={formData.province}
                      name='province'
                        onChange={handleChange}
                      required
                      className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black">
                         <option className="text-[16px] ">Punjab</option>
                         <option className="text-[16px]">Sindh</option>
                         <option className="text-[16px]">KPK</option>
                       </select>
                     </div>
     
                     <div>
                       <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 mt-4 md:mt-7">
                         Zip Code
                       </label>
                       <input
                      required
                      value={formData.zip}
                      name='zip'
                        onChange={handleChange}
                         type="text"
                         className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                       />
                     </div>
                     <div>
                       <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 mt-4 md:mt-7">
                         Phone
                       </label>
                    <input
                      value={formData.phone}
                      name='phone'
                        onChange={handleChange}
                       required
                         type="text"
                         className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                       />
                     </div>
     
                     <div>
                       <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 mt-4 md:mt-7">
                         Email address
                       </label>
                    <input
                      value={formData.email}
                        onChange={handleChange}
                        name='email'
                       required
                         type="email"
                         className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                       />
                     </div>
                     <div>
                       <input
                      type="text"
                      required
                         placeholder="Additional Information"
                         className="mt-10 md:mt-14 block w-full border placeholder:text-[14px] md:placeholder:text-[16px] placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                       />
                     </div>
                   </form>
                 </div>
     
                 
            {/* Order Summary */}

            <div className="max-w-md mt-16  md:mt-10 md:p-6">
              <div className="flex justify-between">
                <h2 className="text-[20px] md:text-2xl font-medium mb-4">
                  Product
                </h2>
                <h2 className="text-[20px] md:text-2xl font-medium mb-4">
                  Subtotal
                </h2>
              </div>

              {/* Product Row */}
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center pb-2 mb-2">
                    <p className="text-[14px] md:text-[16px] text-[#9F9F9F]">
                      {item.name} <span className="text-black font-medium text-[14px] md:text-[16px]">X {item.quantity}</span>
                    </p>
                    <p className="text-[14px] md:text-[16px]">Rs. {item.price * (item.quantity ?? 1)}</p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 text-2xl">No items Found</p>
              )}
                <div className="border-b-2 my-6"></div>
                <div className="flex justify-between items-center">
                <p className="text-[20px] md:text-[24px] font-semibold">Total</p>
                <p className="text-[20px] md:text-[24px] font-bold text-[#B88E2F]">
                  Rs. {cart.reduce((total, item) => total + item.price * (item.quantity ?? 1 ), 0)}
                </p>
              </div>
              {/* Payment Method */}
              <form className='mt-10'>
                {/* Direct Bank Transfer Option */}
                <div className="mb-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      value="direct"
                      className="w-4 h-4 text-black focus:ring-0 focus:bg-black"
                      defaultChecked
                    />
                    <span className="text-[16px] pl-2">
                      Direct Bank Transfer
                    </span>
                  </label>
                  <p className="text-[13px] md:text-[16px] text-[#9F9F9F] mt-2">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                  <label className="flex items-center space-x-2 mt-5">
                    <input
                      type="radio"
                      name="payment"
                      value="direct"
                      className="w-4 h-4 text-black focus:ring-0 focus:bg-black"
                    />
                    <span className="text-[13px] md:text-[16px] text-[#9F9F9F] pl-2">
                      Pay with Stripe
                    </span>
                  </label>
                  <label className="flex items-center space-x-2 mt-2">
                    <input
                      type="radio"
                      name="payment"
                      value="direct"
                      className="w-4 h-4 text-black focus:ring-0 focus:bg-black "
                    />
                    <span className="text-[13px] md:text-[16px] text-[#9F9F9F] pl-2">
                      Cash on Delivery
                    </span>
                  </label>
                </div>

                {/* Privacy Policy */}
                <p className="text-[13px] md:text-[16px] mb-4 font-light">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="text-black font-semibold cursor-pointer">
                    privacy policy
                  </span>
                  .
                </p>
               
                </form>
                 {/* Place Order Button */}
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleCheckout}
                    disabled={!isFormValid && cart.length === 0}
                    className={`text-[14px] md:text-[16px] py-2 md:py-3 px-14 md:px-20 border border-black rounded-[12px] text-black text-center 
                ${isFormValid ? 'hover:bg-black hover:text-white' : 'bg-gray-300 border-none text-gray-400 cursor-not-allowed'}`}
      >
            Place order
      </button>
                </div>
            </div>
                 
               </div>
             </div>
           </div>
     
           <Delivery />
         </div>
      
      
       
    </div>
  );
};

export default CheckoutButton;
