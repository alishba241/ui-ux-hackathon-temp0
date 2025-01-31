
import Link from "next/link";
import Navbar from "../shop/navbar";

const SuccessPage = () => {

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-green-600">Payment Successful! 🎉</h1>
        <p>Thank you for your purchase!</p>
          <Link href="/shipment">
            <button className="mt-8 py-2 px-6 bg-black text-white text-sm rounded-md hover:bg-gray-600">
              Track Shipment
            </button>
          </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
