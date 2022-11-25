import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import { Card } from '../src/components/Card'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>National Quick Travel</title>
      </Head>
      <body>
      <div><input name="Button1" type="button" value="Login" /><input name="Button2" type="button" value="Sign Up" /></div>

      </body>
      
      <Header />

      <Card />

      <Footer />
    </div>
  )
}
