"use client"
import React, { Ref, useRef } from 'react'
import styles from './page.module.css'
import Moon from '@/components/Destination/Moon'
import Mars from '@/components/Destination/Mars'
import Europa from '@/components/Destination/Europa'
import Titan from '@/components/Destination/Titan'
import DestinationNav from '@/components/Destination/DestinationNav'

const Destination = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const handleClick = () => () => {
    console.log(ref.current)
  }
  return (
    <section className={styles.dest}>
      <h1 className={styles.h1} onClick={handleClick}><span className={styles.h1_span}>01</span> PICK YOUR DESTINATION</h1>
      <section className={styles.dest_carousel} ref={ref} >
      	<Moon />
        <Mars />        
        <Europa />
        <Titan />
      </section>
    </section>
  )
}

export default Destination