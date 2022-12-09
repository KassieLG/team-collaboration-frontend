import { useRouter } from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'

import styles from '../styles/Home.module.css'
import HotelTable from '../src/hotelTable';
import FlightTable from '../src/flightTable';
import axios from "axios";
import { useEffect, useState } from "react";


export default function searchList() {
    const router = useRouter()
    const {location} = router.query
    const search=getResults();
    const [searchResults, setSearchResults]=useState([]);
    const [loading,setLoading]=useState(true);

    function refresh(){
       
        console.log("The query:")
        console.log(location)
        axios.post('http://localhost:3500/search-hotels', {city:  location}).then(res=>{
            setSearchResults(res.data);
            setLoading(false);
        })
    }
    useEffect(()=>{
      if(!router.isReady) return;
      refresh()},[router.isReady])

    if(loading){
        return (
        <div className={styles.container}>
        <Head>
          <title>National Quick Travel</title>
        </Head>
        <Header />
        <h2>Please Wait</h2>
        <p>{String(loading)}</p>
        </div>);
    }
    return (
      <div className={styles.container}>
        <Head>
          <title>National Quick Travel</title>
        </Head>
        <Header />
  
        <h1>Hotel</h1>
        <HotelTable data={searchResults}></HotelTable>
        <hr/>


  
        <Footer />
      </div>
    );
  }
  async function getResults(){
    const router = useRouter()
const {query} = router.query
   

  }