import React, { useEffect, useState } from 'react'
import logoimg from "../assets/images/logo.png"
import menuimg from "../assets/images/menu(1).png"

import './Header.css'
import {Link } from 'react-scroll'
const Header = () => {
  const [sticky , setSticky] = useState(false);
  useEffect(()=> {
    window.addEventListener('scroll' , ()=>{
      window.scrollY > 500? setSticky(true) : setSticky(false);
    })
  }, [])
  const[mobileMenu, setMobileMenu] = useState(false)
  const toglleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  }
  return (
    <nav className={`container ${sticky?  'dark-nav' : ''}`}>
      <img src={logoimg} alt=""  className='logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
          <li><Link to='hello' smooth ={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='services' smooth ={true} offset={-260} duration={500}>Services</Link></li>
          <li><Link to='portfolio' smooth ={true} offset={-150} duration={500}>Portfolio</Link></li>
          <li><Link to='review' smooth ={true} offset={-260} duration={500}>Testimonials</Link></li>
          <li><Link to='contact' smooth ={true} offset={-260} duration={500} className='btn'>Contact</Link></li>
      </ul>
      <img src={menuimg} alt="" className='menu-icon' onClick={toglleMenu}/>
    </nav>
  )
}

export default Header
