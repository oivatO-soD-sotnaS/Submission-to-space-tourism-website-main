"use client"
import React, { FC, useState } from 'react'
import styles from "./page.module.css"


interface CrewNavProps {
  imageRef: React.RefObject<HTMLImageElement>;
  infoRef: React.RefObject<HTMLDivElement>;
  item: number;
  setItem: React.Dispatch<React.SetStateAction<number>>;
}

const CrewNav: FC<CrewNavProps> = ({ infoRef, imageRef, item, setItem}: CrewNavProps) => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const clickHandler: (current:number) => void = (current:number) => {
    
    setActiveButton(current)
    setTimeout(() => {
      setItem(current)
      
    }, 400)
  }

  return (
      <nav className={styles.crew_nav}>
        <button onClick={() => clickHandler(0)} className={activeButton === 0 ? styles.button_active : styles.button}/>
        <button onClick={() => clickHandler(1)} className={activeButton === 1 ? styles.button_active : styles.button}/>
        <button onClick={() => clickHandler(2)} className={activeButton === 2 ? styles.button_active : styles.button}/>
        <button onClick={() => clickHandler(3)} className={activeButton === 3 ? styles.button_active : styles.button}/>
      </nav>
  )
}

export default CrewNav