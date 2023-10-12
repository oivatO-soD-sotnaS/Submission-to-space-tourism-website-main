import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import DestinationNav from './DestinationNav'

const Europa = () => {
  return (
    <>
      <section className={styles.slide}>
        <Image className={styles.slide_img} src='/destination/image-europa.png' alt='Moon Image' width={259} height={259} />
        <DestinationNav />
        <div className={styles.slide_Text}>
          <h1 className={styles.text_h1}>EUROPA</h1>
          <p className={styles.text_p}>
            The smallest of the four Galilean moons orbiting Jupiter,
            Europa is a winter lover’s dream. With an icy surface,
            it’s perfect for a bit of ice skating,
            curling, hockey, or simple relaxation in your snug wintery cabin.
          </p>
        </div>
        <div className={styles.slide_Info}>
          <h2 className={styles.info_h2}>AVG. DISTANCE</h2>
          <h1 className={styles.info_h1}>628 MIL. KM</h1>
          <h2 className={styles.info_h2}>EST. TRAVEL TIME</h2>
          <h1 className={styles.info_h1}>3 YEARS</h1>
        </div>
      </section>
    </>
  )
}

export default Europa