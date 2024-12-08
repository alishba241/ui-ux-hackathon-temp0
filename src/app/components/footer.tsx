import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 px-10 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Address Section */}
        <div className='flex justify-center items-center flex-col'>
          <p className="text-[16px] text-[#9F9F9F]">
            400 University Drive Suite 200 Coral <br />
            Gables, <br />
            FL 33134 USA
          </p>
        </div>
        {/* Links Section */}
        <div className='ml-28'>
          <h3 className="text-[16px] text-[#9F9F9F] font-medium mb-4">Links</h3>
          <ul className="mt-6 leading-[60px]">
            <li>
              <Link href="#" className="text-[16px] font-medium text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[16px] font-medium text-black">
                Shop
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[16px] font-medium text-black">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[16px] font-medium text-black">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-[16px] text-[#9F9F9F] font-medium mb-4">Help</h3>
          <ul className="mt-6 leading-[60px]">
            <li>
              <Link href="#" className="text-[16px] font-medium text-black">
                Payment Options
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[16px] font-medium text-black">
                Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[16px] font-medium text-black">
                Privacy Policies
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className='relative right-[100px]'>
          <h3 className="text-[16px] text-[#9F9F9F] font-medium mb-4">Newsletter</h3>
          <div className="flex flex-col sm:flex-row items-center mt-6">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full placeholder:text-[#9F9F9F] placeholder:text-sm sm:w-auto flex-1 border-b focus:outline-none text-left border-black py-1  text-sm"
            />
            <button className="text-black py-2 px-3 underline underline-offset-[9px] text-sm font-medium border-black">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t-2 border-[#D9D9D9] py-8">
        <p className="text-start text-[16px] text-black">
          2022 Meubel House. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;



