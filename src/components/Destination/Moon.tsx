import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import DestinationNav from './DestinationNav'

const Moon = () => {

  return (
    <>
      <section className={styles.slide}>
        <Image className={styles.slide_img} src='/destination/image-moon.png' alt='Moon Image' width={259} height={259} />
        <DestinationNav />
        <div className={styles.slide_Text}>
          <h1 className={styles.text_h1}>MOON</h1>
          <p className={styles.text_p}>
            See our planet as you’ve never seen it before. 
            A perfect relaxing trip away to help regain perspective and come back refreshed.
            While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
          </p>
        </div>
        <div className={styles.slide_Info}>
          <h2 className={styles.info_h2}>AVG. DISTANCE</h2>
          <h1 className={styles.info_h1}>384,400</h1>
          <h2 className={styles.info_h2}>EST. TRAVEL TIME</h2>
          <h1 className={styles.info_h1}>3 DAYS</h1>
        </div>
      </section>
    </>
  )
}

export default Moon