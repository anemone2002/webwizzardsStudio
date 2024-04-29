import React from 'react'
import './Portfolio.css'
import gallery1 from '../assets/images/port1.jpg'
import gallery2 from '../assets/images/prot2.jpg'
import gallery3 from '../assets/images/prot3.jpg'
import gallery4 from '../assets/images/prot4.jpg'
import rightarrow from '../assets/images/right-arrow.png'

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <div className="gallery">
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery4} alt="" />

        </div>
        <button className='btn dark-btn'>See more here <img src={rightarrow} alt="" /></button>
    </div>
  )
}

export default Portfolio