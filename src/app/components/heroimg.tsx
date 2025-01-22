import Image from 'next/image'
import React from 'react'

const Heroimg = () => {
  return (
    <div className='pt-20 bg-[#FAF4F4] flex md:flex-row flex-col justify-center items-center ' >
          <div className='md:h-[562px] md:w-[560px] h-auto w-[200px]'>
              <Image
                  src={'/Granite square side table 1.png'}
                  alt=''
                  width={500}
                  height={500}
              />
              <div className='relative md:bottom-36 md:left-14 -top-8'>
                   <h1 className="text-[18px] md:text-[34px] font-medium leading-tight text-black">
         Side Table
        </h1>
        <a
          href="#"
          className="md:mt-5 mt-3 inline-block text-[14px] md:text-[22px] font-medium text-black underline underline-offset-8 md:underline-offset-[18px] decoration-2 "
        >
          View More
        </a>
              </div>
          </div>
          
          <div className='md:h-[562px] md:w-[560px] h-auto w-[200px] '>
               <Image
                  src={'/Cloud sofa three seater + ottoman_3 1.png'}
                  alt=''
                  width={520}
                  height={520}
              />
              <div className='relative md:bottom-36 md:left-14 -top-8'>
                   <h1 className="text-[18px] md:text-[34px] font-medium leading-tight text-black">
         Side Table
        </h1>
        <a
          href="#"
          className="md:mt-5 mt-3 inline-block text-[14px] md:text-[22px] font-medium text-black underline  underline-offset-8 md:underline-offset-[18px] decoration-2 "
        >
          View More
        </a>
              </div>
          </div>
    </div>
  )
}

export default Heroimg