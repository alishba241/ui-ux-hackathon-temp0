import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 bg-white">
      {/* Heading Section */}
      <h1 className="text-[24px] md:text-[36px] font-medium text-center">Our Blogs</h1>
      <p className="text-[15px] font-medium text-[#9F9F9F] text-center max-w-2xl pt-4">
        Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
      </p>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 ">
        {/* Blog Card */}
        <div className="hover:shadow-lg md:w-[287px] md:h-[397px]  flex flex-col  items-center rounded-[4px] p-5 md:p-4">
          {/* Blog Image */}
          <div className="flex justify-center items-center h-[200px] w-full mb-4">
            <Image
              src="/Rectangle 13.png"
              alt=""
              width={250}
              height={250}
              className="object-contain"
            />
          </div>

          {/* Blog Details */}
          <div className="w-full flex flex-col items-center mt-[35px]">
            <p className="text-[12px] md:text-[15px] font-medium text-center">
              Going all-in with millennial design
            </p>
            <Link
              href="/blog"
              className="mt-3 text-[15px] md:text-[18px]  font-medium text-black underline underline-offset-8 md:underline-offset-[13px] decoration-2"
            >
              Read More
            </Link>
            <div className="flex items-center justify-center text-[12px] md:text-[14px] mt-6 gap-2">
              <Image
              src={'/Group.png'}
                              alt=''
                              width={18}
                              height={18}
              /> 5 min
              <span></span>
              <Image
              src={'/uil_calender.png'}
                              alt=''
                              width={18}
                              height={18}
              />12<sup>th</sup>Oct 2022
            </div>
          </div>
        </div>

        {/* Duplicate Cards */}
        <div className="hover:shadow-lg md:w-[287px] md:h-[397px]  flex flex-col  items-center rounded-[4px] p-5 md:p-4">
          <div className="flex justify-center items-center h-[200px] w-full mb-4">
            <Image
              src="/Rectangle 14.png"
              alt=""
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
          <div className="w-full flex flex-col items-center mt-[35px]">
            <p className="text-[12px] md:text-[15px] font-medium text-center">
              Going all-in with millennial design
            </p>
            <Link
              href="/blog"
              className="mt-3 text-[15px] md:text-[18px]  font-medium text-black underline underline-offset-8 md:underline-offset-[13px] decoration-2"
            >
              Read More
            </Link>
            <div className="flex items-center justify-center text-[14px] mt-6 gap-2">
               <Image
              src={'/Group.png'}
                              alt=''
                              width={18}
                              height={18}
              /> 5 min
              <span></span>
              <Image
              src={'/uil_calender.png'}
                              alt=''
                              width={18}
                              height={18}
              /> 12<sup>th</sup> Oct 2022
            </div>
          </div>
        </div>

        <div className="hover:shadow-lg md:w-[287px] md:h-[397px]  flex flex-col  items-center rounded-[4px] p-5 md:p-4">
          <div className="flex justify-center items-center h-[200px] w-full mb-4">
            <Image
              src="/Rectangle 15.png"
              alt=""
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
          <div className="w-full flex flex-col items-center mt-[35px]">
            <p className="text-[12px] md:text-[15px] font-medium text-center">
              Going all-in with millennial design
            </p>
            <Link
              href="/blog"
              className="mt-3 text-[15px] md:text-[18px]  font-medium text-black underline underline-offset-8 md:underline-offset-[13px] decoration-2"
            >
              Read More
            </Link>
            <div className="flex items-center justify-center  text-[14px] mt-6 gap-2">
              <Image
              src={'/Group.png'}
                              alt=''
                              width={18}
                              height={18}
              /> 5 min
              <span></span>
              <Image
              src={'/uil_calender.png'}
                              alt=''
                              width={18}
                              height={18}
              /> 12<sup>th</sup> Oct 2022
            </div>
          </div>
        </div>
      </div>

      {/* View All Posts Button */}
     <a href='#'className="mt-7 md:mt-10 inline-block  text-[14px] md:text-[20px] font-medium text-black underline underline-offset-[19px] underline-offset-8 decoration-2">
        View More
      </a>
    </div>
  );
};

export default Blog;