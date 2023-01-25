import React from 'react'
import Navbar from './components/Navbar'
import ImgSlider from './components/imgSlider'

const Home = () => {
  return (
    <div>
        <div>
        <Navbar />
        <div className="info">
            <div className="left">
                <ImgSlider />
            </div>
            <div className="right">
                <h1>BUY.SELL.DONATE</h1>
                <p>We provide you a way to gain something which can't be taken from you</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home