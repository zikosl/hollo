import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './component/footer'
import Header from './component/header'
import Section1 from './component/section1'
import Section2 from './component/section2'
import Section3 from './component/section3'
import Section4 from './component/section4'
import Section5 from './component/section5'
import Section6 from './component/section6'

export default function Index() {
  return (
    <div className={styles.container}>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </div>
  )
}
