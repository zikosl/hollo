import React from "react";
import  Image from "next/image"
import styles from "../styles/section9.module.css"
import Checkout from "./checkout";
import Order from "./order";

export default function Section9 () {
    return (
        <div className={styles.header} >
            <div className={styles.flex}>
                <Checkout/>
            </div>
            <div className={styles.flex}>
                <Order/>
            </div>
        </div>
    )
}