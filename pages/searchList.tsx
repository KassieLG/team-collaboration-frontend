import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import { Card } from '../src/components/Card'
import styles from '../styles/Home.module.css'
import HotelTable from '../src/hotelTable';
import FlightTable from '../src/flightTable';

export default function searchList() {
  return (
    <div className={styles.container}>
      <Head>
        <title>National Quick Travel</title>
      </Head>
      <Header />

      <h1>Hotel</h1>
      <HotelTable data/>
      <hr/>

     

      <Footer />
    </div>
  );
}
