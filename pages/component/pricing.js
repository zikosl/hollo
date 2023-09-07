import React from "react";
import  Image from "next/image"
import styles from "../styles/price.module.css"
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Pricing () {
    return (
        <div className={styles.header} >
            <p className={styles.h1}>Hollo NFC Sticker</p>
            <p className={styles.h2}>Free Shipping | 100000 taps Warranty</p>
            <p className={styles.price}>2850 Dzd</p>
            <p className={styles.li}>
                <CheckCircle color="#2D2669"/>
                <b>Free Return</b>
            </p>
            <p className={styles.li}>
                <CheckCircle color="#2D2669"/>
                <b>Chat with us 24 hours</b>
            </p>
            <p className={styles.li}>
                <CheckCircle color="#2D2669"/>
                <b>Comes with a Package</b>
            </p>
            <div className={styles.row}>
                <Link href={"/pay"}>
                    <div className={styles.buy}>
                        Buy it now
                    </div>
                </Link>
                <div className={styles.add}>
                    Add to Cart
                </div>
            </div>
        </div>
    )
}