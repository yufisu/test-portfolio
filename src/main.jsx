import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Mainpage from './components/Mainpage.jsx'
import Aboutme from './components/Aboutme.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import Works from './components/Works.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className='flex font-["sf-medium"]'>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route index element={<Mainpage/>}/>
            <Route path='/test-portfolio/' element={<Mainpage />}/>
            <Route path='/test-portfolio/home' element={<Mainpage />}/>
            <Route path='/test-portfolio/about' element={<Aboutme/>}/>
            <Route path='/test-portfolio/works' element={<Works/>}/>
            <Route path='/test-portfolio/contact' element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  </React.StrictMode>
)
