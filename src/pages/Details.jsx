import React, { useEffect, useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import { getExperienceById } from '../api/api'

const Details = () => {
  const [quantity, setQuantity] = useState(1)
  const [experience, setExperience] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedSlot, setSelectedSlot] = useState('')
  const navigate = useNavigate()
  const { search } = useLocation()
  const id = useMemo(() => new URLSearchParams(search).get('id'), [search])

  useEffect(() => {
    if (!id) { setError('No experience specified'); setLoading(false); return }
    getExperienceById(id)
      .then((data) => setExperience(data))
      .catch((err) => setError(err?.response?.data?.message || 'Failed to load'))
      .finally(() => setLoading(false))
  }, [id])

  const price = experience?.price ?? 0
  const tax = 0
  const total = price * quantity + tax

  const proceedToCheckout = () => {
    if (!experience || !selectedDate || !selectedSlot) return
    navigate('/checkout', {
      state: {
        experienceId: experience._id,
        title: experience.title,
        location: experience.location,
        dateISO: selectedDate,
        slotTime: selectedSlot,
        quantity,
        baseAmount: price * quantity
      }
    })
  }

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-3 gap-10 max-lg:grid-cols-1">
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-600">{error}</div>}
        {/* Left Section */}
        <div className="col-span-2">
          <p className="text-gray-500 mb-3 cursor-pointer">&lt; Details</p>

          {/* Image */}
          <div className="w-full h-[350px] rounded-lg overflow-hidden border border-yellow-400 mb-6">
            <img
              src={experience?.imageUrl || 'temp.jpg'}
              alt="Experience"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{experience?.title || 'Experience'}</h2>
          <p className="text-gray-600 mb-6">{experience?.description || 'Experience details'}</p>

          {/* Choose Date */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Choose date</p>
            <div className="flex flex-wrap gap-2">
              {experience?.availability?.map((d) => (
                <button
                  key={d.date}
                  onClick={() => { setSelectedDate(d.date); setSelectedSlot('') }}
                  className={`px-4 py-2 rounded-md border text-sm ${selectedDate === d.date ? 'bg-yellow-400 text-black font-medium' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {d.date}
                </button>
              ))}
            </div>
          </div>

          {/* Choose Time */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Choose time</p>
            <div className="flex flex-wrap gap-2">
              {experience?.availability?.find((d) => d.date === selectedDate)?.slots?.map((t) => (
                <button
                  key={t.time}
                  onClick={() => setSelectedSlot(t.time)}
                  disabled={t.isBooked}
                  className={`px-4 py-2 text-sm rounded-md border relative ${
                    t.isBooked
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : selectedSlot === t.time
                        ? 'bg-yellow-100 text-gray-900'
                        : 'bg-white text-gray-700 hover:bg-yellow-100'
                  }`}
                >
                  {t.time}
                  {t.isBooked && (
                    <span className="absolute text-xs text-gray-400 right-2 bottom-1">
                      Sold out
                    </span>
                  )}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              All times are in IST (GMT +5:30)
            </p>
          </div>

          {/* About Section */}
          <div>
            <p className="font-semibold mb-2">About</p>
            <div className="bg-gray-100 text-gray-600 text-sm rounded-md p-3">
              Scenic routes, trained guides, and safety briefing. Minimum age 10.
            </div>
          </div>
        </div>

        {/* Right Pricing Section */}
        <div className="bg-white p-6 rounded-xl shadow-md h-fit">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">Starts at</p>
            <p className="font-semibold text-gray-800">₹{price}</p>
          </div>

          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">Quantity</p>
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 text-lg text-gray-700"
              >
                −
              </button>
              <p className="px-4">{quantity}</p>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 text-lg text-gray-700"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-600">Subtotal</p>
            <p className="text-gray-800 font-medium">₹{price * quantity}</p>
          </div>

          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">Taxes</p>
            <p className="text-gray-800 font-medium">₹{tax}</p>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between items-center mb-6">
            <p className="font-semibold text-gray-800">Total</p>
            <p className="font-bold text-lg text-gray-900">₹{total}</p>
          </div>

          <button onClick={proceedToCheckout} disabled={!selectedDate || !selectedSlot}
            className={`w-full ${selectedDate && selectedSlot ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-gray-200 text-gray-500 cursor-not-allowed'} font-medium py-2 rounded-md`}>
            Continue to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Details
