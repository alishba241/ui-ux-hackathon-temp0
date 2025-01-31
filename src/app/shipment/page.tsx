
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Link from "next/link";
import { cartProductsWhichCanBeShipped } from "../../../lib/helper/data";
import { Address, Rate, trackingObjType } from "../../../lib/helper/types";
import Navbar from "../shop/navbar";


const ShippingRatesPage = () => {
  const [shipeToAddress, setshipeToAddress] = useState<Address>({
    name: "John Doe",
    phone: "+1 555-678-1234",
    addressLine1: "1600 Pennsylvania Avenue NW",
    addressLine2: "", 
    cityLocality: "Washington",
    stateProvince: "DC",
    postalCode: "20500",
    countryCode: "US",
    addressResidentialIndicator: "no", 
  });

  const [rates, setRates] = useState<Rate[]>([]);
  const [rateId, setrateId] = useState<string | null>(null);
  const [labelPdf, setLabelPdf] = useState<string | null>(null);
  const [trackingObj, setTrackingObj] = useState<trackingObjType | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
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
    
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    setRates([]);

    try {
      const response = await axios.post("/api/shipengine/get-rates", {
        shipeToAddress,
        packages: cartProductsWhichCanBeShipped.map((product) => ({
          weight: product.weight,
          dimensions: product.dimensions,
        })),
      });
      console.log(response.data);
      setRates(response.data.shipmentDetails.rateResponse.rates);
    } catch (error) {
      console.log(error);
      setErrors(["An error occurred while fetching rates."]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateLabel = async () => {
    if (!rateId) {
      alert("Please select a rate to create a label.");
    }

    setLoading(true);
    setErrors([]);

    try {
      const response = await axios.post("/api/shipengine/label", {
        rateId: rateId,
      });
      const labelData = response.data;
      console.log(labelData);
      setLabelPdf(labelData.labelDownload.href);
      setTrackingObj({
        trackingNumber: labelData.trackingNumber,
        labelId: labelData.labelId,
        carrierCode: labelData.carrierCode,
      });
    } catch (error) {
      console.log(error);
      setErrors(["An error occurred while creating the label."]);
    } finally {
      setLoading(false);
    }
    };
    
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
          <Navbar/>
           <div className="min-h-screen text-black  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-[#FBEBB5] rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Shipping Rates Calculator
        </h1>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* To Address Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Ship To Address
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={shipeToAddress.name}
                onChange={(e) =>
                  setshipeToAddress({ ...shipeToAddress, name: e.target.value })
                }
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                required
              />
              <input
                type="text"
                placeholder="Phone"
                value={shipeToAddress.phone}
                onChange={(e) =>
                  setshipeToAddress({
                    ...shipeToAddress,
                    phone: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                required
              />
              <input
                type="text"
                placeholder="Address Line 1"
                value={shipeToAddress.addressLine1}
                onChange={(e) =>
                  setshipeToAddress({
                    ...shipeToAddress,
                    addressLine1: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                required
              />
              <input
                type="text"
                placeholder="Address Line 2"
                value={shipeToAddress.addressLine2}
                onChange={(e) =>
                  setshipeToAddress({
                    ...shipeToAddress,
                    addressLine2: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <input
                type="text"
                placeholder="City"
                value={shipeToAddress.cityLocality}
                onChange={(e) =>
                  setshipeToAddress({
                    ...shipeToAddress,
                    cityLocality: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                required
              />
              <input
                type="text"
                placeholder="State/Province"
                value={shipeToAddress.stateProvince}
                onChange={(e) =>
                  setshipeToAddress({
                    ...shipeToAddress,
                    stateProvince: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                required
              />
              <input
                type="text"
                placeholder="Postal Code"
                value={shipeToAddress.postalCode}
                onChange={(e) =>
                  setshipeToAddress({
                    ...shipeToAddress,
                    postalCode: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                required
              />
              <input
                type="text"
                placeholder="Country Code (e.g., PK)"
                value={shipeToAddress.countryCode}
                onChange={(e) =>
                  setshipeToAddress({
                    ...shipeToAddress,
                    countryCode: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600 disabled:bg-gray-400"
          >
            {loading ? "Calculating..." : "Get Shipping Rates"}
          </button>
        </form>

        {/* Display Available Rates */}
        {rates.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Available Shipping Rates
            </h2>
            <div className="gap-4 flex items-center flex-wrap">
              {rates.map((rate) => (
                <div
                  key={rate.rateId}
                  className={`p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer ${
                    rateId === rate.rateId
                      ? "border-gray-400 bg-gray-100"
                      : "border-gray-200 bg-white"
                  }`}
                  onClick={() => setrateId(rate.rateId)}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="shippingRate"
                      checked={rateId === rate.rateId}
                      onChange={() => setrateId(rate.rateId)}
                      className="form-radio h-4 w-4 text-black"
                      title="Select shipping rate"
                    />
                    <div>
                      <p className="text-lg font-medium text-gray-700">
                        <strong>Carrier:</strong> {rate.carrierFriendlyName}
                      </p>
                      <p className="text-gray-600">
                        <strong>Service:</strong> {rate.serviceType}
                      </p>
                      <p className="text-gray-800 font-semibold">
                        <strong>Cost:</strong> {rate.shippingAmount.amount}{" "}
                        {rate.shippingAmount.currency}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Create Label Button */}
        {rateId && (
          <div className="mt-8">
            <button
              onClick={handleCreateLabel}
              disabled={loading}
              className="w-full px-4 py-2  bg-black text-white rounded-md hover:bg-gray-600 disabled:bg-gray-400"
            >
              {loading ? "Creating Label..." : "Create Label"}
            </button>
          </div>
        )}
       
        {trackingObj && (
          <div className="mt-8">
  
            <p>Tracking Number: {trackingObj.trackingNumber}</p>
            <p className='mt-2 text-semibold'> Label Id: {trackingObj.labelId}</p>
              <p className='mt-2 text-semibold'> Carrier Code: {trackingObj.carrierCode}</p>
              <div className='mt-6 '>
            <Link href={`/tracking/?labelId=${trackingObj.labelId}`}>
              <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600 disabled:bg-gray-400">Track Order</button>
              </Link>
               {labelPdf && (
         <Link target="_blank" href={labelPdf}> <button className="px-4 py-2 ml-6 bg-black text-white rounded-md hover:bg-gray-600">Download Label</button></Link>
              )}
              </div>
          </div>
        )}
        {errors.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Errors</h2>
            <div className="space-y-2">
              {errors.map((error, index) => (
                <p key={index} className="text-red-500">
                  {error}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>

</div>   
);
};

export default ShippingRatesPage;
