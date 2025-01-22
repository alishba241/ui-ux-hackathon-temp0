'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ShoppingCart from '../shop/shoppingcart';
import { FaBars } from 'react-icons/fa';
import { useCart } from '../components/cartcontext';
import { useWishlist } from '../components/context'; 

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [wishItemCount, setWishItemCount] = useState(0);
  const [isMountedWish, setIsMountedWish] = useState(false);
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  // Update cart count dynamically
  useEffect(() => {
    setIsMounted(true);
    const count = cart.reduce((total, product) => total + (product.quantity || 0), 0);
    setCartItemCount(count);
  }, [cart]);

  // Update wishlist count dynamically
  useEffect(() => {
    setIsMountedWish(true);
    const count = wishlist.length; // Count the number of items in the wishlist
    setWishItemCount(count);
  }, [wishlist]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
  return (
    <div className="flex h-[100px] items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 py-4 bg-white text-black">
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
          <Link href="/blog" className="text-black hover:text-gray-600 font-medium text-[16px]">
            Blog
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
        {isMenuOpen ? 'X' : <FaBars />}
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
            <Link href="/blog" className="text-black hover:text-gray-600 font-medium text-[16px]" onClick={toggleMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-black hover:text-gray-600 font-medium text-[16px]" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      )}

      {/* Icons Section */}
      <div className="flex sm:space-x-[30px] space-x-[18px] relative">
        <Link href="/account">
          <Image
            src="/mdi_account-alert-outline.png"
            alt=""
            width={28}
            height={28}
            className="hover:text-gray-600 sm:h-[28px] sm:w-[28px] h-[22px] w-[22px]"
          />
        </Link>
      
        <Link href="/wish">
          <div className="relative">
            <Image
              src="/akar-icons_heart.png"
              alt=""
              width={28}
              height={28}
              className="hover:text-gray-600 sm:h-[28px] sm:w-[28px] h-[22px] w-[22px]"
            />
            {/* Wishlist count */}
            {isMountedWish  && (
              <span className="absolute top-[-8px] right-[-9px] text-xs font-semibold text-white bg-red-500 rounded-full sm:w-5 sm:h-5 w-[15px] h-[15px] flex items-center justify-center">
                {wishItemCount}
              </span>
            )}
          </div>
        </Link>
        <Link href="/cart">
          <div className="relative">
            <Image
              src="/ant-design_shopping-cart-outlined.png"
              alt=""
              width={28}
              height={28}
              className="hover:text-gray-600 sm:h-[28px] sm:w-[28px] h-[22px] w-[22px]"
            />
            {/* Cart count */}
            {isMounted && (
              <span className="absolute top-[-8px] right-[-9px] text-xs font-semibold text-white bg-red-500 rounded-full sm:w-5 sm:h-5 w-[15px] h-[15px] flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </div>
        </Link>
      </div>

      {/* Shopping Cart Sidebar */}
      <ShoppingCart isCartOpen={isCartOpen} toggleCart={toggleCart} />

    </div>
  );
}

export default Navbar;
