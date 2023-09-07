import React from "react";
import  Image from "next/image"
import styles from "../styles/headerbadged.module.css"
import { ShoppingCart } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";

export default function HeaderBadged () {
    return (
        <div className={styles.header} >
            <Link href={"/"}>
                <Image src={"/image/logo.png"} style={{cursor:"pointer"}} className={styles.image} width={120} height={50}></Image>
            </Link>
            <div style={{display:"flex",flex:1}}>

            </div>
            <div className={styles.basket}>
                <div>
                    <ShoppingCart color="#2D2669"/>
                    <b>2</b>
                </div>
                <p>My cart <br></br><span>$21</span></p>
            </div>
            <div className={styles.brows}>
                <LayoutGrid color="#fff"/>            
                <p>Browse All Categories</p>
            </div>
        </div>
    )
}