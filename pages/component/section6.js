import React from "react";
import  Image from "next/image"
import styles from "../styles/section6.module.css"
import Header from "./header";
import { Fade } from "react-reveal";

export default function Section6() {
    return (
        <div className={styles.container}>
            <div className={styles.h1}>Soyez notre ambassadeur</div>
            <div className={styles.p}>Vous cherchez à emmener Hollo dans votre pays, votre ville ou votre communauté ? <br/>Notre équipe est prête à parler avec vous et à vous aider à atteindre vos objectifs de distribution !</div>
            <div className={styles.p}>Contactez b2b@hollo.pro et notre équipe vous répondra dans les 24 heures !</div>
            <div id="contact" className={styles.rows}>
                <Fade left>
                    <div className={`${styles.flex} ${styles.active}`}>
                        <p className={styles.contact}>Contactez-nous<br/> maintenant</p>
                        <p className={styles.dcontact}>Pour plus d'information <br/>complementaire n'hésitez pas a<br/>  nous contacter.</p>
                        <div className={styles.phone}>
                            <i className="fa fa-phone"></i>
                            <p>+213 552069595</p>
                        </div>
                        <div className={styles.phone}>
                            <i className="fa fa-envelope"></i>
                            <p>b2b@hollo.tech</p>
                        </div>
                        <div className={styles.phone}>
                            <i className="fa fa-building-o"></i>
                            <p>Draria, Alger, Algerie</p>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className={styles.flex}>
                        <div className={styles.form}>
                            <div className={styles.formitem}>
                                <p>VOTRE NOM</p>
                                <input type="text" placeholder="Full Name" value = ""></input>
                            </div>
                            <div className={styles.formitem}>
                                <p>adress mail</p>
                                <input type="text" placeholder="name@mail.com" value = ""></input>
                            </div>
                            <div className={styles.formitem}>
                                <p>numero de telephone</p>
                                <input type="text" placeholder="+213 552069595" value = ""></input>
                            </div>
                            <div className={styles.formitem}>
                                <p>ton MESSAGE</p>
                                <textarea rows="7" placeholder="Message">

                                </textarea>
                            </div>
                            <button className={styles.button}>
                                Envoyer
                            </button>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}