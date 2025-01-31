"use client";

import { useState, useEffect, Suspense, useCallback } from "react";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { TrackingData } from "../../../lib/helper/types";
import Navbar from "../shop/navbar";
import Link from "next/link";

function TrackShipment() {
  const [labelId, setLabelId] = useState(""); 
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState<string | null>(null); 
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
    
  const searchParams = useSearchParams();
  const router = useRouter();
    const queryLabelId = searchParams?.get("labelId") || ""; 
    
  const handleSubmit = useCallback(async (labelId: string) => {
    if (!labelId) {
      setError("Label ID is required.");
      return;
    }

    setLoading(true); 
    setError(null); 

    try {
      router.replace(`/tracking?labelId=${labelId}`);

      const response = await axios.get(`/api/shipengine/tracking/${labelId}`);
      setTrackingData(response.data); 
    } catch (err) {
      console.error("Error tracking shipment:", err);
      setError("Failed to track shipment. Please check the label ID and try again.");
    } finally {
      setLoading(false); 
    }
  }, [router]);
    
  useEffect(() => {
    if (queryLabelId) {
      setLabelId(queryLabelId); 
      handleSubmit(queryLabelId); 
    }
  }, [queryLabelId, handleSubmit]);

        // fallback for offline

 if (isOffline) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-2xl font-semibold text-red-500">
          <p>YOU ARE OFFLINE!</p>
          <p className='text-lg text-black mt-2'>Please check your internet connection to continue.</p>
        </div>
      </div>
    );
  }
    
  return (
      <div>
          <Navbar />
          <div className="min-h-screen py-8 text-black">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Track Your Shipment</h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(labelId);
            }}
            className="bg-[#FBEBB5] p-6 rounded-lg shadow-md"
          >
            <div className="flex flex-col space-y-4">
              <label htmlFor="labelId" className="text-lg font-medium">
                Enter Label ID or Tracking Number:
              </label>
              <input
                type="text"
                id="labelId"
                value={labelId}
                onChange={(e) => setLabelId(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                placeholder="Enter label ID"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors disabled:bg-gray-500"
              >
                {loading ? "Tracking..." : "Track Shipment"}
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              {error}
            </div>
          )}

       {trackingData && (
          <div className="mt-8 bg-[#FBEBB5] p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Tracking Details</h2>
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Tracking Number:</span>{" "}
                {trackingData.tracking_number}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                {trackingData.status}
              </p>
              <p>
                <span className="font-semibold">Carrier:</span>{" "}
                {trackingData.carrier_code}
              </p>
              <p>
                <span className="font-semibold">Estimated Delivery:</span>{" "}
                {trackingData.estimated_delivery_date}
              </p>
            </div>
          </div>
          )}
          <Link href='/'>
        <button className='mt-8 py-2 px-6 bg-black text-white text-sm rounded-md hover:bg-gray-600'>Back to Home</button>
        </Link>
        </div>
        
      </div>

      </div>
  );
}

export default function TrackingPage (){
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrackShipment />
    </Suspense>
  );
}