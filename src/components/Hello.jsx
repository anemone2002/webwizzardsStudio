import React from 'react'
import './Hello.css'
import arrowimg from '../assets/images/right-arrow.png'

const Hello = () => {
  return (
    <div className='hello container'>
        <div className='hello-text'>
            <h1>Get a beautiful website that drives revenue</h1>
            <p>Our Unique Subscription Models help Future-First Companies to radically differentiate & deliver on growth throughout their journey</p>
            <button className='btn'>Explore more <img src={arrowimg} alt="" /></button>
        </div>

    </div>
  )
}

export default Hello