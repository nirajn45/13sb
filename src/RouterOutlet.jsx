import React from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Contacts from './Pages/Contacts/Contacts'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const RouterOutlet = () => {
    return (
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contacts' element={<Contacts />} />
        </Routes>
        </Router>
    )
}

export default RouterOutlet