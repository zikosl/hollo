import React from "react";
import  Image from "next/image"
import styles from "../styles/section8.module.css"
import Card from "./card";
import Slider from "react-slick";
import Card2 from "./card2";

export default function Section8 () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    return (
        <div className={styles.container} >
            <div className={styles.header} >
                <p className={styles.active}>About
                </p>
                <p>Shipping</p>
                <p>Returns</p>
                <div style={{display:"flex",flex:1}}>

                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.flex}>
                    <div className={styles.items}>
                        <Image objectFit="contain" src={"/image/pr1.png"} width={210} height={48} />
                    </div>
                </div>
                <div style={{alignItems:"flex-start",flex:1}} className={styles.flex}>
                    <p>15 cm (6.1-inch) Super Retina XDR display</p>
                    <p>Cinematic mode adds shallow depth of field and shifts focus automatically in your videos</p>
                    <p>Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording</p>
                    <p>12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording</p>
                    <p>A15 Bionic chip for lightning-fast performance</p>
                    <p>Up to 19 hours of video playback</p>
                    <p>Durable design with Ceramic Shield</p>
                    <p>Industry-leading IP68 water resistance</p>
                    <p>iOS 15 packs new features to do more with iPhone than ever before</p>
                    <p>Supports MagSafe accessories for easy attachment and faster wireless charging</p>
                    </div>
                </div>
            <div className={styles.footer}>  
                <p>Similar sponsored items</p>
                
                <Slider {...settings}>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                    <Card2/>
                </Slider>
            </div>
        </div>
    )
}