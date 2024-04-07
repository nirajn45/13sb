import React from 'react'
import Head from '../../components/About/Head';
import LowerCard from '../../components/About/LowerCard';
import Cleaning from '../../components/About/cleaning';
import Vision from '../../components/About/Vision';


const About = () => {
  return (
    <div>
      <Head/>
      <Cleaning></Cleaning>
      <Vision></Vision>
      <LowerCard/>
    </div>
  )
}

export default About;
