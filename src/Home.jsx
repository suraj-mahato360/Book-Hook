import React from 'react'
import ImgSlider from './components/imgSlider'
import BuyCard from './components/buyCard'
import './App.css'

const Home = () => {
  return (
    <div>
        <div className='first-100hv'>
        
        <div className="info">
                <ImgSlider /> 
        </div>
    </div>
    <div className="second-100hv">
      <div className="heading">
        <h1>Books to Buy</h1>
      </div>
      <div className="buysection">

        <BuyCard />
      </div>
      </div>
    </div>
  )
}

export default Home