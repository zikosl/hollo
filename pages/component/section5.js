import React from "react";
import  Image from "next/image"
import styles from "../styles/section5.module.css"
import Header from "./header";
import { Fade } from "react-reveal";

export default function Section5() {
    return (
        <div className={styles.container}>
            <Fade left>
                <div className={styles.card} >
                    <div style={{height:87,display:"flex",alignItems:"flex-start"}}>
                        <Image objectFit="contain" src={"/image/g4.png"} width={46} height={82}/>
                    </div>
                    <p className={styles.h1}>Créez facilement votre carte de visite numériques</p>
                </div>
            </Fade>
            <Fade left>
                <div className={styles.card} >
                    <div style={{height:87,display:"flex",alignItems:"flex-start"}}>
                        <Image objectFit="contain" src={"/image/g3.png"} width={75} height={75}/>
                    </div>
                    <p className={styles.h1}>Partagez vos informations d‘une façon moderne</p>
                </div>
            </Fade>
            <Fade right>
                <div className={styles.card} >
                    <div style={{height:87,display:"flex",alignItems:"flex-start"}}>
                        <Image objectFit="contain" src={"/image/g2.png"} width={87} height={87}/>
                    </div>
                    <p className={styles.h1}>Gérez vos contacts en toute simplicité</p>
                </div>
            </Fade>
            <Fade right>
                <div className={styles.card} >
                    <div style={{height:87,display:"flex",alignItems:"flex-start"}}>
                        <Image objectFit="contain" src={"/image/g1.png"} width={64} height={64}/>
                    </div>
                    <p className={styles.h1}>Transformez vos cartes visites papier avec le code QR en contacts numériques</p>
                </div>
            </Fade>
        </div>
    )
}