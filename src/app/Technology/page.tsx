"use client"
import React, { FC, useRef, useState } from 'react'
import styles from "./page.module.css"
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import TechNav from '@/components/Technology/TechNav';
import Image from 'next/image';


interface ITechnologyContent {
  imgSrc: Array<string | StaticImport>;
  h1: string;
  p: string;
}
const TechnologyContent: Array<ITechnologyContent> = [
  {
    imgSrc: ["/technology/image-launch-vehicle-landscape.jpg",
              "/technology/image-launch-vehicle-portrait.jpg"],
    h1: "LAUNCH VEHICLE",
    p: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  },
  {
    imgSrc: ["/technology/image-spaceport-landscape.jpg",
            "/technology/image-spaceport-portrait.jpg"],
    h1: "SPACEPORT",
    p: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  },
  {
    imgSrc: ["/technology/image-space-capsule-landscape.jpg",
              "/technology/image-space-capsule-portrait.jpg"],
    h1: "SPACE CAPSULE",
    p: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
]

interface pageProps {
  
}

const Technology: FC<pageProps> = ({}) => {
  const [item, setItem] = useState<number>(0);
  const [imgOrientation, setImgOrientation] = useState<number>(0);
  const contentDivRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  return (
    <section className={styles.technology}>
      <h1 className={styles.tech_h1}><span className={styles.tech_h1_span}>03</span> SPACE LAUNCH 01</h1>
      <div className={styles.major_container}>
        <Image src={TechnologyContent[item].imgSrc[imgOrientation]} alt='123'
          width={327}
          height={200}
          className={styles.tech_img}
          draggable={false}
          ref={imageRef}
          />
        <div className={styles.minor_container}>
          <TechNav
            setItem={setItem}
            setImageOrientation={setImgOrientation}
            contentDivRef={contentDivRef}
            imgRef={imageRef}
          />
          <div className={styles.tech_content} ref={contentDivRef}>
            <h2 className={styles.tech_h2}>THE TERMINOLOGY...</h2>
            <h1 className={styles.tech_h1_info}>{TechnologyContent[item].h1}</h1>
            <p className={styles.tech_p}>{TechnologyContent[item].p}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology