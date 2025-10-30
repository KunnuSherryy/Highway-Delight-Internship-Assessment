import React, { useEffect, useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import { getExperiences } from '../api/api'
import Card from '../components/Card'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const q = (params.get('q') || '').trim().toLowerCase()

  const filtered = useMemo(() => {
    if (!q) return experiences
    return experiences.filter((e) =>
      (e.title || '').toLowerCase().includes(q) ||
      (e.location || '').toLowerCase().includes(q)
    )
  }, [experiences, q])

  useEffect(() => {
    let mounted = true
    getExperiences()
      .then((data) => { if (mounted) setExperiences(data) })
      .catch((err) => setError(err?.response?.data?.message || 'Failed to load'))
      .finally(() => setLoading(false))
    return () => { mounted = false }
  }, [])

  return (
    <div>
      <Navbar />

      <div className='mt-10 px-[124px] flex flex-wrap gap-8 justify-center max-lg:px-[60px] max-md:px-[20px] max-sm:px-[10px]'>
        {loading && <div>Loading...</div>}
        {error && <div className='text-red-600'>{error}</div>}
        {!loading && !error && filtered.map((e) => (
          <Card key={e._id} experience={e} />
        ))}
      </div>
    </div>
  )
}

export default Home
