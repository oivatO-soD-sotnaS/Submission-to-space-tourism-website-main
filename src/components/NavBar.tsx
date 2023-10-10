"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useState } from 'react'
import './NavBar.css';

const NavBar = () => {
  const menu = '/shared/icon-hamburger.svg';
  const closeMenu = '/shared/icon-close.svg';
  const ref: any = useRef();
  const refUl: any = useRef();
  const [imgSrc, setImgSrc] = useState(menu)
  
  const clickHandler: () => void = () => { 
    if (imgSrc === menu){
      setImgSrc(closeMenu)
      refUl.current.style.transform = "translateX(0%)"
    }else{
      setImgSrc(menu)
      refUl.current.style.transform = "translateX(100%)"
    }
  }

  return (
    <nav>
      <Image src='/shared/logo.svg' priority={true} alt='Space Tourism Logo' width={40} height={40} />
      <Image src={imgSrc}  alt='Menu Icon' width={24} height={21} onClick={clickHandler} ref={ref}/>
      <ul ref={refUl}>
        <Link href="/"><h1>00</h1>HOME</Link>
        <Link href="/Destination"><h1>01</h1>DESTINATION</Link>
        <Link href="/Crew"><h1>02</h1>CREW</Link>
        <Link href="/Technology"><h1>03</h1>TECHNOLOGY</Link>
      </ul>
    </nav>

  )
}


export default NavBar;