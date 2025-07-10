
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Navbar from './landing_page/Navbar'
import Pages from './landing_page/Pages/Page';
import Footer from './landing_page/Footer';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pages />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
)
