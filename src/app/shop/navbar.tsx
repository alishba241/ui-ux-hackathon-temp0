
import Image from "next/image";
import Link from "next/link";

 function Navbar() {
  return (
    <nav className="flex h-[100px] items-center text-black justify-between px-6 md:px-12 lg:px-24 py-4 bg-white">
      <div className="text-xl font-bold"></div>
      <ul className="hidden md:flex space-x-[72px] relative left-28">
        <li><Link href="/" className="text-black hover:text-gray-600 font-medium text-[16px]">Home</Link></li>
        <li><Link href="/shop" className="text-black hover:text-gray-600 font-medium text-[16px]">Shop</Link></li>
        <li><Link href="/about" className="text-black hover:text-gray-600 font-medium text-[16px]">About</Link></li>
        <li><Link href="/contact" className="text-black hover:text-gray-600 font-medium text-[16px]">Contact</Link></li>
      </ul>
      <div className="flex space-x-[45px]">
              <Image
                  src={'/mdi_account-alert-outline.png'}
                  alt=""
                  width={28}
                  height={28}
                  className="text-black hover:text-gray-600" />
        <Image 
                src={'/akar-icons_search.png'}
                  alt=""
                  width={28}
                  height={28}
        className="text-black hover:text-gray-600"/>
        <Image 
                   src={'/akar-icons_heart.png'}
                  alt=""
                  width={28}
                  height={28}
                  className="text-black hover:text-gray-600" />
              <Image 
                   src={'/ant-design_shopping-cart-outlined.png'}
                  alt=""
                  width={28}
                  height={28}
        className="text-black hover:text-gray-600"/>
          </div>
         
    </nav>
  );
}

export default Navbar
