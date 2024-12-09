import React from 'react'

const Delivery = () => {
  return (
     <div className="bg-[#FAF4F4] py-10 h-auto md:h-[300px] flex md:flex-row flex-col justify-center items-center md:mt-6">
      <div className="container mx-auto grid grid-cols-1 md:gap-0 gap-6 px-4 md:grid-cols-3 md:px-10">
        {/* Feature 1 */}
        <div className="text-left  px-8">
          <h3 className="text-[20px] md:text-[28px] font-medium text-black">Free Delivery</h3>
          <p className="md:mt-2 mt-1 text-[15px] md:text-[20px] text-[#9F9F9F]">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="text-left  px-8">
          <h3 className="text-[20px] md:text-[28px] font-medium text-black">90 Days Return</h3>
          <p className="md:mt-2 mt-1 text-[15px] md:text-[20px] text-[#9F9F9F]">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="text-left  px-8">
          <h3 className="text-[20px] md:text-[28px] font-medium text-black">Secure Payment</h3>
          <p className="md:mt-2 mt-1 text-[15px] md:text-[20px] text-[#9F9F9F]">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Delivery
