import React from 'react'

import { useRef } from 'react'

import './Review.css'
import next from '../assets/images/next.png'
import back from '../assets/images/back.png'
import re1 from '../assets/images/re1.jpg'


const Review = () => {
    const slider = useRef();
    let tx = 0 ;



    const slideForward =() =>{
        if (tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward =() =>{
        if (tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
    <div className='review'>
        <img src={next} alt="" className='next-btn' onClick={slideForward} />
        <img src={back} alt="" className='back-btn'onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                           <img src={re1} alt="" /> 
                           <div>
                            <h3>Krystal Jung</h3>
                            <span>SM Entertaiment</span>
                           </div>
                        </div>
                        <p>Our new site has a 60% higher conversion rate than our old one. Choosing Wizards was the best marketing decision I've made</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                           <img src={re1} alt="" /> 
                           <div>
                            <h3>Margaret Schnider</h3>
                            <span>Schneider Electric DMS</span>
                           </div>
                        </div>
                        <p>Our new site has a 60% higher conversion rate than our old one. Choosing Wizards was the best marketing decision I've made</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                           <img src={re1} alt="" /> 
                           <div>
                            <h3>Michele Kennedy</h3>
                            <span>Gump Training</span>
                           </div>
                        </div>
                        <p>Our new site has a 60% higher conversion rate than our old one. Choosing Wizards was the best marketing decision I've made</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                           <img src={re1} alt="" /> 
                           <div>
                            <h3>JP McAvoy</h3>
                            <span>ConductLaw</span>
                           </div>
                        </div>
                        <p>Our new site has a 60% higher conversion rate than our old one. Choosing Wizards was the best marketing decision I've made</p>
                    </div>
                </li>   
            </ul>
        </div>
    </div>
  )
}

export default Review