import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import { Cart } from '../src/components/Cart'
import styles from '../styles/Home.module.css'

export default function cart() {
  return (
    <div className={styles.container}>
      <Head>
        <title>National Quick Travel</title>
      </Head>
      <Header />
      <h1>Your Cart Items</h1>
      <Cart />
      <Footer />
    </div>
  )
}
