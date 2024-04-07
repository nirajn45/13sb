import React from 'react'
import Divider from '../../components/Home/Divider'
import BigText from '../../components/Home/BigText'
import Cards from '../../components/Home/Cards'
import Divider2 from '../../components/Home/Divider2'
import BigText2 from '../../components/Home/BigText2'
import Journey from '../../components/Home/Journey'
import HeroSection from '../../components/Home/HeroSection'
import Login from '../../components/Home/Login'



const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Divider/>
      <BigText/>
      <Divider2/>
      <Cards/>
      <BigText2/>
      <Journey/>
      <Login/>
      
    </div>
  )
}

export default Home