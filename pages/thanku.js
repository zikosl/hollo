import Image from 'next/image'
import styles from './styles/thanku.module.css'
import Footer from './component/footer'
import Header from './component/header'
import Section9 from './component/Section9'
import Navbar from './component/navbar'



export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Navbar/>
      <div className={styles.body}>
        <div className={styles.h1}>Thank You!</div>
        <div className={styles.h2}>Welcome to the <span>HOLLO</span> crew! <br/>Let’s help you grow your network
<br/><span>#HOLLONFC</span></div>
      </div>
      <Footer style={{marginTop:-100}}/>
    </div>
  )
}
