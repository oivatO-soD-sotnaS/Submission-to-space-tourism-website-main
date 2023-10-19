"use client"
import React, { FC, useRef, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import CrewNav from '@/components/Crew/CrewNav';

const x = 3.3;
interface ICrewInfo {
  img: string | StaticImport;
  imgWidth: number;
  imgHeight: number;
  alt: string;
  h2: string;
  h1: string;
  p: string;
}
interface IImagesDimensions {
  imgWidth: number;
  imgHeight: number;
}
const CrewInfo: Array<ICrewInfo> = [
  {
    img: "/crew/image-douglas-hurley.png",
    imgWidth:178,
    imgHeight:222,
    alt: "Crew Commander Douglas Hurley",
    h2: "COMMANDER",
    h1: "DOUGLAS HURLEY",
    p: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    img: "/crew/image-mark-shuttleworth.png",
    imgWidth: 154,
    imgHeight: 222,
    alt: "Crew Mission especialist",
    h2: "MISSION ESPECIALIST",
    h1: "MARK SHUTTLEWORTH",
    p: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    img: "/crew/image-victor-glover.png",
    imgWidth: 181,
    imgHeight: 222,
    alt: "Crew Pilot",
    h2: "PILOT",
    h1: "VICTOR GLOVER",
    p: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
  },
  {
    img: "/crew/image-anousheh-ansari.png",
    imgWidth: 226,
    imgHeight: 222,
    alt: "Crew Flight engineer",
    h2: "FLIGHT ENGINEER",
    h1: "ANOUSHEH ANSARI",
    p: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
  }
]

interface pageProps {
  
}

const Crew: FC<pageProps> = ({}) => {
  const [imageWidth, setImageWidth] = useState<number>(178);
  const [imageHeight, setImageHeight] = useState<number>(222);

  const imageRef = useRef<HTMLImageElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [item, setItem] = useState<number>(0);
  return (
    <section className={styles.crew}>
      <h1 className={styles.crew_h1}>
        <span className={styles.crew_h1_span}>02</span>MEET YOUR CREW
      </h1>
      <div className={styles.crew_content_wrapper}>
        <Image
          src={CrewInfo[item].img}
          alt={CrewInfo[item].alt}
          width={imageWidth}
          height={imageHeight}
          ref={imageRef}
          className={styles.crew_img}
          draggable={false}
        />
        <span className={styles.img_line}></span>
        <div className={styles.nav_content_wrapper}>
          <CrewNav  item={item} infoRef={infoRef} imageRef={imageRef}
            setItem={setItem}
            />
          <div className={styles.crew_info} ref={infoRef}>
            <h2 className={styles.info_h2}>{CrewInfo[item].h2}</h2>
            <h1 className={styles.info_h1}>{CrewInfo[item].h1}</h1>
            <p className={styles.info_p}>{CrewInfo[item].p}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Crew