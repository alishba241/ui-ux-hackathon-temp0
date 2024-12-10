import Image from 'next/image';
import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const Hero = () => {
  return (
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
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white ">
        <Image
        src={'/Meubel House_Logos-05.png'}
        alt=''
        width={90}
        height={90}
        className='md:h-[90px] md:w-[90px] h-[50px] w-[50px]'
        />
        <h1 className="text-[18px] md:text-[48px] relative -top-2 md:top-0 font-medium md:mt-[-30px] text-black">Shop</h1>
        <p className="text-[10px] md:text-[16px] relative -top-4 md:top-0 font-medium text-black pt-2">Home  <AiOutlineRight className='inline-block' />
 <span className='font-light'> Shop</span></p>
      </div>
          
    </div>
  );
};

export default Hero;

