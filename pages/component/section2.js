import React from "react";
import  Image from "next/image"
import styles from "../styles/section2.module.css"
import Header from "./header";
import dynamic from 'next/dynamic'
import Fade from "react-reveal/Fade";


export default function Section2 () {
   
    return (
        <div id="about" className={styles.section}>
            <div className={styles.container} >
                <div className={styles.flex}>
                    <p className={styles.h1}>Qu’est ce que une carte de visite numerique?</p>
                    <p className={styles.h2}>Porter trop de carte de visites peut littéralement être pénible. Et si vous pouviez vous contenter d'une seule carte  visite, même lors d'une conférence où chaque poignée de main est suivie d'un rituel d'échange de cartes ? <br/><br/>Oui, c'est désormais possible grâce à une technologie qui devient désormais presque standard dans les smartphones, du moins les plus haut de gamme. Hollo vient de lancer ses cartes de visite NFC (Near Field Communiation) qui permettent aux gens de transmettre des informations de contact sans échanger de cartes.</p>
                </div>
                <div style={{alignItems:"center"}} className={styles.flex}>
                   <Fade right>
                        <Image src={"/image/page2.png"} width={362}  height={362}/>
                   </Fade>
                </div>
            </div>
        </div>
    )
}