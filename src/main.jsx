import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Mainpage from './components/Mainpage.jsx'
import Aboutme from './components/Aboutme.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className='flex font-["sf-medium"]'>
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route index element={<Mainpage />}/>
            <Route path='/home' element={<Mainpage />}/>
            <Route path='/about' element={<Aboutme/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  </React.StrictMode>
)
