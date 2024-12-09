import Image from 'next/image';
import React from 'react';

const Insta = () => {
  return (
    <div className="relative w-full h-[400px]">
      {/* Background Image */}
      <Image
        src={'/Group 43.png'}
        alt=""
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-[30px] md:text-[55px] font-bold text-black">Our Instagram</h1>
        <p className="text-[14px] md:text-[18px]  text-black">Follow our store on Instagram</p>
        <button className="mt-4 text-[14px] md:text-[18px] hover:bg-black hover:text-white duration-200 bg-[#FAF4F4] shadow-xl text-black rounded-full px-10 py-2 md:px-16 md:py-3">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default Insta;
