'use client'

import Navbar from '@/app/shop/navbar';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { FaFacebook, FaStar } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';

const data = [
 

   {
      id: 1,
      title: 'Trenton modular sofa_3',
      price: '25,000.00',
      image: '/Trenton modular sofa_3 1.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 2,
      title: 'Granite dining table with dining chair',
      price: '25,000.00',
      image: '/Granite dining table with dining chair 1.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 3,
      title: 'Outdoor bar table and stool',
      price: '25,000.00',
      image: '/Outdoor bar table and stool 1.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 4,
      title: 'Plain console with teak mirror',
      price: '25,000.00',
      image: '/Plain console with teak mirror 1.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

      },
    {
      id: 5,
      title: 'Grain coffee table',
      price: '15,000.00',
      image: '/Grain coffee table 1.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 6,
      title: 'Kent coffee table',
      price: '225,000.00',
      image: '/Kent coffee table 1.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 7,
      title: 'Round coffee table_color 2',
      price: '251,000.00',
      image: '/Round coffee table_color 2 1.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 8,
      title: 'Reclaimed teak coffee table',
      price: '25,200.00',
      image: '/Reclaimed teak coffee table 1.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

      },
    {
      id: 9,
      title: 'Plain console_',
      price: '258,200.00',
      image: '/Plain console_ 1.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 10,
      title: 'Reclaimed teak Sideboard',
      price: ' 20,000.00',
      image: '/Reclaimed teak coffee table 1.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 11,
      title: 'SJP_0825 ',
      price: '200,000.00',
      image: '/SJP_0825  1.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 12,
      title: 'Bella chair and table',
      price: ' 100,000.00',
      image: '/Bella chair and table 1.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

      },
     {
      id: 13,
      title: 'Granite square side table',
      price: '258,200.00',
      image: '/Granite square side table 1.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 14,
      title: 'Asgaard sofa',
      price: ' 250,000.00',
      image: '/Asgaard sofa 2.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 15,
      title: 'Maya sofa three seater',
      price: ' 115,000.00',
      image: '/Maya sofa three seater 1.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 16,
      title: 'Outdoor sofa set',
      price: ' 244,000.00',
      image: '/Outdoor sofa set 1.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
  
];

const ProductDetails = () => {
  const params = useParams(); 
  const productId = Number(params.id);
  const product = data.find((item) => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="font-sans">
      <Navbar />
      {/* Breadcrumb */}
      <div className="h-20 px-20 flex items-center gap-6 ">
        <p className="text-[16px] text-[#9F9F9F]">Home</p>
        <AiOutlineRight className="text-xs" />
        <p className="text-[16px] text-[#9F9F9F]">Shop</p>
        <AiOutlineRight className="text-xs" />
         <Image
                  src={'/Line 5.png'}
                      alt=''
                      height={1.5}
                      width={1.5}
                      
                  />
        <p className="text-[16px] font-medium">{product.title}</p>
      </div>

      {/* Product Section */}
      <div className="flex px-20 mt-6">
        {/* Thumbnail Images */}
        <div className="flex flex-col gap-4  items-center">
          <Image
            src="/Outdoor sofa set 2.png"
            alt=""
            height={600}
            width={600}
            className="w-[100px] h-[90px] bg-[#FFF9E5] rounded-lg "
          />
          <Image
            src="/Outdoor sofa set_2 1.png"
            alt=""
            height={600}
            width={600}
            className="w-[100px] h-[90px] bg-[#FFF9E5] rounded-lg "
          />
          <Image
            src="/Stuart sofa 1.png"
            alt=""
            height={600}
            width={600}
            className="w-[100px] h-[90px] bg-[#FFF9E5] rounded-lg "
          />
          <Image
            src="/Maya sofa three seater (1) 1.png"
            alt=""
            height={600}
            width={600}
            className="w-[100px] h-[90px] bg-[#FFF9E5] rounded-lg "
          />
        </div>

        {/* Main Product Image */}
        <div className="ml-10 bg-[#FFF9E5] w-[380px] h-[500px] flex justify-center items-center rounded-lg">
          <Image
            src={product.image}
            alt={product.title}
            height={500}
            width={500}
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="ml-24 w-[400px]">
          <h1 className="text-[42px] font-semibold">{product.title}</h1>
          <h2 className="text-[24px] fot-medium text-[#9F9F9F] ">Rs. {product.price}</h2>
          <div className="flex items-center mt-3">
            <FaStar className="text-[#FFDA5B] mr-1" />
            <FaStar className="text-[#FFDA5B] mr-1" />
            <FaStar className="text-[#FFDA5B] mr-1" />
            <FaStar className="text-[#FFDA5B] mr-1" />
            <FaStar className="text-[#FFDA5B] mr-1" />
             <Image
                  src={'/Line 5.png'}
                      alt=''
                      height={1}
              width={1}
              className='mx-4'
                      
                  />
            <p className="text-sm text-[#9F9F9F]">  5 Customer Reviews</p>
          </div>
          <p className="text-gray-700 text-sm mt-4">{product.description}</p>

          {/* Size Selection */}
          <div className="mt-4">
            <h3 className="text-[#9F9F9F] text-sm font-medium">Size</h3>
            <div className="flex gap-2 mt-3">
              <button className="w-8 h-8 bg-[#FBEBB5] rounded-[5px] text-sm font-medium">L</button>
              <button className="w-8 h-8 bg-[#FAF4F4] hover:bg-[#FBEBB5] duration-100 rounded-[5px] text-sm font-medium">XL</button>
              <button className="w-8 h-8 bg-[#FAF4F4] hover:bg-[#FBEBB5] duration-100 rounded-[5px] text-sm font-medium">XS</button>
            </div>
          </div>

          {/* Color Selection */}
          <div className="mt-6">
            <h3 className="text-[#9F9F9F] text-sm font-medium">Color</h3>
            <div className="flex gap-3 mt-3">
              <button className="h-8 w-8 rounded-full bg-[#816DFA]"></button>
              <button className="h-8 w-8 rounded-full bg-black"></button>
              <button className="h-8 w-8 rounded-full bg-[#CDBA7B]"></button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="mt-8 flex gap-4 items-center">
            <button className="px-8 py-3 border border-[#9F9F9F] hover:bg-[#FBEBB5] duration-200 hover:border-[#FBEBB5] rounded-[10px] text-black"><span className='relative right-5'>-</span> 1 <span className='relative left-5'>+</span></button>
            <button className="border border-black text-black px-11 py-3 rounded-[12px] text-[16px] hover:bg-black duration-300 hover:text-white ">
              Add to Cart
            </button>
          </div>
          <div className='border-t border-[#9F9F9F]  mt-10 w-full'>
            <div className='flex gap-4 mt-6'>
               <div>
              <ul className='text-[16px] text-[#9F9F9F] leading-[35px]'>
                <li>SKU</li>
              <li>Category</li>
              <li>Tags</li>
              <li>Share</li>
              </ul>
          </div>
           <div>
              <ul  className='text-[16px] text-[#9F9F9F] leading-[35px]'>
                <li>:  </li>
              <li> : </li>
              <li> : </li>
              <li> : </li>
              </ul>
          </div>
            <div>
              <ul  className='text-[16px] text-[#9F9F9F] leading-[35px]'>
                <li> SS001</li>
              <li> Sofas</li>
              <li> Sofa,Chair,Home,Shop</li>
              <li><FaFacebook/> <FaLinkedinIn/></li>
              </ul>
          </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
