// components/CustomerReview.tsx
"use client";

import { useState, useEffect } from "react";

type Review = {
  username: string;
  review: string;
   date: string;
};

const CustomerReview = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [username, setUsername] = useState<string>("");
  const [review, setReview] = useState<string>("");

  // Load reviews from localStorage 
  useEffect(() => {
    const storedReviews = localStorage.getItem("reviews");
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  const handleSubmit = () => {
    if (username && review) {
       const date = new Date().toLocaleString(); 
      const newReview = { username, review , date};
      const updatedReviews = [...reviews, newReview];
      setReviews(updatedReviews);

      // Save reviews to localStorage
      localStorage.setItem("reviews", JSON.stringify(updatedReviews));

      setUsername("");
      setReview("");
    }
  };

  return (
    <div className="p-4  rounded max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold my-4">Customer Reviews</h2>

      {/* Review Form */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-4 mb-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          placeholder="Your Review"
          className="border p-4 w-full rounded-lg resize-none mt-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
          rows={2}
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-[#FBEBB5]  text-black px-4 py-2 rounded "
      >
        Submit Review
      </button>

      {/* Display Reviews */}
      <div className="mt-6">
        {reviews.length > 0 ? (
          reviews.map((reviewItem, index) => (
            <div key={index} className="border-b py-2">
              <div className='flex justify-between'>
     <strong>{reviewItem.username}</strong>
              <span className="text-sm text-gray-500 text-end">{reviewItem.date}</span>
              </div>
              
              <p>{reviewItem.review}</p>
            </div>
          ))
        ) : (
          <p className='text-xl text-red-500 text-semibold'>No reviews yet</p>
        )}
      </div>
    </div>
  );
};

export default CustomerReview;
