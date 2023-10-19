import React, { FC, useState, useRef, useEffect } from 'react'
import styles from "./page.module.css"

interface TechNavProps {
  setItem: React.Dispatch<React.SetStateAction<number>>;
  setImageOrientation:React.Dispatch<React.SetStateAction<number>>;
  contentDivRef: React.RefObject<HTMLDivElement>;
  imgRef: React.RefObject<HTMLImageElement>;
}

const TechNav: FC<TechNavProps> = ({ setItem, setImageOrientation, contentDivRef, imgRef }:TechNavProps) => {
  const [currentButton, setCurrentButton] = useState<number>(0);
  
  const handleClick: (newItem:number) => void = (newItem:number) => {
    const transformOrigin = currentButton > newItem ? "left":"right";
    setCurrentButton(newItem);
    if(contentDivRef.current && imgRef.current){
      contentDivRef.current.style.transformOrigin = transformOrigin;
      contentDivRef.current.style.transform = "scaleX(0)"
      contentDivRef.current.style.opacity = "0"
      imgRef.current.style.opacity = "0"
    }
    setTimeout(() => {
      setItem(newItem)
      if(contentDivRef.current && imgRef.current){
        contentDivRef.current.style.transform = "scaleX(1)"
        contentDivRef.current.style.opacity = "1"
        imgRef.current.style.opacity = "1"
      }
    },450)

  }
  return (
    <nav className={styles.tech_nav}>
      <button onClick={() => handleClick(0)} 
        className={currentButton === 0 ? styles.active_button:styles.button}
      >
        1
      </button>
      <button onClick={() => handleClick(1)} 
        className={currentButton === 1 ? styles.active_button:styles.button}
      >
        2
      </button>
      <button onClick={() => handleClick(2)}
        className={currentButton === 2 ? styles.active_button:styles.button}
      >
        3
      </button>
    </nav>
  )
}

export default TechNav