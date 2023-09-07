import React, { useState } from "react";
import  Image from "next/image"
import styles from "../styles/navbar.module.css"
import Link from "next/link";

export default function Navbar () {
    const [active,setActive] = useState(0)
    const [open,setOpen] = useState(false)
    return (
        <div className={styles.container}>
            <div style={{display:"flex"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <div style={{display:"flex",flex:2}}/>
                    <Image onClick={()=>setOpen(!open)} style={{cursor:"pointer"}} src={"/image/swip.png"}  width={56.51} height={203.99}></Image>
                    <div style={{display:"flex",flex:1}}/>
                </div>
            </div>
            <div className={`${styles.header} ${open && styles.active}`} >
                <div className={styles.image}>
                    <Image src={"/image/nfc.png"}  width={40} height={56}></Image>
                </div>
                <div className={styles.list}>
                    <Link href={"/#"}>
                        <div onClick={()=>setActive(0)} className={`${styles.item} ${active==0 && styles.active}`}>
                            <span></span>
                            <p>Accueil</p>
                        </div>
                    </Link>
                    <Link href={"/#about"}>
                        <div onClick={()=>setActive(1)} className={`${styles.item} ${active==1 && styles.active}`}>
                            <span></span>
                            <p>A Propos</p>
                        </div>
                    </Link>
                    <Link href={"/#store"}>
                        <div onClick={()=>setActive(2)} className={`${styles.item} ${active==2 && styles.active}`}>
                            <span></span>
                            <p>Magasin</p>
                        </div>
                    </Link>
                    <Link href={"/#contact"}>
                        <div onClick={()=>setActive(3)} className={`${styles.item} ${active==3 && styles.active}`}>
                            <span></span>
                            <p>Contacter</p>
                        </div>
                    </Link>
                </div>
                <div className={styles.h1}>HOLLO <span>NFC</span></div>
                    <div className={styles.footer}>
                        <i className="fa fa-linkedin"></i>
                        <i className="fa fa-youtube-play"></i>
                        <i className="fa fa-facebook-square"></i>
                        <i className="fa fa-twitter"></i>
                    </div>
            </div>
        </div>
    )
}