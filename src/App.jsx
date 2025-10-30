import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Checkout from './pages/Checkout'
import Success from './pages/Success'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/success' element={<Success/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
