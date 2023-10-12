import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import DestinationNav from './DestinationNav'

const Mars = () => {
  return (
    <>
      <section className={styles.slide}>
        <Image className={styles.slide_img} src='/destination/image-mars.png' alt='Moon Image' width={259} height={259} />
        <DestinationNav />

        <div className={styles.slide_Text}>
          <h1 className={styles.text_h1}>MARS</h1>
          <p className={styles.text_p}>
            Don’t forget to pack your hiking boots.
            You’ll need them to tackle Olympus Mons,
            the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>
        </div>
        <div className={styles.slide_Info}>
          <h2 className={styles.info_h2}>AVG. DISTANCE</h2>
          <h1 className={styles.info_h1}>225 MIL. KM</h1>
          <h2 className={styles.info_h2}>EST. TRAVEL TIME</h2>
          <h1 className={styles.info_h1}>9 MONTHS</h1>
        </div>
      </section>
    </>
  )
}

export default Mars