import React from "react";
import  Image from "next/image"
import styles from "../styles/section7.module.css"
import Galleria from "./galleria";
import Pricing from "./pricing";

export default function Section7 () {
    return (
        <div className={styles.container} >
           <div className={styles.flex}>
               <Galleria/>
           </div>
           <div style={{display:"flex",flex:1}}></div>
           <div className={styles.flex}>
               <Pricing/>
           </div>
        </div>
    )
}