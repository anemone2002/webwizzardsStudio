import React from 'react'
import './Services.css'
import pro1 from '../assets/images/web.jpg';
import pro2 from '../assets/images/mar.jpg';
import pro3 from '../assets/images/ui.jpg'; 
import proic1 from '../assets/images/coding.png'; 
import proic2 from '../assets/images/market.png'; 
import proic3 from '../assets/images/web-design.png'; 


const Services = () => {
  return (
    <div className='services'> 
      <div className='service'>
        <img src={pro1} alt="" />
        <div className="caption">
          <img src={proic1} alt="" />
          <p>Web Development</p>
        </div>
      </div>
      <div className='service'>
        <img src={pro2} alt="" />
        <div className="caption">
          <img src={proic2} alt="" />
          <p>Marketing</p>
        </div>
      </div>
      <div className='service'>
        <img src={pro3} alt="" />
        <div className="caption">
          <img src={proic3} alt="" />
          <p>Web Design</p>
        </div>
      </div>
    </div>
  )
}

export default Services

