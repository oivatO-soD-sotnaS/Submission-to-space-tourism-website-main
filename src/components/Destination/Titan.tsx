import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import DestinationNav from './DestinationNav'

const Titan = () => {
  return (
    <>
      <section className={styles.slide}>
        <Image className={styles.slide_img} src='/destination/image-titan.png' alt='Moon Image' width={259} height={259} />
        <DestinationNav />
        <div className={styles.slide_Text}>
          <h1 className={styles.text_h1}>TITAN</h1>
          <p className={styles.text_p}>
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>
        </div>
        <div className={styles.slide_Info}>
          <h2 className={styles.info_h2}>AVG. DISTANCE</h2>
          <h1 className={styles.info_h1}>1.6 BIL. KM</h1>
          <h2 className={styles.info_h2}>EST. TRAVEL TIME</h2>
          <h1 className={styles.info_h1}>7 YEARS</h1>
        </div>
      </section>
    </>
  )
}

export default Titan