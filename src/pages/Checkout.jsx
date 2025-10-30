import React, { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { bookExperience, validatePromo } from "../api/api";

const Checkout = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);
  const [applying, setApplying] = useState(false);
  const [booking, setBooking] = useState({ loading: false, error: "" });

  const baseAmount = state?.baseAmount ?? 0;
  const total = Math.max(0, baseAmount - discount);

  const applyPromo = async () => {
    setApplying(true);
    try {
      const res = await validatePromo(promo, baseAmount);
      setDiscount(res.discount);
    } catch (e) {
      setDiscount(0);
      alert(e?.response?.data?.message || "Invalid promo");
    } finally {
      setApplying(false);
    }
  };

  const payAndConfirm = async () => {
    if (!state?.experienceId || !state?.dateISO || !state?.slotTime) return;
    if (!fullName || !email) { alert('Enter name and email'); return; }
    setBooking({ loading: true, error: "" });
    try {
      const res = await bookExperience({
        experienceId: state.experienceId,
        customerName: fullName,
        customerEmail: email,
        dateISO: state.dateISO,
        slotTime: state.slotTime,
        numGuests: state.quantity ?? 1,
        promoCode: promo || undefined
      });
      navigate('/success', { state: { refId: res.id } });
    } catch (e) {
      setBooking({ loading: false, error: e?.response?.data?.message || 'Failed' });
      alert(e?.response?.data?.message || 'Failed to book');
      return;
    }
  };

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <Navbar />
      <div className="min-h-screen bg-white flex flex-col items-center px-4 md:px-16 lg:px-24 py-8">
      {/* Page Title */}
      <div className="w-full mb-6 flex items-center gap-2 text-gray-700 text-sm">
        <span className="text-lg cursor-pointer">←</span>
        <p className="font-medium">Checkout</p>
      </div>

      {/* Main Container */}
      <div className="w-full flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-700 mb-1">Full name</p>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div>
              <p className="text-sm text-gray-700 mb-1">Email</p>
              <input
                type="email"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Promo code field */}
          <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
            <input
              type="text"
              placeholder="Promo code"
              className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
            />
            <button onClick={applyPromo} disabled={!promo || applying} className="bg-black text-white px-4 rounded-lg text-sm hover:bg-gray-800 disabled:opacity-60">
              Apply
            </button>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center gap-2 mt-3 text-xs text-gray-600">
            <input type="checkbox" id="terms" className="accent-yellow-500" />
            <label htmlFor="terms">
              I agree to the terms and safety policy
            </label>
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="lg:w-1/3 bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Experience</span>
              <span className="font-medium">{state?.title || 'Experience'}</span>
            </div>
            <div className="flex justify-between">
              <span>Date</span>
              <span>{state?.dateISO || '-'}</span>
            </div>
            <div className="flex justify-between">
              <span>Time</span>
              <span>{state?.slotTime || '-'}</span>
            </div>
            <div className="flex justify-between">
              <span>Qty</span>
              <span>{state?.quantity ?? 1}</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{baseAmount}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>₹0</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          <button onClick={payAndConfirm} disabled={booking.loading}
            className="w-full mt-6 bg-yellow-400 text-black font-medium py-2 rounded-lg hover:bg-yellow-500 disabled:opacity-60">
            {booking.loading ? 'Processing...' : 'Pay and Confirm'}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Checkout;
