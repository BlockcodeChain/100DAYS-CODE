import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Blog from './page/Blog'   

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
