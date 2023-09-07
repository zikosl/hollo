import React from "react";
import  Image from "next/image"
import styles from "../styles/section3.module.css"
import Header from "./header";
import { Fade } from "react-reveal";
import Pulse from 'react-reveal/Pulse';

export default function Section3 () {
    return (
        <div className={styles.section}>
            <div className={styles.container} >
                <p className={styles.h1}>N'ayez plus à vous soucier de ne plus avoir de cartes de visite avec vous.</p>
                <div className={styles.cards}>
                    <div className={styles.row}>
                        <Fade left>
                            <div className={styles.card1}/>
                        </Fade>
                        <Fade right>
                            <div className={styles.card2}/>
                        </Fade>
                    </div>
                    <div className={styles.row}>
                        <Fade left>
                            <div className={styles.card3}/>
                        </Fade>
                        <Fade right>
                            <div className={styles.card4}/>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className={styles.items}>
                <LineText text={"Partagez vos informations en seul tap"}/>
                <LineText i={600} text={"Produit écologique"}/>
                <LineText text={"Livraison internationale"}/>
            </div>
        </div>
    )
}




const LineText = ({text,i=500}) =>{
    return(
        <div style={{fontWeight:i}} className={styles.linetext}>
            <Fade left>
                <div className={styles.div1}></div>
            </Fade>
            <Pulse>
                <p>{text}</p>
            </Pulse>
            <Fade right>
                <div className={styles.div2}></div>
            </Fade>
        </div>
    )
}