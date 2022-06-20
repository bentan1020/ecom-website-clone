import React from 'react'
import background from "../images/Background.jpg"
import Navbar from './Navbar'
import styled from 'styled-components'
import ProductImage from "../images/productImage.png"

const Row = styled.div`
  display:flex;
  padding-top:50px;
`

const InsideContainers = styled.div`
  flex:1;
  position: relative; /*for product image to align*/
  padding:100px;  
`

const Headline = styled.h1`
  font-size:50px;
  font-family: century, sans-serif;
  color: white;
  font-weight:100; 
  letter-spacing: 1px;
`

const CallToAction = styled.h1`
  font-size:26px; 
  font-family: century, sans-serif;
  color: white;
  font-weight:100; 
  letter-spacing: 0.6px;
`

const CallToActionButton = styled.button`
  border-radius:10px;
  margin-top: 10px;
  padding: 25px 30px;
  text-align: center;
  border-radius: 10px;
  border: None;
  font-family: century, sans-serif;
  font-size: 15px;
  cursor: pointer;
`


const HomeTop = () => {
  return (
    <div  style={{ backgroundImage: `url(${background})`, width:'100vw', height:'100vh', backgroundSize:"cover"}}>

      <Navbar></Navbar>

      <Row>

        <InsideContainers>
          <Headline>Get to know a calmer, more mindful you.</Headline>
          <CallToAction>The Apollo™ wearable helps your body recover from stress, so you can relax, focus, sleep better, and feel better.</CallToAction>
          <CallToActionButton>Get Apollo ---{'>'}</CallToActionButton>
        
        </InsideContainers>

        <InsideContainers>
          <img src={ProductImage} class="productImage" style={{
            width:340, 
            height:450,
            position:'absolute',
            margin:'auto',
            top:0,
            left:0,
            right:0,
            bottom:0}} alt="productImage"/>
        </InsideContainers>

      </Row>
    </div>
  ) 
}

export default HomeTop