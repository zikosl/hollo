import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Footer from './component/footer'
import Header from './component/header'
import Section9 from './component/Section9'
import Navbar from './component/navbar'



export default function Pay() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Header/>
      <Section9/>
      <Footer style={{marginTop:-100}}/>
    </div>
  )
}
