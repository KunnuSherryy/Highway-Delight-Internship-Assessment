import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ experience }) => {
  const navigate = useNavigate()
  const title = experience?.title || 'Experience'
  const location = experience?.location || 'Location'
  const price = experience?.price ?? 0
  const imageUrl = experience?.imageUrl || 'temp.jpg'

  const goToDetails = () => {
    if (experience?._id) {
      navigate(`/details?id=${experience._id}`)
    }
  }
  return (
    <div className='flex flex-col items-center justify-center w-[280px] bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg
    max-md:w-[90%] max-md:rounded-xl max-md:shadow-sm'>
      
      {/* Image Section */}
      <div className='w-full h-[180px] overflow-hidden max-md:h-[150px]'>
        <img 
          src={imageUrl} 
          alt="Experience" 
          className='w-full h-full object-cover'
        />
      </div>

      {/* Content Section */}
      <div className='flex flex-col items-start justify-center w-full p-4 bg-[#f8f9fa]
      max-md:p-3'>
        
        {/* Title and Location */}
        <div className='flex items-center justify-between w-full mb-2
        max-md:flex-col max-md:items-start max-md:gap-1'>
          <p className='text-lg font-semibold text-gray-800 max-md:text-base'>{title}</p>
          <p className='bg-[#ededed] pt-[4px] pl-[8px] pb-[4px] pr-[8px] text-sm text-gray-500 rounded-md max-md:text-xs'>
            {location}
          </p>
        </div>

        {/* Description */}
        <div className='mb-4 max-md:mb-2'>
          <p className='text-sm text-gray-600 leading-5 max-md:text-xs'>
            Curated small-group experience with certified guides and all safety gear included.
          </p>
        </div>

        {/* Price & Button */}
        <div className='flex items-center justify-between w-full
        max-md:flex-col max-md:items-start max-md:gap-2'>
          <p className='text-lg font-bold text-gray-800 max-md:text-base'>₹{price}</p>
          <button onClick={goToDetails} className='bg-yellow-500 text-black text-sm font-medium py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-200
          max-md:w-full max-md:text-sm max-md:py-2'>
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
