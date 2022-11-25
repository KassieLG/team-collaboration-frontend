import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../src/components/Card'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>National Quick Travel</title>
      </Head>
      <Header />
      <h1>Your Flight Information</h1>

      <table className="border: 0px solid #282929;" border="0" align="left">
<tbody>
<tr className="background-color: #282929;">
<td className="text-align: left;"><span className="background-color: #282929;">Flight number: xxxxxxxxxx</span></td>
</tr>
<tr className="background-color: #282929;">
<td className="text-align: left;"><span className="background-color: #282929;">Airline</span></td>
<td className="text-align: left;"><span className="background-color: #282929;">From</span></td>
<td className="text-align: left;"><span className="background-color: #282929;">To</span></td>
</tr>
<tr className="background-color: #282929;">
<td> <img src="/Images/aircanada.png" alt="rome"/></td>
<td className="text-align: left;"><span className="background-color: #282929;">Toronto</span></td>
<td className="text-align: left;"><span className="background-color: #282929;">Calgary</span></td>
</tr>
<tr className="background-color: #282929;">
<td className="text-align: left;"><span className="background-color: #282929;">Depart Time</span></td>
<td className="text-align: left;"><span className="background-color: #282929;">Duration</span></td>
<td className="text-align: left;"><span className="background-color: #282929;">Arrive Time</span></td>
</tr>
<tr className="background-color: #282929;">
<td className="text-align: left;"><span className="background-color: #282929;">8:00 am</span></td>
<td className="text-align: left;"><span className="background-color: #282929;">5 hours</span></td>
<td className="text-align: left;"><span className="background-color: #282929;">1:00 pm</span></td>
</tr>
</tbody>
</table>
    </div>
  )
}
