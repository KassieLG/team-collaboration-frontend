import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../src/components/Card'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>National Quick Travel</title>
      </Head>
      <Header />
      <img src="/Images/rome.jpg" alt="rome"/>
    </div>
  )
}