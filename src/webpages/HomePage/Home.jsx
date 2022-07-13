import React from 'react'
import background from "../../assets/Background.jpg"
import Navbar from '../../components/Navbar/Navbar'
import HomeHeader from '../../components/HomeHeader/HomeHeader'

const Home = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${background})`, width:'100vw', height:'100vh', backgroundSize:"cover"}}>
      <Navbar></Navbar>
      <HomeHeader></HomeHeader>
      </div>

  </div>
  )
}

export default Home