
import React from "react";
import  Image from "next/image"
import styles from "../styles/section4.module.css"
import Header from "./header";
import Card from "./card";
import { Fade } from "react-reveal";

export default function Section4 () {
    return (
        <div id="store" className={styles.section}>
            <div className={styles.container} >
                <p className={styles.title}>Nos Produits</p>
                <div className={styles.row}>
                    <Fade top>
                        <Card/>
                    </Fade>
                    <Fade top>
                        <Card/>
                    </Fade>
                    <Fade top>
                        <Card/>
                    </Fade>
                    <Fade top>
                        <Card/>
                    </Fade>
                </div>
                <div className={styles.row}>
                    <Fade bottom>
                        <Card/>
                    </Fade>
                    <Fade bottom>
                        <Card/>
                    </Fade>
                    <Fade bottom>
                        <Card/>
                    </Fade>
                    <Fade bottom>
                        <Card/>
                    </Fade>
                </div>
            </div>
        </div>
    )
}