import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import React from 'react';

 async function  Picks() {
  interface IData {
    productName: string;
    productPrice: number;
    productImageUrl: string;
  }

   //  ! getting data from sanity
   
   const data: IData[] = await client.fetch(`
     *[_type == "topPicks" ] | order(order asc) {
   productName,
     productPrice,
     "productImageUrl": productImage.asset->url
 }
    `)
   

    // console.log(data)
  
 // [
  //   {
  //     id: 1,
  //     title: 'Trenton modular sofa_3',
  //     price: '25,000.00',
  //     image: '/Trenton modular sofa_3 1.png',
  //   },
  //   {
  //     id: 2,
  //     title: 'Granite dining table with dining chair',
  //     price: '25,000.00',
  //     image: '/Granite dining table with dining chair 1.png',
  //   },
  //   {
  //     id: 3,
  //     title: 'Outdoor bar table and stool',
  //     price: '25,000.00',
  //     image: '/Outdoor bar table and stool 1.png',
  //   },
  //   {
  //     id: 4,
  //     title: 'Plain console with teak mirror',
  //     price: '25,000.00',
  //     image: '/Plain console with teak mirror 1.png',
  //   },
  // ];

  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 bg-white">
      {/* Heading Section */}
      <h1 className=" text-[24px] md:text-[36px] font-medium text-center">Top Picks For You</h1>
      <p className="text-[15px] font-medium text-[#9F9F9F] text-center max-w-2xl pt-4">
        Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16 md:w-full w-[78%]">
        {data.map((product,index) => (
          <div
            key={index}
            className="hover:shadow-lg  md:w-[287px] md:h-[397px] flex flex-col items-center rounded-[4px]  p-4"
          >
            {/* Product Image */}
            <div className="flex justify-center items-center h-[200px] w-full mb-4">
              <Image
                src={product.productImageUrl}
                alt={product.productName}
                width={250}
                height={250}
                className="object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="w-full mt-[35px]">
              <p className=" text-[12px] md:text-[15px] md:font-medium text-left">{product.productName}</p>
              <p className="text-black text-[18px] md:text-[24px] font-medium md:font-bold text-left mt-2">Rs. {product.productPrice}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <a href='#'className="mt-5 md:mt-10 inline-block text-[14px] md:text-[20px] font-medium text-black underline underline-offset-8 md:underline-offset-[19px] decoration-2">
        View More
      </a>
    </div>
  );
}

export default Picks;
