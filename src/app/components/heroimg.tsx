import Image from 'next/image'
import React from 'react'

const Heroimg = () => {
  return (
    <div className='pt-20 bg-[#FAF4F4] flex justify-center items-center ' >
          <div className='h-[562px] w-[560px] '>
              <Image
                  src={'/Granite square side table 1.png'}
                  alt=''
                  width={500}
                  height={500}
              />
              <div className='relative bottom-36 left-14'>
                   <h1 className="text-3xl md:text-[34px] font-medium leading-tight text-black">
         Side Table
        </h1>
        <a
          href="#"
          className="mt-5 inline-block text-[22px] font-medium text-black underline underline-offset-[18px] decoration-2 "
        >
          View More
        </a>
              </div>
          </div>
          
          <div className='h-[562px] w-[560px] '>
               <Image
                  src={'/Cloud sofa three seater + ottoman_3 1.png'}
                  alt=''
                  width={520}
                  height={520}
              />
              <div className='relative bottom-32 left-14'>
                   <h1 className="text-3xl md:text-[34px] font-medium leading-tight text-black">
         Side Table
        </h1>
        <a
          href="#"
          className="mt-5 inline-block text-[22px] font-medium text-black underline underline-offset-[18px] decoration-2 "
        >
          View More
        </a>
              </div>
          </div>
    </div>
  )
}

export default Heroimg
