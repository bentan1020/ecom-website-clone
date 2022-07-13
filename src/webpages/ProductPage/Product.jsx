import React from 'react'
import './product.css'
import StealthImg1 from "../../assets/StealthImg1.png"
import affirmLogo from "../../assets/affirmLogo.webp"

import NavbarNoneWhite from '../../components/Navbar/NavbarNoneWhite'

import Stealth from "../../assets/StealthPOption.png"
import Rose from "../../assets/RosePOption.png"
import Silver from "../../assets/SilverPOption.png"
import Snow from "../../assets/SnowPOption.png"
import Twilight from "../../assets/TwilightPOption.png"
import Glacier from "../../assets/GlacierPOption.png"

const Product = () => {
  return (
    <div className='page'>

      <NavbarNoneWhite></NavbarNoneWhite>

      <div className='productPageHeader'>

        <div className='customerBuy'>

          <div className='headerIntro'>
            <h1>Apollo™ Wearable</h1>
            <h1>$349</h1>
          </div>

          <div className='payWithAffirm'>
            <p>Starting at $32/mo with</p>
            <div className='affirmLogoDiv'>
              <img src={affirmLogo} alt='affirmLogo'></img>
            </div>
          </div>

          <div id='improveResilience'>Improve your resilience to stress with the Apollo wearable</div>

          <div className='expectedShipping'>
            <div className='expectedShippingSVG'>
              <svg class="icon-truck inline align-baseline" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Shipping Truck Icon.</desc><path d="M8 13C8 14.6562 6.65625 16 5 16C3.3125 16 2 14.6562 2 13C0.875 13 0 12.125 0 11V2C0 0.90625 0.875 0 2 0H11C12.0938 0 13 0.90625 13 2V3H14.3125C14.7812 3 15.2188 3.1875 15.5625 3.53125L18.4688 6.4375C18.8125 6.78125 19 7.21875 19 7.6875V11.5H19.25C19.6562 11.5 20 11.8438 20 12.25C20 12.6875 19.6562 13 19.25 13H18C18 14.6562 16.6562 16 15 16C13.3125 16 12 14.6562 12 13H8ZM11 1.5H2C1.71875 1.5 1.5 1.75 1.5 2V11C1.5 11.2812 1.71875 11.5 2 11.5H2.375C2.90625 10.625 3.875 10 5 10C6.09375 10 7.0625 10.625 7.59375 11.5H11C11.25 11.5 11.5 11.2812 11.5 11V2C11.5 1.75 11.25 1.5 11 1.5ZM14.5 4.59375C14.4375 4.53125 14.375 4.5 14.3125 4.5H13V7.5H17.4375C17.4062 7.5 17.4062 7.5 17.4062 7.5L14.5 4.59375ZM5 11.5C4.15625 11.5 3.5 12.1875 3.5 13C3.5 13.8438 4.15625 14.5 5 14.5C5.8125 14.5 6.5 13.8438 6.5 13C6.5 12.1875 5.8125 11.5 5 11.5ZM15 14.5C15.8125 14.5 16.5 13.8438 16.5 13C16.5 12.1875 15.8125 11.5 15 11.5C14.1562 11.5 13.5 12.1875 13.5 13C13.5 13.8438 14.1562 14.5 15 14.5Z" fill="black"></path></svg>
            </div>
            <div className='expectedShippingDesc'>
              <p><b>Expected to ship within 2-3 weeks*</b></p>
              <p>Orders will be shipped on a first-come, first-served basis</p>
            </div>
          </div>

          <div className='productOptions'>
            <p>Select a color</p>
            <b><p id='productOptions-stealth-description'>Stealth</p></b>

            <div className='productOptionImg'>
              <div className='productOptionsImages'><img src={Silver}></img></div>
              <div className='productOptionsImages'><img src={Twilight}></img></div>
              <div className='productOptionsImages'><img src={Stealth}></img></div>
              <div className='productOptionsImages'><img src={Glacier}></img></div>
              <div className='productOptionsImages'><img src={Snow}></img></div>
              <div className='productOptionsImages'><img src={Rose}></img></div>
            </div>
          </div>

        </div>

        <div className='displayImages'>
          <img src={StealthImg1} alt='StealthImg1'></img>
        </div>

      </div>

    </div>
  )
}

export default Product