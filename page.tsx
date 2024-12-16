import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Herotwo from './components/Herotwo'
import Airmax from './components/Airmax'
import Featured from './components/Featured'
import File from './components/File'
import Gear from './components/Gear'

const Homepage = () => {
  return (
    <div>
     
      <Hero/>
      <Herotwo/>
      <Airmax/>
      <Featured/>
      <File/>
      <Gear/>
    </div>
  )
}

export default Homepage