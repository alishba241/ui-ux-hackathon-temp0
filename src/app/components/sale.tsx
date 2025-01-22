import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sale = () => {
  return (
    <div className='bg-[#FFF9E5] flex md:flex-row flex-col md:gap-28 '>
      <div className='px-5 md:px-0'>
              <Image
              src={'/Asgaard sofa 1.png'}
              alt=''
              width={800}
              height={800}
              />
          </div>
          <div className='flex flex-col justify-center items-center mt-7 md:mt-0 mb-10 md:mb-0'>
              <p className='text-[18px] md:text-[24px] font-medium'>New Arrivals</p>
              <h1 className='text-[32px] md:text-[48px] font-semibold md:font-bold'>Asgaard Sofa</h1>
        <Link href='/productpage/14'>     
        <button className='text-[16px] md:text-[20px] px-8 py-1.5 md:px-14 md:py-3 border mt-4 md:mt-8 hover:bg-black hover:text-white duration-200 border-black text-center'>Shop Now</button>
          </Link>
          </div>
    </div>
  )
}

export default Sale