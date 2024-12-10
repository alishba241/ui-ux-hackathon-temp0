import React from "react";
import Navbar from "../shop/navbar";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import Delivery from "../shop/delivery";

const page = () => {
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
                      className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 ">
                      Last Name
                    </label>
                    <input
                      type="text"
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
                  <select className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black">
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
                    className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 mt-4 md:mt-7">
                    Town / City
                  </label>
                  <input
                    type="text"
                    className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 mt-4 md:mt-7">
                    Province
                  </label>
                  <select className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black">
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
                    type="text"
                    className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 mt-4 md:mt-7">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block md:text-[16px] text-[14px] font-medium mb-2 md:mb-4 mt-4 md:mt-7">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="mt-2 block w-full border border-[#9F9F9F] rounded-[6px] p-3 md:p-4 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <input
                    type="email"
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
              <div className="flex justify-between items-center  pb-2 mb-2">
                <p className="text-[14px] md:text-[16px] text-[#9F9F9F]">
                  Asgaard sofa{" "}
                  <span className="text-black font-medium text-[14px] md:text-[16px]">
                    <span className="px-2">X</span> 1
                  </span>
                </p>
                <p className="text-[14px] md:text-[16px]">Rs. 250,000.00</p>
              </div>
              {/* Subtotal Row */}
              <div className="flex justify-between items-center  pb-2 mb-2">
                <p className="text-[14px] md:text-[16px]">Subtotal</p>
                <p className="text-[14px] md:text-[16px]">Rs. 250,000.00</p>
              </div>
              {/* Total Row */}
              <div className="flex justify-between items-center ">
                <p className="text-[14px] md:text-[16px]">Total</p>
                <p className="text-[20px] md:text-[24px] font-bold text-[#B88E2F]">
                  Rs. 250,000.00
                </p>
              </div>
              <div className="border-b-2 my-8"></div>
              {/* Payment Method */}
              <form>
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
                      Direct Bank Transfer
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
                {/* Place Order Button */}
                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    className=" text-[14px] md:text-[16px] py-2 md:py-3 px-14 md:px-20  border border-black rounded-[12px] text-black text-center hover:bg-black hover:text-white duration-200"
                  >
                    Place order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Delivery />
    </div>
  );
};

export default page;
