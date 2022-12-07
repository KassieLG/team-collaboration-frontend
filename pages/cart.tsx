import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import styles from '../styles/Home.module.css'
import { useCustomer } from '../src/components/CustomerProvider'
import { HotelDetails } from '../src/components/HotelDetails'
import { FlightDetails } from '../src/components/FlightDetails'



export default function cart() {
  
  const customer = useCustomer();  


  return (
    
    <div className={styles.container}>
      <Head>
        <title>National Quick Travel</title>
      </Head>
      <Header />
      <h1>Your Cart Items</h1>
      <fieldset>
      <ul>
        <li>
          <HotelDetails/>
        </li>
        <li>
          <FlightDetails/>
        </li>
        <li>
           Name: {customer.customerFirstName} {customer.customerLastName}
        </li>
      
      </ul>
      </fieldset>
      <Footer />
    </div>
  )
}
