"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react'
import './NavBar.css';
import { usePathname } from 'next/navigation';


const NavBar = () => {
  const menu = '/shared/icon-hamburger.svg';
  const closeMenu = '/shared/icon-close.svg';
  const ref: any = useRef();
  const refUl: any = useRef();
  const [imgSrc, setImgSrc] = useState(menu)
  const pathname = usePathname();

  const clickHandler: () => void = () => { 
    if (imgSrc === menu){
      setImgSrc(closeMenu)
      refUl.current.style.transform = "scaleX(1)"
    }else{
      setImgSrc(menu)
      refUl.current.style.transform = "scaleX(0)"
    }
  }
  
  return (
    <nav className='global_nav'>
      <Image src='/shared/logo.svg' priority={true} alt='Space Tourism Logo' width={40} height={40} className='logo' />
      <Image src={imgSrc}  alt='Menu Icon' width={24} height={21} onClick={clickHandler} ref={ref} className='menu_icon'/>
      <ul ref={refUl} className='navUl'>
        <Link href="/" className={pathname === '/' ? "active" : ''} onClick={clickHandler}><h1 className='nav_h1'>00</h1>HOME</Link>
        <Link href="/Destination" className={pathname === '/Destination' ? "active" : ''} onClick={clickHandler}><h1 className='nav_h1'>01</h1>DESTINATION</Link>
        <Link href="/Crew" className={pathname === '/Crew' ? "active" : ''} onClick={clickHandler}><h1 className='nav_h1'>02</h1>CREW</Link>
        <Link href="/Technology" className={pathname === '/Technology' ? "active" : ''} onClick={clickHandler}><h1 className='nav_h1'>03</h1>TECHNOLOGY</Link>
      </ul>
    </nav>

  )
}


export default NavBar;