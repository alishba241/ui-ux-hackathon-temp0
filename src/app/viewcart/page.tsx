import React from 'react'
import Navbar from '../shop/navbar'
import Delivery from '../shop/delivery'
import Image from 'next/image'
import { AiOutlineRight } from 'react-icons/ai'

const page = () => {
  return (
    <div>
          <Navbar />
            <div className="relative w-full">
      {/* Background Image */}
      <Image
              src={'/Rectangle 1.png'}
              alt="Hero Background"
              objectFit="cover"
              className="w-full h-full"
              height={300}
              width={300}

          />
           {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <Image
        src={'/Meubel House_Logos-05.png'}
        alt=''
        width={90}
        height={90}
        />
        <h1 className="text-[48px] font-medium mt-[-30px] text-black">Cart</h1>
        <p className="text-[16px] font-medium text-black pt-2">Home  <AiOutlineRight className='inline-block' />
 <span className='font-light'> Cart</span></p>
      </div>
          
          </div>

          {/* cart view */}
           <div className=" flex justify-center py-10">
      <div className="w-full max-w-6xl flex flex-col md:flex-row">
        {/* Product Table */}
        <div className="flex-grow bg-white p-6 ">
                      <table className="w-full ">

                               <thead className=' '>
                             
              <tr className="h-[55px] bg-[#FFF9E5] text-[16px] ">
                <th className="  font-bold ">Product</th>
                <th className="  font-bold">Price</th>
                <th className=" font-bold">Quantity</th>
                <th className=" font-bold">Subtotal</th>
                                  </tr>
            </thead>
                          
           
            <tbody>
              <tr className="">
                <td className="flex items-center my-12">
                  <Image
                    src="/Asgaard sofa 5.png"
                                          alt=""
                                          width={300}
                                          height={300}
                    className="w-[106px] h-[106px] rounded-lg bg-[#FBEBB5]"
                  />
                  <span className='pl-8 text-[16px] text-[#9F9F9F]'>Asgaard sofa</span>
                </td>
                <td className="px-4 py-2 text-[16px] text-[#9F9F9F]">Rs. 250,000.00</td>
                <td className="text-center relative left-6">
               <p className='border rounded-[5px] w-[32px] h-[32px] text-center'>1</p>
                </td>
                                  <td className="text-right px-4 py-2 text-[16px]">Rs. 250,000.00</td>
                                  
                                  <td>
                                      <Image
                                          src='/ant-design_delete-filled.png'
                                          alt=''
                                          width={20}
                                          height={20}
                                      />
                                  </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart Totals Section */}
        <div className="w-[390px] h-[390px] bg-[#FFF9E5] pb-10  flex items-center flex-col ">
          <h2 className="text-[32px] font-semibold mt-3">Cart Totals</h2>
          <div className="flex justify-between items-center mt-16  gap-20">
            <p className="text-[16px] font-medium">Subtotal</p>
            <p className="text-[#9F9F9F] text-[16px]">Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between items-center mt-4 gap-20">
            <p className="text-[16px] font-medium">Total</p>
            <p className="text-[20px] font-medium text-[#B88E2F]">Rs. 250,000.00</p>
          </div>
          <button
          type="submit"
          className=" py-2.5 px-14 mt-14 border border-black rounded-[12px] text-black text-center hover:bg-black hover:text-white duration-200"
        >
                          Check Out
                          </button>
        </div>
      </div>
    </div>
          <Delivery/>
    </div>
  )
}

export default page
