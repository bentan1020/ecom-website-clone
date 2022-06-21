import React from 'react'
import ProductImage from "../../assets/HomeproductImage.png"
import './HomeHeader.css'

const HomeHeader = () => {
  return (
    <div className='header section-padding'>

        <div className='header-content'>

            <h1>Get to know a calmer, more mindful you.</h1>

            <p>The Apollo™ wearable helps your body recover from stress, so you can relax, focus, sleep better, and feel better.</p>

            <div className='btn'>
                <a href='/product'>
                    <button type='button'>Get Apollo</button>
                </a>
            </div>

        </div>

        <div className='header-image'>
            <img src={ProductImage} class="productImage" alt='productImage'></img>
        </div>

    </div>
  )
}

export default HomeHeader