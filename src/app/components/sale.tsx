import Image from 'next/image'
import React from 'react'

const Sale = () => {
  return (
    <div className='bg-[#FFF9E5] flex gap-28'>
      <div>
              <Image
              src={'/Asgaard sofa 1.png'}
              alt=''
              width={800}
              height={800}
              />
          </div>
          <div className='flex flex-col justify-center items-center'>
              <p className='text-[24px] font-medium'>New Arrivals</p>
              <h1 className='text-[48px] font-bold'>Asgaard Sofa</h1>
              <button className='text-[20px] px-14 py-3 border mt-8 hover:bg-black hover:text-white duration-200 border-black text-center'>Order Now</button>
          </div>
    </div>
  )
}

export default Sale
