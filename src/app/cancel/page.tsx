import Navbar from "../shop/navbar";

const CancelPage = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-red-600">Payment Cancelled</h1>
      <p>Your payment was not processed. Please try again.</p>
    </div>
    </div>
  );
};

export default CancelPage;
