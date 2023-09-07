import React from "react";
import  Image from "next/image"
import styles from "../styles/header.module.css"
import Link from "next/link";
import Tada from 'react-reveal/Tada';

export default function Header () {
    return (
        <div className={styles.header} >
            <Link href={"/"}>
                <Tada>
                    <Image src={"/image/logo.png"} style={{cursor:"pointer"}} className={styles.image} width={120} height={50}></Image>
                </Tada>
            </Link>
        </div>
    )
}