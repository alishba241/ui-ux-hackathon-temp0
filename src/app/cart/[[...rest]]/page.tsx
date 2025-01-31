// src/app/cart/page.tsx
import { auth } from "@clerk/nextjs/server";
import React from "react";
import CartPageClient from "./clientcartpage"; // Move the client component logic here
import { SignUp} from "@clerk/nextjs";
import Navbar from "@/app/shop/navbar";
const CartPage = async () => {
  const { userId } = await auth();

  // If the user is not signed in, redirect or render sign-in options
  if (!userId) {
    return (
       <div>
        <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center">
        
        <h1 className="text-2xl font-bold mb-4">Please Sign In or Sign Up</h1>
        <div className="flex space-x-4">
          <SignUp/>
        </div>
      </div>
      </div>
    );
  }

  // Render the client component with any data required
  return <CartPageClient />;
};

export default CartPage;
