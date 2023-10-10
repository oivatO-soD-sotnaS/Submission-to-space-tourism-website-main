import React, { Component, useRef } from 'react'
import Image from 'next/image'
import logo from '../../public/shared/logo.svg'
import hamburguer from '../../public/shared/icon-hamburger.svg'
import close from '../../public/shared/icon-close.svg'



const NavBar = () => {
  const ref = useRef(null);
  const handleClick: () => void = () => {
    
  }
  return (
    <nav>
        <Image src={logo} alt='Space Tousirm Logo' />
        <Image src={hamburguer} alt='Menu icon' onClick={handleClick} ref={ref}/>
        <ul>
        
        </ul>
    </nav>
  )
}

export default NavBar
