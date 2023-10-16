"use client"
import React, { Ref, FC, useRef, useState } from 'react'
import styles from './page.module.css'
import DestNav from '@/components/Destination/DestNav'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface IDestInfo {
  img: string | StaticImport;
  alt: string;
  h1: string;
  p: string;
  distance: string;
  time: string;
}

const info: Array<IDestInfo> = [
  {
    img:"/destination/image-moon.png",
    alt: "Moon image",
    h1: "MOON",
    p:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed.While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    time: "3 DAYS"
  },
  {
    img:"/destination/image-mars.png",
    alt: "Mars image",
    h1: "MARS",
    p:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    time: "9 MONTHS"
  },
  {
    img:"/destination/image-europa.png",
    alt: "Europa image",
    h1: "EUROPA",
    p:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    time: "3 YEARS"
  },
  {
    img:"/destination/image-titan.png",
    alt: "Titan image",
    h1: "TITAN",
    p:" The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    time: "7 YEARS"
  }
]

interface pageProps {
  
}

const Destination: FC = () => {
  const [item, setItem] = useState<number>(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  return (
    <section className={styles.dest}>
      <div className={styles.dest_div_upper}>
        <h1 
          className={styles.h1_pick} 
        >
          <span className={styles.h1_pick_span}>01</span> PICK YOUR DESTINATION
          </h1>
        <Image 
          src={info[item].img} 
          alt={info[item].alt} 
          width={200} 
          height={200} 
          className={styles.dest_img} 
          ref={imageRef}
        />
      </div>
      <section className={styles.dest_slider} >
        <DestNav
          imageRef={imageRef}
          textRef={textRef}
          item={item}
          setItem={setItem}
        />
        <div
          className={styles.animation_div}
          ref={textRef}
        >
          <h1 className={styles.dest_name}>{info[item].h1}</h1>
          <p className={styles.dest_p}>{info[item].p}</p>
          <div className={styles.info_div}>
            <div>
              <h2 className={styles.dest_h2}>AVG. DISTANCE</h2>
              <h1 className={styles.dest_info_h1}>{info[item].distance}</h1>
            </div>
            <div>
              <h2 className={styles.dest_h2}>EST. TRAVEL TIME</h2>
              <h1 className={styles.dest_info_h1}>{info[item].time}</h1>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Destination