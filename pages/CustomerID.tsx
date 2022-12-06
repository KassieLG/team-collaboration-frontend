import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../src/components/Card'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import { CustomerID } from '../src/components/CustomerID'
import styles from '../styles/Home.module.css'

export default function customerID() {
  return (
    <div className={styles.container}>
      <Head>
        <title>National Quick Travel</title>
      </Head>
      <Header />
      <h1>Enter Your Details</h1>
       <CustomerID />
      <Footer />
    </div>
  )
}
