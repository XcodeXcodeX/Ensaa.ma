"use client";
import Image from "next/image"
import styles from './NewsCard.module.css'
import { useState, useEffect } from "react";

export default function NewsCard({title,category,description,img,direction}) {
  const [windowWidth, setWindowWidth] = useState(null); // changed from window.innerWidth

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <div style={{ flexDirection:(windowWidth<=600 ? 'column' : direction) }} className={styles.card}>
        <div className={styles.imgContainer}>
            <Image src={img} className={styles.img}/>
        </div>
        <div className={styles.textContainer}>
            <span className={styles.category}>{category}</span>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}
