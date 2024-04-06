import React from 'react'
import RouterOutlet from './RouterOutlet'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <RouterOutlet />
      <Footer/>
    </div>
  )
}

export default App