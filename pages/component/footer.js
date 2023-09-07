import React from "react";
import  Image from "next/image"
import styles from "../styles/footer.module.css"
import RubberBand from 'react-reveal/RubberBand';

export default function Footer ({style}) {
    return (
        <div style={style} className={styles.header} >
            <div style={{display:"flex",flex:1}}>
            </div>
                <div className={`${styles.top} ${styles.row}`} style={{width:"100%",marginBottom:100}}>
                    <div className={styles.flex}>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                    </div>
                    <div style={{alignItems:"flex-end"}} className={styles.flex}>
                        <RubberBand>
                        <Image src={"/image/logo2.png"} className={styles.image} width={120} height={50}></Image>
                        </RubberBand>
                    </div>
                </div>
            <div className={styles.row}>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-youtube-play"></i>
                <i className="fa fa-facebook-square"></i>
                <i className="fa fa-twitter"></i>
            </div>
            <p className={styles.footer}>&copy; Copyright 2022 | All Rights Reserved</p>
        </div>
    )
}