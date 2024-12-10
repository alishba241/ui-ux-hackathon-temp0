'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ShoppingCart from "../shop/shoppingcart";
import { FaBars} from "react-icons/fa";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-[100px] items-center justify-between  px-4 sm:px-6 md:px-12 lg:px-24 py-4 bg-white text-black">

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-[72px] md:relative md:left-[30%]">
        <li>
          <Link href="/" className="text-black hover:text-gray-600 font-medium text-[16px]">
            Home
          </Link>
        </li>
        <li>
          <Link href="/shop" className="text-black hover:text-gray-600 font-medium text-[16px]">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-black hover:text-gray-600 font-medium text-[16px]">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-black hover:text-gray-600 font-medium text-[16px]">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <button className="block md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? "X" : (
          <FaBars/>
       )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-[100px] left-0 w-full bg-white flex flex-col space-y-4 px-6 py-4 z-50 shadow-md md:hidden">
          <li>
            <Link href="/" className="text-black hover:text-gray-600 font-medium text-[16px]" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-black hover:text-gray-600 font-medium text-[16px]" onClick={toggleMenu}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-black hover:text-gray-600 font-medium text-[16px]" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-black hover:text-gray-600 font-medium text-[16px]" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
           
                {/* Icons Section */}
      <div className="flex space-x-[30px] ">
        <Link href="/account">
          <Image
            src="/mdi_account-alert-outline.png"
            alt=""
            width={24}
            height={24}
            className="hover:text-gray-600"
          />
        </Link>
        <Image
          src="/akar-icons_search.png"
          alt=""
          width={24}
          height={24}
          className="hover:text-gray-600"
        />
        <Image
          src="/akar-icons_heart.png"
          alt=""
          width={24}
          height={24}
          className="hover:text-gray-600"
        />
        <button onClick={toggleCart}>
          <Image
            src="/ant-design_shopping-cart-outlined.png"
            alt=""
            width={24}
            height={24}
            className="hover:text-gray-600"
          />
        </button>
      </div>

      {/* Shopping Cart Sidebar */}
      <ShoppingCart isCartOpen={isCartOpen} toggleCart={toggleCart} />
        </ul>
      )}

      {/* Icons Section */}
      <div className="hidden md:flex space-x-[30px]">
        <Link href="/account">
          <Image
            src="/mdi_account-alert-outline.png"
            alt=""
            width={28}
            height={28}
            className="hover:text-gray-600"
          />
        </Link>
        <Image
          src="/akar-icons_search.png"
          alt=""
          width={28}
          height={28}
          className="hover:text-gray-600"
        />
        <Image
          src="/akar-icons_heart.png"
          alt=""
          width={28}
          height={28}
          className="hover:text-gray-600"
        />
        <button onClick={toggleCart}>
          <Image
            src="/ant-design_shopping-cart-outlined.png"
            alt=""
            width={28}
            height={28}
            className="hover:text-gray-600"
          />
        </button>
      </div>

      {/* Shopping Cart Sidebar */}
      <ShoppingCart isCartOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
  );
}

export default Navbar;
