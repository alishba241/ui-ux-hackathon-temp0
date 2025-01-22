"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Product } from "./cartcontext";

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (item: Product) => void;
  removeFromWishlist: (item: Product) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const savedWish = localStorage.getItem("wishlist");
      return savedWish ? JSON.parse(savedWish) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (item: Product) => {
    if (!wishlist.includes(item)) {
      setWishlist([...wishlist, item]);
    }
  };

  const removeFromWishlist = (item: Product) => {
    setWishlist(wishlist.filter((i) => i !== item));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
