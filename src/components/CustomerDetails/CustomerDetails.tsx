import { Axios } from "axios";
import { Router, useRouter } from "next/router";
import { useCustomer } from "../CustomerProvider";
import { useFlight } from "../FlightProvider"
import { useHotel } from "../HotelProvider";

export const CustomerDetails = () => {
    const customer=useCustomer();
    const flight = useFlight();
    const hotel= useHotel();
    const router=useRouter();
    const checkOutHandle=()=>{
        router.push({
          pathname:'/orderConfirm',
          query:{FName:customer.customerFirstName, LName:customer.customerLastName, Pass:customer.customerPass, DOB:customer.customerDOB, email:customer.customerEmail, FID: flight.id, HID:hotel.id }
        })
    }
    if(customer.customerFirstName != ''){
    return (

            <div>
              <ul>
                <li><h2>Customer</h2> </li>
                <li>Name: {customer.customerFirstName} {customer.customerLastName} </li>
                <li>Passport: {customer.customerPass}</li>
                <li>Phone: {customer.customerPhone}</li>
                <li>DoB: {customer.customerDOB}</li>
                <li>Email: {customer.customerEmail}</li>
                <button onClick={checkOutHandle}>Checkout</button>
                <li></li>                
          </ul>
            </div>

    )
    }
    else return(
        <div>
          <a href="./CustomerID"><button>Add Customer Info</button></a>
        </div>
    )
}