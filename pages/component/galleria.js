import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/galleria.module.css"

export default function Galleria () {
    const [selected,setSelected] = useState("/image/item1.png")
    return (
        <div className={styles.header}>
            <Image objectFit="contain" src={selected} width={242} height={239} />
            <div className={styles.images}>
                <div onMouseEnter={()=>setSelected("/image/pr2.png")} className={styles.items}>
                    <Image objectFit="contain" src={"/image/pr2.png"} width={114} height={114} />
                </div>
                <div onMouseEnter={()=>setSelected("/image/item1.png")} style={{justifyContent:"center",alignItems:"center"}}  className={styles.items}>
                    <Image objectFit="contain" src={"/image/item1.png"} width={80} height={80} />
                </div>
            </div>
        </div>
    )
}