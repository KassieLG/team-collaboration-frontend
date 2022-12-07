import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'
import { useEffect } from "react";
import type { AppProps } from 'next/app'
import { OrderProvider } from "../src/components/OrderProvider";
import { CustomerProvider } from "../src/components/CustomerProvider";
import { HotelProvider } from "../src/components/HotelProvider";
import '../styles/table.css'



export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
  <HotelProvider>
  <CustomerProvider>
    <Component {...pageProps} />
  </CustomerProvider>
  </HotelProvider>)
   
}
