import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './component/footer'
import HeaderBadged from './component/headerbadged'
import Navbar from './component/navbar'
import Section7 from './component/section7'
import Section8 from './component/section8'


export default function Detaille() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <HeaderBadged/>
      <Section7/>
      <Section8/>
      <Footer style={{marginTop:-70}}/>
    </div>
  )
}
