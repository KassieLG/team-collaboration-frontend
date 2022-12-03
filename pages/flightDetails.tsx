import Head from 'next/head'
import Image from 'next/image'
import { FlightInfo } from '../src/components/FlightInfo'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function flightDetails() {
  return (
    <div className={styles.container}>
      <Head>
        <title>National Quick Travel</title>
      </Head>
      <Header />
      <h1>Your Flight Information</h1>

  <FlightInfo />
<Footer />
    </div>
  )
}
