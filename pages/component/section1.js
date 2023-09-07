import React from "react";
import  Image from "next/image"
import styles from "../styles/section1.module.css"
import Header from "./header";
import { Fade } from "react-reveal";

export default function Section1 () {
    return (
        <div className={styles.section}>
            <Header/>
            <div className={styles.container} >
                <div className={styles.flex}>
                   <Fade top>
                        <p className={styles.h1}><span>La carte</span> de visite digital</p>
                        <p className={styles.h2}>Nous sommes en <span>mission</span> pour changer la façon dont les gens perçoivent les cartes de visite.</p>
                   </Fade>
                   <Fade bottom>
                        <Image src={"/image/market.png"} width={437} height={61} />
                   </Fade>
                </div>
                <div className={`${styles.flex} ${styles.image}`}>
                    <Fade>
                        <Image className={styles.image} src={"/image/page1.png"} width={589} height={580}/>
                    </Fade>
                </div>
            </div>
        </div>
    )
}