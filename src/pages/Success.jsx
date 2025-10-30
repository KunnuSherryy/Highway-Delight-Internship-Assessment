import React from "react";
import Navbar from "../components/Navbar";
import { CheckCircle } from "lucide-react"; // ✅ lightweight icon
import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="bg-[#fafafa] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        {/* Success Icon */}
        <CheckCircle className="text-green-500 w-16 h-16 mb-4" />

        {/* Confirmation Text */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Booking Confirmed
        </h1>
        <p className="text-gray-600 text-sm mb-6">Ref ID: {state?.refId || '—'}</p>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="bg-gray-200 text-gray-800 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
