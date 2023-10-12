"use client"
import React, { useRef } from 'react'
import styles from './page.module.css';


const DestinationNav = () => {
  const roolSlide = (percentage: String) => () => {
    console.log(percentage)
  }
  return (
    <>
      <nav className={styles.dest_nav}>
        <input type='button' value="MOON" className={styles.active}/>
        <input type='button' value="MARS" />
        <input type='button' value="EUROPA" />
        <input type='button' value="TITAN" />
      </nav>
    </>
  )
}

export default DestinationNav