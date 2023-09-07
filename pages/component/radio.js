import React, { useState } from "react";
import  Image from "next/image"
import styles from "../styles/radio.module.css"

export default function Radio () {
    const [active,setActive] = useState(true)
    
    return (
        <div className={styles.radio} >
            <div onClick={()=>setActive(!active)}>
                {
                    active && (
                        <span></span>
                    )
                }
            </div>
            <section>
                <p>Cash On Delivery</p>
                <h1>Pay with cash upon delivery.</h1>
            </section>
        </div>
    )
}