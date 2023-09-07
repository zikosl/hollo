import React, { useState } from "react";
import  Image from "next/image"
import styles from "../styles/checkout.module.css"
import Radio from "./radio";
import { ChevronsUpDown } from "lucide-react";

const country = ["Algeria"]
const City = ["Tebessa","Algeirs","Blida","Oran","Constantine","Annaba"]

export default function Checkout () {
    return (
        <div className={styles.header} >
            <p className={styles.h1}>Checkout</p>
            <p className={styles.h2}>Billing address</p>
            <div className={styles.row}>
                <InputCustom style={{marginLeft:2}} placeholder={"first name"}/>
                <InputCustom placeholder={"last name"}/>
            </div>
                <InputCustom style={{marginLeft:2}} placeholder={"address line - 1"}/>
                <InputCustom style={{marginLeft:2}} placeholder={"city"}/>
            <div className={styles.row}>
                <SelectCustom values={country} style={{marginLeft:2}} placeholder={"country"}/>
                <SelectCustom values={City} placeholder={"state"}/>
            </div>
            <div className={styles.row}>
                <InputCustom style={{marginLeft:2}} placeholder={"email"}/>
                <InputCustom placeholder={"phone"}/>
            </div>
            <p className={styles.h2}>Payment options</p>
            <Radio/>
        </div>
    )
}


const InputCustom = ({placeholder,style}) =>{
    return(
        <input type="text" style={style} placeholder={placeholder} className={styles.input}/>
    )
}
const SelectCustom = ({placeholder,style,values =[]}) =>{
    const [active,setActive] = useState(false)
    const [selected,setSelected] = useState(-1)
    return(
        <div style={{display:"flex",flex:1,position:"relative",margin:"7px 22px"
        ,flexDirection:"column",...style}}>
            <div onClick={()=>setActive(!active)} className={styles.select}>
                <p style={selected == -1 ? {} : {color:"#303030"}}>
                    {selected == -1 ? placeholder : values[selected]}
                </p>
                <ChevronsUpDown size={19} color="#BDBDBD"/>
            </div>
            <div className={`${active && styles.active} ${styles.list}`}>
               {
                   values.map((v,i)=>(
                    <div onClick={()=>{
                        setSelected(i)
                        setActive(false)
                    }} key={i} className={styles.item}>{v}</div>
                   ))
               }
            </div>
        </div>
    )
}