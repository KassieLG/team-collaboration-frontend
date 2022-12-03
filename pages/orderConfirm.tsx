import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import { OrderConfirm } from '../src/components/OrderConfirm'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function orderConfirm() {
  return (
    <div className={styles.container}>
      <Head>
        <title>National Quick Travel</title>
      </Head>
      <Header />
      <h1>Your Booking Confirmation</h1>
    <OrderConfirm />
  <Footer />
    </div>
  )
}
