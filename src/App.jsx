import React from 'react'
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

export default function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path='/Home' element={<Home/>}/>
  </Routes>

  </>
  )
}
