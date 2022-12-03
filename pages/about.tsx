import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>National Quick </title>
      </Head>

      <Header />

      <Link href="src/component/AboutPage">About Page</Link>

      <Footer />
    </div>
  )
}
