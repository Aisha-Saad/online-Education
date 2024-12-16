import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './hero/HAbout'
import Test from './testiomonal/Test'
import Hblog from '../blog/Hblog'

const Home = () => {
  return (
    <>
    <Hero/>
    <AboutCard/>
    <HAbout/>
    <Test/>
    <Hblog/>
    </>
  )
}

export default Home