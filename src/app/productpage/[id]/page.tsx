'use client'

import Navbar from '@/app/shop/navbar';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import RelatedProducts from './relatedproducts';
import { useCart } from '@/app/components/cartcontext';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { useWishlist } from '@/app/components/context';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

interface IProductsData {
  product_name: string;
  product_description: string;
  price: number;
  stock: number;
  sizes_available: string[];
  ImageUrl: string;
  id: number;
}


const ProductDetails = () => {
 const { id } = useParams() as unknown as { id: string }; 
  const { cart, addToCart } = useCart();
  const numericId = parseInt(id, 10);
  const {wishlist, addToWishlist} = useWishlist();
  const [product, setProduct] = useState<IProductsData | null>(null);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [wishlistNotificationVisible, setWishlistNotificationVisible] = useState(false);
    const [productNotFound, setProductNotFound] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    // Check if the user is offline
    const checkOfflineStatus = () => {
      setIsOffline(!navigator.onLine);  
    };

    window.addEventListener('offline', checkOfflineStatus);
    window.addEventListener('online', checkOfflineStatus);

    return () => {
      window.removeEventListener('offline', checkOfflineStatus);
      window.removeEventListener('online', checkOfflineStatus);
    };
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await client.fetch(
        `
        *[_type == "product" && id == $id] {
          product_name,
          product_description,
          price,
          stock,
          sizes_available,
          "ImageUrl": image.asset->url,
          id,
           category,
           tags,
           price_range
        }[0]
        `,
        { id: numericId }
        );
        console.log(fetchedProduct);
      setProduct(fetchedProduct);

      // fallback if product not found

      if (!fetchedProduct) {
        setProductNotFound(true);
      } else {
        setProduct(fetchedProduct);
      }
    };

    if (numericId) {
      if (navigator.onLine) {
        fetchProduct();
      } else {
        setIsOffline(true); 
      }
    }
  }, [numericId]);

  // fallback for offline

 if (isOffline) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-2xl font-semibold text-red-500">
          <p>YOU ARE OFFLINE!</p>
          <p className='text-lg text-black mt-2'>Please check your internet connection to view the product details.</p>
        </div>
      </div>
    );
  }

  // Fallback UI for product not found 

if (productNotFound) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-lg font-semibold text-red-500">
          <p>Product Not Found</p>
          <p>The product you&#39;re looking for doesn&#39;t exist.</p>
        </div>
      </div>
    );
  }

  //! Handle add to cart
 const handleAddToCart = () => {
  if (product && !cart.some((item) => item.id === product.id)) {
    const formattedProduct = {
      id: product.id,
      name: product.product_name,
      image: product.ImageUrl,
      price: product.price,
      stock: product.stock,
      sizes: product.sizes_available,
    };
    addToCart(formattedProduct);
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 3000);
  }
};

const handleAddToWishList = () => {
  if (product && !wishlist.some((item) => item.id === product.id)) {
    const wishProducts = {
      id: product.id,
      name: product.product_name,
      image: product.ImageUrl,
      price: product.price,
      stock: product.stock,
      sizes: product.sizes_available,
    };
    addToWishlist(wishProducts);
    setWishlistNotificationVisible(true);
    setTimeout(() => {
      setWishlistNotificationVisible(false);
    }, 3000);
  }
};

  if (!product) {
    return (
        <div className="flex items-center justify-center h-screen">
  <div className="flex items-center space-x-3">
    <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
    <span className="text-black text-lg font-semibold">Loading...</span>
  </div>
</div>
    )
  }

  return (
    <div className="font-sans">
      <Navbar />
      {/* Breadcrumb */}
      <div className="md:h-20 md:px-20 flex items-center px-8 gap-2 md:gap-6 ">
        <p className="text-[11px] md:text-[16px] text-[#9F9F9F]">Home</p>
        <AiOutlineRight className="text-xs" />
        <p className="text-[11px] md:text-[16px] text-[#9F9F9F]">Shop</p>
        <AiOutlineRight className="text-xs" />
         <Image
                  src={'/Line 5.png'}
                      alt=''
                      height={1.5}
                      width={1.5}
                      
                  />
        <p className="text-[12px] md:text-[16px] font-medium">{product.product_name}</p>
      </div>

      {/* Product Section */}
      <div className="flex md:flex-row flex-col md:px-20 px-8 mt-6">
         {/* notification for cart*/}
      {notificationVisible && (
       <div className="fixed top-32 right-10 bg-white text-black px-6 py-4 rounded-lg shadow-lg border border-gray-200 w-[280px]">
  <p className="font-medium text-sm">
    Product Added to Cart
  </p>

  {/* Progress Bar */}
  <div className="relative mt-2 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
    <div className="absolute top-0 left-0 h-full bg-green-500 rounded-full animate-progressFill">
      <div className="h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent bg-[length:200%_100%] animate-moveLine"></div>
    </div>
  </div>
</div>

      )}
      {/* Toast Notification for wishlist */}
    {wishlistNotificationVisible && (
      <div className="fixed top-40 right-10 bg-white text-black px-6 py-4 rounded-lg shadow-lg border border-gray-200 w-[280px]">
        <p className="font-medium text-sm ">
          Product Added to Wishlist
        </p>
        <div className="relative mt-2 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-green-500 rounded-full animate-progressFill">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent bg-[length:200%_100%] animate-moveLine"></div>
          </div>
        </div>
      </div>
    )}
      
        {/*  Product Image */}
        <div className="md:ml-10 md:w-[380px] w-[250px] md:h-[500px] flex justify-center items-center rounded-lg">
          <Image
            src={product.ImageUrl}
            alt={product.product_name}
            height={300}
            width={300}
            className=" md:w-[500px] md:h-[500px] w-[230px] h-[230px]"
          />
        </div>

        {/* Product Details */}
        <div className="md:ml-24 md:w-[400px] w-[250px] mt-8 md:mt-0">
          <h1 className="text-[20px] md:text-[42px] font-semibold">{product.product_name}</h1>
                  <h2 className="text-[16px] md:text-[24px] fot-medium text-[#9F9F9F] ">Rs. {product.price}</h2>
                            <h2 className="text-[12px] md:text-[14px] font-medium text-[#f83d3d] ">Stock {product.stock}</h2>
         
          <p className="text-gray-700 text-[11px] md:text-sm  mt-2 md:mt-4">{product.product_description}</p>

          {/* Size Selection */}
          <div className="mt-4">
            <h3 className="text-[#9F9F9F] text-[12px] md:text-sm font-medium">Size</h3>
            <div className="flex gap-2 mt-3">
              <button className="w-8 h-8 bg-[#FAF4F4] focus:bg-[#FBEBB5] rounded-[5px] text-sm font-medium">{product.sizes_available[0]}</button>
              <button className="w-8 h-8 bg-[#FAF4F4] focus:bg-[#FBEBB5] duration-100 rounded-[5px] text-sm font-medium">{product.sizes_available[1]}</button>
              <button className="w-8 h-8 bg-[#FAF4F4] focus:bg-[#FBEBB5] duration-100 rounded-[5px] text-sm font-medium">{product.sizes_available[2]}</button>
           
            {/* Add to Wishlist */}
<div className="flex items-center relative left-8 -top-3 bg-[#FAF4F4] px-1.5 py-2.5 rounded-[4px]">
  {wishlist.some((item) => item.id === product.id) ? (
    <AiFillHeart
      className="text-red-500 text-2xl cursor-pointer"
      onClick={() => {
      }}
    />
  ) : (
    <AiOutlineHeart
      className="text-gray-500 text-2xl cursor-pointer hover:text-red-500 transition-colors duration-200"
      onClick={() => handleAddToWishList()}
    />
  )}
</div>
            </div>
            
          </div>

          

           {/* Add to Cart */}
          <div className="mt-8 flex gap-4 items-center">
            {cart.some((item) => item.id === product.id) ? (
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded "
                disabled
              >
                Added to Cart
              </button>
            ) : (
            <div className=''>
              <button
                className="bg-[#FBEBB5]  text-black px-4 py-2 rounded"
                onClick={() => handleAddToCart()}
              >
                Add to Cart
                  </button>
                 
                </div>
            )}
         
             <Link href='/cart'>
                  <button
                className="bg-[#FBEBB5] text-black px-4 py-2 rounded"
              >
                View Cart
                </button>
                  </Link>
          </div>
        
        </div>
      </div>
      <RelatedProducts/>
    </div>
  );
};

export default ProductDetails;