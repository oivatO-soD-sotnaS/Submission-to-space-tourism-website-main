"use client"

import Link from 'next/link'
import Image from 'next/image'
import { FC, useRef, useState } from 'react'
import './NavBar.css';
import { usePathname } from 'next/navigation';


const NavBar: FC = () => {
  const menuIcon: string = '/shared/icon-hamburger.svg';
  const closeMenuIcon: string = '/shared/icon-close.svg';
  const imageRef = useRef<HTMLImageElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const [imgSrc, setImgSrc] = useState<string>(menuIcon)
  const pathname: string = usePathname();

  const clickHandler: () => void = () => { 
    if (imgSrc === menuIcon && ulRef.current !== null){
      setImgSrc(closeMenuIcon)
      ulRef.current.style.transform = "scaleX(1)"
    }else if(ulRef.current !== null){
      setImgSrc(menuIcon)
      ulRef.current.style.transform = "scaleX(0)"
    }
  }
  
  return (
    <nav className='global_nav'>
      <Image 
        src='/shared/logo.svg' 
        alt='Space Tourism Logo'
        width={40} 
        height={40} 
        className='logo'
      />
      <Image 
        src={imgSrc} 
        alt='Menu Icon' 
        width={24} height={21} 
        onClick={clickHandler} 
        ref={imageRef} 
        className='menu_icon'
      />
      <ul ref={ulRef} className='navUl'>
        <Link 
          href="/" 
          className={pathname === '/' ? "active" : ''}
        >
          <h1 className='nav_h1'>00</h1>HOME
        </Link>
        <Link 
          href="/Destination" 
          className={pathname === '/Destination' ? "active" : ''} 
        >
          <h1 className='nav_h1'>01</h1>DESTINATION
        </Link>
        <Link 
          href="/Crew" 
          className={pathname === '/Crew' ? "active" : ''} 
        >
          <h1 className='nav_h1'>02</h1>CREW
        </Link>
        <Link 
          href="/Technology" 
          className={pathname === '/Technology' ? "active" : ''} 
        >
          <h1 className='nav_h1'>03</h1>TECHNOLOGY
        </Link>
      </ul>
    </nav>

  )
}


export default NavBar;