import React from "react";
import  Image from "next/image"
import styles from "../styles/order.module.css"
import Link from "next/link";

export default function Order () {
    return (
        <div className={styles.order} >
            <p className={styles.h1}>Order Summary(1)</p>
            <div className={styles.row} >
                <Image src={"/image/item1.png"} style={{marginRight:0}} objectFit="contain" width={87} height={87} />
                <div className={styles.flex} >
                    <p className={styles.t1}>Plastic useless plugs and tubes <br/>for high-fidelity prtotyping. Fit &apm;<br/> Eat!</p>
                    <p className={styles.t2} >Qty:1</p>
                </div>
                <p className={styles.t3} >$12.00</p>
            </div>
            <div  className={styles.divider}></div>
            <div className={styles.row}>
                <div className={styles.flex2}>

                </div>
                <div className={styles.flex3}>
                   <div style={{justifyContact:"flex-end"}} className={styles.row}>
                    <div className={styles.flex}>
                        <p className={styles.t5}>Subtotal</p>
                        <p className={styles.t5}>Shipping</p>
                        <p className={styles.t5}>Tax</p>
                    </div>
                    <div className={styles.flex}>
                        <p className={styles.t4}>$12.00</p>
                        <p className={styles.t4}>$2.00</p>
                        <p className={styles.t4}>$1.00</p>
                    </div>   
                   </div>
                   <div style={{marginLeft:30,marginRight:0}} className={styles.divider}></div>
                   <div style={{justifyContact:"flex-end"}} className={styles.row}>
                    <div className={styles.flex}>
                        <p className={styles.t5}>Total</p>
                    </div>
                    <div className={styles.flex}>
                        <p className={styles.t4}>$15.00</p>
                    </div>   
                   </div>
                   
                </div>
            </div>
            <div className={styles.rows}>
                        <Link href={"thanku"}>
                            <div className={styles.buy}>
                                Place order
                            </div>
                        </Link>
                        <div className={styles.add}>
                            Cancel
                        </div>
                    </div>
        </div>
    )
}