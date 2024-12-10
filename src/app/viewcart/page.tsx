import React from "react";
import Navbar from "../shop/navbar";
import Delivery from "../shop/delivery";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

const page = () => {
  return (
    <div >
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
            Cart
          </h1>
          <p className="text-[10px] md:text-[16px] relative -top-4 md:top-0 font-medium text-black pt-2">
            Home <AiOutlineRight className="inline-block" />
            <span className="font-light"> Cart</span>
          </p>
        </div>
      </div>

      {/* cart view */}
      <div className=" flex justify-center py-10">
        <div className="w-full md:max-w-6xl flex flex-col justify-center items-center md:flex-row">
          {/* Product Table */}
          <div className="flex-grow bg-white md:p-6  w-[80%] ">
            <table className="md:w-full ">
              <thead className=" ">
                <tr className="md:h-[55px] h-[40px] bg-[#FFF9E5] text-[12px] md:text-[16px] font-medium md:font-bold ">
                  <th className=" font-medium md:font-bold  ">Product</th>
                  <th className=" font-medium md:font-bold ">Price</th>
                  <th className=" font-medium md:font-bold">Quantity</th>
                  <th className=" font-medium md:font-bold">Subtotal</th>
                </tr>
              </thead>

              <tbody>
                <tr className="">
                  <td className="flex items-center md:my-12 my-8">
                    <Image
                      src="/Asgaard sofa 5.png"
                      alt=""
                      width={300}
                      height={300}
                      className="md:w-[106px] md:h-[106px] w-[80px] h-[70px] rounded-lg bg-[#FBEBB5]"
                    />
                    <span className="hidden md:flex md:pl-8 text-[12px] md:text-[16px] text-[#9F9F9F]">
                      Asgaard sofa
                    </span>
                  </td>
                  <td className="md:px-4 pl-2 py-2 text-[12px] md:text-[16px] text-[#9F9F9F]">
                   <span className="hidden md:inline-block">Rs.</span> 250,000.00
                  </td>
                  <td className="text-center relative left-4 md:left-6">
                    <p className="border rounded-[5px] md:w-[32px] md:h-[32px] w-[20px] h-[20px] text-center text-[12px] md:text-[18px]">
                      1
                    </p>
                  </td>
                  <td className="text-right md:px-4 py-2  text-[12px] md:text-[16px]">
                    <span className="hidden md:inline-block">Rs.</span> 250,000.00
                  </td>

                  <td className="relative left-3">
                    <Image
                      src="/ant-design_delete-filled.png"
                      alt=""
                      width={20}
                      height={20}
                      className="md:h-[20px] md:w-[20px] h-[20px] w-[28px]"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals Section */}
          <div className="md:w-[390px] w-[80%] md:h-[390px] md:mt-0 mt-10 bg-[#FFF9E5] pb-10  flex items-center flex-col ">
            <h2 className="text-[24px] md:text-[32px] font-semibold mt-3">Cart Totals</h2> 
            <div className="flex justify-between items-center md:mt-16 mt-10 gap-10 md:gap-20">
              <p className="text-[15px] md:text-[16px] font-medium">Subtotal</p>
              <p className="text-[#9F9F9F] text-[15px] md:text-[16px]">Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between items-center mt-4 gap-10 md:gap-20">
              <p className="text-[15px] md:text-[16px]font-medium">Total</p>
              <p className="text-[18px] md:text-[20px] font-medium text-[#B88E2F]">
                Rs. 250,000.00
              </p>
            </div>
            <button
              type="submit"
              className="text-[14px] md:text-[16px] py-1.5 md:py-2.5 px-10 md:px-14 mt-8 md:mt-14 border border-black rounded-[12px] text-black text-center hover:bg-black hover:text-white duration-200"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
      <Delivery />
    </div>
  );
};

export default page;
