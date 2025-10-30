import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const [term, setTerm] = useState(params.get('q') || '')

  const goHome = () => navigate('/')
  const doSearch = () => {
    const q = term.trim()
    if (!q) { navigate('/') ; return }
    navigate(`/?q=${encodeURIComponent(q)}`)
  }
  const onKey = (e) => { if (e.key === 'Enter') doSearch() }
  return (
    <div className=' flex justify-between items-center p-4 h-[87px] pt-[16px] pb-[16px] pl-[124px] pr-[124px]
      max-md:flex-col max-md:gap-4 max-md:h-auto max-md:pl-[20px] max-md:pr-[20px] shadow-lg'>
      
      <div className=' cursor-pointer' onClick={goHome}>
        <img className='w-[100px] h-[55px] max-md:w-[80px] max-md:h-[45px]' src="logo.png" alt="" />
      </div>

      <div className=' flex items-center gap-10
        max-md:flex-col max-md:gap-3 max-md:w-full'>
        
        <input 
          className='bg-[#ededed]  rounded-md pt-[12px] pl-[16px] pb-[12px] pr-[16px] 
          w-[340px] h-[42px] font-medium text-[16px] leading-[24px] text-[#000000] placeholder:text-[#000000] placeholder:opacity-50
          max-md:w-full max-md:text-[14px]' 
          type="text" 
          placeholder='Search Experiences' 
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          onKeyDown={onKey}
        />
        
        <button 
          className='bg-yellow-500 pl-[20px] pr-[20px] font-medium text-[16px] leading-[24px] text-[#000000] 
          w-[87px] h-[42px]  rounded-[10px]
          max-md:w-full max-md:text-[14px]'
          onClick={doSearch}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Navbar
