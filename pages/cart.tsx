import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import { Cart } from '../src/components/Cart'
import styles from '../styles/Home.module.css'
import { useOrder } from '../src/components/OrderProvider'
import { useCustomer } from '../src/components/CustomerProvider'


export default function cart() {
  
  const d = new Date(0);

  const order=useOrder();
  const customer =useCustomer();
  return (
    
    <div className={styles.container}>
      <Head>
        <title>National Quick Travel</title>
      </Head>
      <Header />
      <h1>Your Cart Items</h1>
      <ul>
        <li>
          Hotel Name: {order.hotelName}
        </li>
        <li>
          Flight ID: {order.flightID}
        </li>
        <li>
          Customer Name: {customer.customerFirstName} {customer.customerLastName}
        </li>
      
      </ul>
      
      <Footer />
    </div>
  )
}
