/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "../components/cartcontext";
import Navbar from "../shop/navbar";
import { AiOutlineRight } from "react-icons/ai";
import {Product} from '../components/cartcontext'

const CartPage = () => {
  const { cart = [], removeFromCart, updateCartItemQuantity } = useCart();

  const [orderSummary, setOrderSummary] = useState({
    totalItems: 0,
    totalPrice: 0,
  });

  // calculation of order summary
  useEffect(() => {
    const totalItems = cart.reduce(
      (acc, item) => acc + (item.quantity || 0),
      0
    );
    const totalPrice = cart.reduce((acc, item) => {
      const numericPrice = parseFloat(
        item.price.toString().replace(/[^\d.-]/g, "")
      );
      const itemTotalPrice = numericPrice * (item.quantity || 0);
      return acc + itemTotalPrice;
    }, 0);

    setOrderSummary({ totalItems, totalPrice });
  }, [cart]);
  const formatCurrency: any = (value: any) =>
    `Rp ${value.toLocaleString("en-US")}`;

  // function to handle quantity changes
  const handleQuantityChange = (id: number, change: number) => {
    const item = cart.find((item) => item.id === id);
    if (!item) return;
    const newQuantity = Math.max(1, (item.quantity || 0) + change);
    updateCartItemQuantity(id, newQuantity);
  };

  
  return (
    <div>

      <Navbar/>

      <div className="relative w-full ">
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
     
      <div className="flex flex-col lg:flex-row justify-between p-10 sm:p-20 gap-4 ">
        {/* Cart Items Section */}

        <div className="w-full lg:w-[60%] flex flex-col justify-center">
          
          {cart.length === 0 ? (
            
            <div className="flex flex-col justify-center items-center lg:relative lg:left-[30%] mt-6">
              
              <p className="lg:text-2xl sm:text-[20px] text-[18px] font-medium text-black ">
                Your cart is empty
              </p>
              <Image
                src={"/cart.png"}
                alt=""
                width={150}
                height={150}
                className="mt-4 lg:w-[150px] lg:h-[150px] sm:w-[130px] sm:h-[130px] w-[110px] h-[110px]"
              />
              <Link href="/shop">
                <button className="mt-6 bg-black lg:py-3 sm:py-2 py-2 sm:text-[16px] text-[14px] hover:bg-gray-800 px-6 sm:px-8 rounded-md relative top-2 text-white font-medium">
                  Start Shopping
                </button>
              </Link>
            </div>
          ) : (
            <ul>
                <table className="hidden sm:flex md:w-full md:h-[55px] h-[40px] bg-[#FFF9E5] text-[12px] md:text-[16px] font-medium md:font-bold ">
                 <thead className=" ">
                <tr className="">
                  <th className=" font-medium md:font-bold relative right-8">Product</th>
                  <th className=" font-medium md:font-bold relative right-4">Price</th>
                  <th className=" font-medium md:font-bold relative right-8">Quantity</th>
                  <th className=" font-medium md:font-bold relative right-24">Subtotal</th>
                </tr>
              </thead>
              </table>
              {cart.map((item:Product) => (
                <li
                  key={item.id}
                  className="flex sm:flex-row flex-col sm:items-center gap-4 border-b border-gray-300 py-8"
                >

                  <div className="bg-[#FBEBB5] rounded-lg">
                   <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="sm:h-[106px] sm:w-[106px] h-[70px] w-[70px] hidden sm:block"
                  />
                  </div>
                 
                  <div className="sm:hidden">
                    <div className=" flex justify-between">
                    <div className="bg-[#FBEBB5]">
                      <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded sm:h-[100px] sm:w-[100px] h-[70px] w-[70px]"
                  />
                    </div>
                    <div className="flex gap-2 items-start">
                        <div className="flex gap-2 items-start relative left-6">
                           <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="w-[18px] h-[18px]  text-sm border-2 text-[#1F3E97] border-[#1F3E97] rounded-full active:border-white active:text-red-500 active:ring-2 active:ring-red-500"
                        >
                          <p className="relative -top-[12px] font-medium text-2xl">
                            -
                          </p>
                        </button>
                        <p className="text-[#1F3E97] bg-[#F4F4F4] px-1 text-sm">
                          {item.quantity || 1}
                        </p>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="w-[18px] h-[18px] text-sm border-2 text-[#1F3E97] border-[#1F3E97] rounded-full active:border-white active:text-red-500 active:ring-2 active:ring-red-500"
                        >
                          <p className="relative top-[-3px] font-bold">+</p>
                      </button>
                     </div>
                      <div className='flex'>
                         <button
                        onClick={() => removeFromCart(item.id)}
                        className=" bg-[#F4F4F4] mt-8 group"
                      >
                        <Image
                      src="/ant-design_delete-filled.png"
                      alt=""
                      width={20}
                      height={20}
                      className="md:h-[20px] md:w-[20px] h-[20px] w-[28px] group-hover:filter group-hover:brightness-200 group-hover:invert"
                    />
                      </button>
                      </div>
                    </div>
                    </div>
                     <p className="font-semibold text-[12px] sm:text-[15px] lg:text-[17px] mt-4">{item.name}</p>
                    <p className="font-semibold text-[#1F3E97] lg:text-sm text-[12px]">
                        {" "}
                        {item.price}
                      </p>
                  </div>
                  
              {/* for large screen */}

                  <div className="flex-1 hidden sm:block">
                    <div className="flex justify-between">
                      
                    </div>
                    <div className="flex justify-evenly ">
                      {/* <p className="font-semibold text-black text-[10px] sm:text-[10px] lg:text-[17px] hidden sm:block">{item.name}</p> */}
                      <p className="font-semibold text-black lg:text-sm text-[12px] hidden sm:block">
                        {" "}
                        Rp. {item.price}
                      </p>
                      <div className="flex items-center gap-2  ">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="sm:w-[20px] sm:h-[20px] h-[15px] w-[15px] text-lg  text-black  bg-[#FBEBB5]  active:border-white active:text-red-500"
                        >
                          <p className="relative -top-[12px]  text-3xl">
                            -
                          </p>
                        </button>
                        <p className="text-black bg-white  px-1 ">
                          {item.quantity || 1}
                        </p>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="w-[20px] h-[20px] text-xl  text-black active:border-white bg-[#FBEBB5] active:text-red-500 "
                        >
                          <p className="relative top-[-7px] ">+</p>
                        </button>
                        
                      </div>
                      <p className="font-semibold text-black lg:text-sm text-[12px]">
                   Rp. {item.price * (item.quantity ?? 1)}
  </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="group"
                      >
                         <Image
                      src="/ant-design_delete-filled.png"
                      alt=""
                      width={20}
                      height={20}
                      className="md:h-[22px] md:w-[22px] h-[20px] w-[28px] group-hover:filter group-hover:brightness-200 group-hover:invert"
                    />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* order summary section */}
        {cart.length > 0 && (
          
          <div className="sm:w-[350px] w-[100%] sm:h-[390px] md:mt-0 mt-10 bg-[#FFF9E5] pb-10  flex items-center flex-col ">
            <h2 className="text-[24px] md:text-[32px] font-semibold mt-3">Cart Totals</h2> 
            <div className="flex justify-between items-center md:mt-16 mt-10 gap-10 md:gap-40">
              <p className="text-[15px] md:text-[16px] font-medium">Total Items</p>
              <p className="text-[#8b8b8b] text-[15px] md:text-[18px]">{orderSummary.totalItems}</p>
            </div>
            <div className="flex justify-between items-center mt-4 gap-10 md:gap-20">
              <p className="text-[15px] md:text-[16px] font-medium">Total Price</p>
              <p className="text-[18px] md:text-[20px] font-medium text-[#B88E2F]">
               {formatCurrency(orderSummary.totalPrice)}
              </p>
            </div>
            <Link href='/checkout'>
            <button
              type="submit"
              className="text-[14px] md:text-[16px] py-1.5 md:py-2.5 px-10 md:px-14 mt-8 md:mt-14 border border-black rounded-[12px] text-black text-center hover:bg-black hover:text-white duration-200"
            >
              Check Out
              </button>
              </Link>
          </div>
          
        )}
      </div>
     </div>
  );
};

export default CartPage;
