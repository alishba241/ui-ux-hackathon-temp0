import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function FilteredProducts() {
  interface IData {
    id: number;
    title: string;
    price: string;
    image: string;
  }

 const data: IData[] = [
    {
      id: 1,
      title: 'Trenton modular sofa_3',
      price: '25,000.00',
      image: '/Trenton modular sofa_3 1.png',
    },
    {
      id: 2,
      title: 'Granite dining table with dining chair',
      price: '25,000.00',
      image: '/Granite dining table with dining chair 1.png',
    },
    {
      id: 3,
      title: 'Outdoor bar table and stool',
      price: '25,000.00',
      image: '/Outdoor bar table and stool 1.png',
    },
    {
      id: 4,
      title: 'Plain console with teak mirror',
      price: '25,000.00',
      image: '/Plain console with teak mirror 1.png',
      },
    {
      id: 5,
      title: 'Grain coffee table',
      price: '15,000.00',
      image: '/Grain coffee table 1.png',
    },
    {
      id: 6,
      title: 'Kent coffee table',
      price: '225,000.00',
      image: '/Kent coffee table 1.png',
    },
    {
      id: 7,
      title: 'Round coffee table_color 2',
      price: '251,000.00',
      image: '/Round coffee table_color 2 1.png',
    },
    {
      id: 8,
      title: 'Reclaimed teak coffee table',
      price: '25,200.00',
      image: '/Reclaimed teak coffee table 1.png',
      },
    {
      id: 9,
      title: 'Plain console_',
      price: '258,200.00',
      image: '/Plain console_ 1.png',
    },
    {
      id: 10,
      title: 'Reclaimed teak Sideboard',
      price: ' 20,000.00',
      image: '/Reclaimed teak coffee table 1.png',
    },
    {
      id: 11,
      title: 'SJP_0825 ',
      price: '200,000.00',
      image: '/SJP_0825  1.png',
    },
    {
      id: 12,
      title: 'Bella chair and table',
      price: ' 100,000.00',
      image: '/Bella chair and table 1.png',
      },
     {
      id: 13,
      title: 'Granite square side table',
      price: '258,200.00',
      image: '/Granite square side table 1.png',
    },
    {
      id: 14,
      title: 'Asgaard sofa',
      price: ' 250,000.00',
      image: '/Asgaard sofa 2.png',
    },
    {
      id: 15,
      title: 'Maya sofa three seater',
      price: ' 115,000.00',
      image: '/Maya sofa three seater 1.png',
    },
    {
      id: 16,
      title: 'Outdoor sofa set',
      price: ' 244,000.00',
      image: '/Outdoor sofa set 1.png',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-6 pb-20 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-8  md:mt-16">
        {data.map((product) => (
          <Link href={`/productpage/${product.id}`} key={product.id}>
            <div className="hover:shadow-lg  md:w-[287px] md:h-[397px] flex flex-col items-center rounded-[4px] p-4 cursor-pointer">
              <div className="flex justify-center items-center h-[200px] w-full mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
              <div className="w-full mt-[35px]">
                <p className="text-[12px] md:text-[15px] md:font-medium text-left">{product.title}</p>
                <p className="text-black text-[18px] md:text-[24px] font-medium md:font-bold text-left mt-2">Rs. {product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 md:gap-8 mt-10 md:mt-16">
        <button className="md:h-[60px] h-[40px] text-[12px] md:text-[18px] md:w-[60px] w-[40px] rounded-[10px] bg-[#FBEBB5] text-black">1</button>
        <button className="md:h-[60px] h-[40px] text-[12px] md:text-[18px] md:w-[60px] w-[40px] bg-[#FFF9E5] hover:bg-[#FBEBB5]  rounded-[10px] text-black">2</button>
        <button className="md:h-[60px] h-[40px] text-[12px] md:text-[18px] md:w-[60px] w-[40px] bg-[#FFF9E5] hover:bg-[#FBEBB5]  rounded-[10px] text-black">3</button>
        <button className="md:h-[60px] h-[40px] text-[12px] md:text-[18px] md:w-[98px] w-[70px] bg-[#FFF9E5] hover:bg-[#FBEBB5]  rounded-[10px] text-black">Next</button>
      </div>
    </div>
  );
}

export default FilteredProducts;





