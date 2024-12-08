import Image from 'next/image'
import React from 'react'

const Filter = () => {
  return (
    <div className='bg-[#FAF4F4] h-[90px] flex justify-between items-center px-20 mt-10'>
              <div className='flex justify-center items-center gap-4 text-[16px]'>
                  <Image
                  src={'/system-uicons_filtering.png'}
                      alt=''
                      height={20}
                      width={20}

                  />
                  <p>Filter</p>
                   <Image
                  src={'/ci_grid-big-round.png'}
                      alt=''
                      height={20}
                      width={20}
                      
                  />
                   <Image
                  src={'/bi_view-list.png'}
                      alt=''
                      height={20}
                      width={20}
                      
                  />
                  <Image
                  src={'/Line 5.png'}
                      alt=''
                      height={1.5}
                      width={1.5}
                      
                  />
                  <p>Showing 1–16 of 32 results</p>
              </div>
              <div className='flex justify-center items-center gap-4 text-[16px] font-medium'>
                  <p className=''>Show</p>
                  <p className='text-[#9F9F9F] bg-white px-4 py-3'>16</p>
                  <p className=''>Short By</p>
                  <p className='text-[#9F9F9F] bg-white px-10  py-2 text-left w-max'><span className='text-left'>Default</span></p>
              </div>
</div>
  )
}

export default Filter
