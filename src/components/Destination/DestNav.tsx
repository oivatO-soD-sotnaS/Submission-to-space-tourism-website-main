"use client"
import React, { FC, Ref, useRef, useState } from 'react';
import styles from './page.module.css';

interface IDestNavProps {
  imageRef: React.RefObject<HTMLImageElement>;
  textRef: React.RefObject<HTMLDivElement>;
  item:number;
  setItem: React.Dispatch<React.SetStateAction<number>>;
}

const DestNav: FC<IDestNavProps> = ({ imageRef, textRef, item, setItem }: IDestNavProps) => {
  const [activeButton, setActiveButton] = useState<number>(0);
  
  const clickHandler: (newItem: number) => void = (newItem: number) => {
    

    const animationDirection = newItem > item ? "translateX(100px)" : "translateX(-100px)";
    setActiveButton(newItem)
    if (textRef.current !== null && imageRef.current !== null) {
      imageRef.current.style.opacity = "0"
      textRef.current.style.opacity = "0";
      textRef.current.style.transform = animationDirection
    }
    setTimeout(() => {
      setItem(newItem)
      if (textRef.current !== null && imageRef.current !== null) {
        imageRef.current.style.opacity = "1"
        textRef.current.style.opacity = "1";
        textRef.current.style.transform = "translateX(0px)"
      }
    }, 400)
    
  }


  return (
    <nav className={styles.dest_nav}>
      <button onClick={() => clickHandler(0)} className={activeButton === 0 ? styles.active : ""}>MOON</button>
      <button onClick={() => clickHandler(1)} className={activeButton === 1 ? styles.active : ""}>MARS</button>
      <button onClick={() => clickHandler(2)} className={activeButton === 2 ? styles.active : ""}>EUROPA</button>
      <button onClick={() => clickHandler(3)} className={activeButton === 3 ? styles.active : ""}>TITAN</button>
    </nav>
  )
}

export default DestNav  