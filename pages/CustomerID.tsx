import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../src/components/Card'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import { BookingRaF } from '../src/components/BookingRaF'
import styles from '../styles/Home.module.css'

export default function CustomerID() {
  return (
    <div className={styles.container}>
      <Head>
        <title>National Quick Travel</title>
      </Head>
      <Header />
      <Footer />
    </div>
  )
}
