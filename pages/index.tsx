import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../src/components/Card'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import { BookingRaF } from '../src/components/BookingRaF'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>National Quick Travel</title>
      </Head>
      <Header />

      <Link href="src/components/BookingRaF">BookingRaF</Link>
      <Link href="src/components/Card">Card</Link>

      <Footer />
    </div>
  )
}
