import Image from 'next/image'
import React from 'react'

const Description = () => {
  return (
    <div className='flex flex-col justify-center items-center border-t-2 border-b-2 mt-28 py-14'>
          <div className='flex gap-6 justify-center items-center text-[24px] '>
              <h1>Description</h1>
              <h1 className='text-[#9F9F9F]'>Additional Information</h1>
              <h1 className='text-[#9F9F9F]'>Reviews [5]</h1>
          </div>
          <div className='w-[75%] flex justify-center items-center flex-col text-[16px] text-[#9F9F9F] mt-8'>
              <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
              <p className='mt-7'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        
          </div>
          <div className='flex gap-6 mt-10'>
              <div className='w-[605px] h-[348px] bg-[#FFF9E5] flex justify-center items-center'>
                   <Image
                  src={'/Cloud sofa three seater + ottoman_2 1.png'}
                      alt=''
                      height={600}
                       width={600}
                      
                  />
              </div>
              <div className='w-[605px] h-[348px] bg-[#FFF9E5] flex justify-center items-center'>
                   <Image
                  src={'/Cloud sofa three seater + ottoman_1 1.png'}
                      alt=''
                      height={600}
                       width={600}
                      
                  />
              </div>
          </div>
    </div>
  )
}

export default Description