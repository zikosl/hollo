import React from "react";
import  Image from "next/image"
import styles from "../styles/card.module.css"
import Link from "next/link";

export default function Card () {
    return (
       <Link href={"/detaille"}>
            <div className={styles.card} >
                <Image src={"/image/item1.png"} className={styles.image} width={102} height={102}></Image>
                <p className={styles.title}>Hollo Sticker</p>
                <p className={styles.subtitle}>Republic of colors</p>
                <div style={{display:"flex",flex:1}}></div>
                <div className={styles.price}>
                    <p>{2850} dzd</p>
                </div>
            </div>
       </Link>
    )
}