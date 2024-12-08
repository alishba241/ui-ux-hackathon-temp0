import React from 'react'
import ProductDetails from './[id]/page'
import Navbar from '../shop/navbar'

const page = () => {
  return (
      <div>
          <Navbar/>
          <ProductDetails />
          
    </div>
  )
}

export default page

{/* <div className="container mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Image
          src={product.image}
          alt={product.title}
          width={600}
          height={400}
          className="rounded-md"
        />
      </div>

      <div className="space-y-6">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-lg text-gray-500">Rs. {product.price}</p>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex items-center space-x-4">
          <button className="px-6 py-2 bg-black text-white rounded-md">Add to Cart</button>
        </div>
      </div>
      </div> */}
