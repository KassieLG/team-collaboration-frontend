import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import { BookingRaF } from '../src/components/BookingRaF'
import { HotelDetails } from '../src/components/HotelDetails'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function hotelDetails() {
  return (
    <div className={styles.container}>
      <Head>
        <title>National Quick Travel</title>
      </Head>
      <h1>Your Flight Information</h1>
      <Header />
      <BookingRaF />
      <HotelDetails />
      <Footer />
    </div>
  )
}
