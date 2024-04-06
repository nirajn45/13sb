import React from 'react'
import Navbar from './Layout/Navbar'
import RouterOutlet from './RouterOutlet'
import Footer from './Layout/Footer'


const App = () => {
  return (
    <div>
     <Navbar></Navbar>
     <RouterOutlet></RouterOutlet>
     <Footer></Footer>
    </div>
  )
}

export default App