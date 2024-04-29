import React, { useEffect, useState } from 'react'
import logoimg from "../assets/images/logo.png"
import './Header.css'
const Header = () => {
  const [sticky , setSticky] = useState(false);
  useEffect(()=> {
    window.addEventListener('scroll' , ()=>{
      window.scrollY > 500? setSticky(true) : setSticky(false);
    })
  }, [])
  return (
    <nav className={`container ${sticky?  'dark-nav' : ''}`}>
      <img src={logoimg} alt=""  className='logo'/>
      <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Testimonials</li>
          <li><button className='btn'>Contact</button></li>
      </ul>
    </nav>
  )
}

export default Header
