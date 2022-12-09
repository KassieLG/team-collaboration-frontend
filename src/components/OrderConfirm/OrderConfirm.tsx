import axios from "axios";
import { CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH } from "next/dist/shared/lib/constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FlightDetails } from "../FlightDetails";
import { useFlight } from "../FlightProvider";
import { HotelDetails } from "../HotelDetails";
import { useHotel } from "../HotelProvider";

export const OrderConfirm = () => {
    const router = useRouter();
    const hotel=useHotel();
    const flight=useFlight();
    const {FName, LName, Pass, DOB, email, FID, HID} = router.query
    const [orderDetails, setOrderDetails]=useState();
    const [loading,setLoading]=useState(true);
    function getOrder(){
      console.log(router.query)
      console.log(FName)
      axios.post('http://localhost:3500/confirm',{fname:FName, lname:LName, gender:'M', dob:DOB, cust_email:email, cust_pass:Pass, flight_id:FID, hotel_id:HID}).then(res=>{
        setOrderDetails(res.data);
        setLoading(false);
      })
    }
    useEffect(()=>{
      if(!router.isReady) return;
      getOrder()},[router.isReady]
      )
      const calculateTotal=(hotel.price + flight.price)

    return (
      <table id="cart" className="tbl" >
  <tr>
    <td> <span className="bold">Booking Number</span></td>
    <td> <span className="bold">Flight Details</span></td>
    <td> <span className="bold">Hotel Details</span></td>
    <td> <span className="bold">Price</span></td>
  </tr>
  <tr>
    <td>{orderDetails}</td>
    <td><FlightDetails/></td>
    <td><HotelDetails/></td>
    <td>${calculateTotal}</td>
  </tr>
  <tr>
    <td> <span className="bold">Payment Method</span></td>
    <td> <span className="bold">Status</span></td>
  </tr>
  <tr>
    <td>Visa</td>
    <td>Confirmed</td>
  </tr>
</table>
    )
}