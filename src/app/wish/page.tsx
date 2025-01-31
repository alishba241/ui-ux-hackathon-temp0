"use client";

import Image from "next/image";
import { useWishlist } from "../components/context";
import Navbar from "../shop/navbar";
import { Product } from "../components/cartcontext";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";


export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

    return (
      <div>
            <Navbar/>
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
                 Wishlist
               </h1>
               <p className="text-[10px] md:text-[16px] relative -top-4 md:top-0 font-medium text-black pt-2">
                 Home <AiOutlineRight className="inline-block" />
                 <span className="font-light"> Wishlist</span>
               </p>
        </div>
      </div>
    <div className="max-w-4xl mx-auto sm:p-4 sm:mt-20 mt-10 p-10">
      <ul className="space-y-2">
        {wishlist.length === 0 ? (
           <div className="flex flex-col justify-center items-center mt-6">
              
              <p className="lg:text-2xl sm:text-[20px] text-[18px] font-medium text-black ">
                Your Wishlist is empty
              </p>
              <Image
                src={"/wish.jpg"}
                alt=""
                width={200}
                height={200}
                className="mt-4 lg:w-[150px] lg:h-[150px] sm:w-[130px] sm:h-[130px] w-[110px] h-[110px]"
              />
              <Link href="/">
                <button className="mt-6 bg-black lg:py-3 sm:py-2 py-2 sm:text-[16px] text-[14px] hover:bg-gray-800 px-6 sm:px-8 rounded-md relative top-2 text-white font-medium">
                  Back to Home
                </button>
              </Link>
            </div>
            ) : (
                <ul>
          {wishlist.map((item: Product) => (
           <li
                             key={item.id}
                             className="flex sm:flex-row flex-col sm:items-center gap-4 border-b border-gray-300 py-8"
                           >
           
                             <div className="bg-[#FBEBB5] rounded-lg p-1">
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
                                   
                                 <div className='flex'>
                                    <button
                                   onClick={() => removeFromWishlist(item)}
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
                                 <p className="font-semibold text-black lg:text-sm text-[12px] hidden sm:block break-words whitespace-normal max-w-[150px]">
                                  
                                   {item.name}
                                 </p>
                                
                                 <p className="font-semibold text-black lg:text-sm text-[12px]">
                               Rp. {item.price}
             </p>
                                 <button
                                   onClick={() => removeFromWishlist(item)}
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
        
      </ul>
      
            </div>
            </div>
  );
}
