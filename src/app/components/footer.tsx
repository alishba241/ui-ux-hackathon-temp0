import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 px-6 md:px-20">
      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Address Section */}
        <div className="flex flex-col items-center justify-center lg:items-start">
          <p className="text-[16px] text-[#9F9F9F] text-center lg:text-left">
            400 University Drive Suite 200 Coral <br />
            Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col text-center md:text-start md:relative md:left-20">
          <h3 className="text-[16px] text-[#9F9F9F] font-medium mb-4 md:text-start">Links</h3>
          <ul className="leading-[60px] md:leading-[70px]">
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
        <div className="flex flex-col  text-center md:text-start ">
          <h3 className="text-[16px] text-[#9F9F9F] font-medium mb-4 md:text-start">Help</h3>
          <ul className="leading-[60px] md:leading-[70px]">
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
        <div className="flex flex-col items-center  text-center md:items-start ">
          <h3 className="text-[16px] text-[#9F9F9F] font-medium mb-4">Newsletter</h3>
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch mt-4 w-full">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full sm:flex-1 border-b border-black py-1 focus:ring-0 focus:outline-none placeholder:text-[#9F9F9F] placeholder:text-sm text-sm"
            />
            <button className="mt-4 sm:mt-0 sm:ml-4 py-2 px-3 text-black font-medium text-sm underline underline-offset-[12px]">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-[#D9D9D9] py-6">
        <p className="md:text-start text-center text-[16px] text-black">
          2022 Meubel House. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
