'use client'

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import FilterBar from "./filter";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export interface IProductsData {
  product_name: string;
  product_description: string;
  price: number;
  stock: number;
  sizes_available: string[];
  ImageUrl: string;
  id: string;
}

async function fetchProductsData(
  page: number,
  limit: number,
  filters: {
    category: string
    price_range: string

  }
) {
 try {
    const filterConditions = [
      filters.category && `category == "${filters.category}"`,
      filters.price_range && `price_range == "${filters.price_range}"` ,
    ]
      .filter(Boolean)
      .join(" && ");
console.log("Generated filter conditions:", filterConditions);

    const query = `
      *[_type == "product" ${filterConditions ? `&& ${filterConditions}` : ""}] {
        product_name,
        product_description,
        price,
        stock,
        sizes_available,
        "ImageUrl": image.asset->url,
        id,
        category,
        price_range,
        tags
      }[${(page - 1) * limit}..${page * limit - 1}]
    `;
console.log("Generated query:", query);

    const products: IProductsData[] = await client.fetch(query);
    const totalCount = await client.fetch(
      `count(*[_type == "product" ${filterConditions ? `&& ${filterConditions}` : ""}])`
    );

    return { products, totalCount };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
}

function FilteredProducts() {
  const [products, setProducts] = useState<IProductsData[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [filters, setFilters] = useState<{ category: string; price_range: string;}>({
    category: "",
    price_range: "",
  });

  const limit = 8;
 

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true)
      try {
        const {products, totalCount} = await fetchProductsData(currentPage, limit, filters);
        setProducts(products);
        setTotalProducts(totalCount);
      } catch {
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [currentPage, filters]);


  const handleFilterChange = (filters: { category: string; price_range: string;   }) => {
    setFilters(filters);
    setCurrentPage(1); // set all filtered products to first page
  };

  
  // Loading and error fallback UI
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          <span className="text-black text-lg font-semibold">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-lg font-semibold text-red-500">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <div className="flex flex-col items-center justify-center px-6 pb-20 bg-white">
            <FilterBar onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-8 md:mt-16">
        {products?.map((product) => (
          <Link href={`/productpage/${product.id}`} key={product.id}>
            <div className="hover:shadow-lg md:w-[287px] md:h-[397px] flex flex-col items-center rounded-[4px] p-4 cursor-pointer">
              <div className="flex justify-center items-center h-[200px] w-full mb-4">
                <Image
                  src={product.ImageUrl}
                  alt={product.product_name}
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
              <div className="w-full mt-[35px]">
                <p className="text-[12px] md:text-[15px] md:font-medium text-left">
                  {product.product_name}
                </p>
                <p className="text-black text-[18px] md:text-[24px] font-medium md:font-bold text-left mt-2">
                  Rs. {product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 md:gap-8 mt-10 md:mt-16">
        {/* Page numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`md:h-[60px] h-[40px] text-[12px] md:text-[18px] md:w-[60px] w-[40px] rounded-[10px] ${
              currentPage === index + 1
                ? "bg-[#FBEBB5] text-black"
                : "bg-[#FFF9E5] hover:bg-[#FBEBB5] text-black"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
        >
          
        </button>
      </div>
    </div>
  );
}

export default FilteredProducts;
